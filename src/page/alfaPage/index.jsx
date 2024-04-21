import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import img from'@/assets/img/img.webp';
import { useParams } from "react-router-dom";

const  alfaPage = () => {
  const {alfa} = useParams();
  console.log(typeof(alfa));
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [ballSize, setBallSize] = useState(40); 
  const minVolume = 40;

  function val() {
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then((stream) => {
        const audioContext = new AudioContext();
        const analyser = audioContext.createAnalyser();
        const microphone = audioContext.createMediaStreamSource(stream);
        microphone.connect(analyser);
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        function updateVolume() {
          analyser.getByteFrequencyData(dataArray);

          let sum = 0;
          for (let i = 0; i < bufferLength; i++) {
            sum += dataArray[i];
          }
          let averageVolume = sum / bufferLength;

          // Устанавливаем размер шарика с учетом минимальной громкости
          const newSize = Math.max(minVolume, averageVolume);
          setBallSize(newSize);

          setTimeout(updateVolume, 100);
        }
        updateVolume();
      })
      .catch((error) => {
        console.error('Ошибка при получении медиа-потока:', error);
      });
  }

  useEffect(() => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new window.SpeechRecognition();

    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.lang = 'ru-RU';

    recognition.onresult = (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("")
        .toLowerCase();
      setText(transcript);

      transcript.at(-1) === alfa ? val() : '';
    };

    if (isListening) {
      recognition.start();
    }

    recognition.onend = () => {
      if (isListening) {
        recognition.start();
      }
    };

    return () => {
      recognition.stop();
    };
  }, [isListening]);

  return (
    <Container>
      <div style={{height: '100vh', paddingTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px'}}>
          {text == alfa ? ( <div style={{width: '500px', padding: '20px', backgroundColor: 'red'}}>
              Првильно продолжайте говорить букву {alfa}
          </div>) : (<div style={{width: '500px', padding: '20px', backgroundColor: '#5885ad', color: 'InfoBackground'}}>Говарите букву: <span style={{color: 'yellow', fontWeight: 'bold'}}>{alfa}</span></div>)}
          <div>
            <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
              <div style={{height: '50vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <div style={{ width: ballSize, height: ballSize, borderRadius: '50%', background: 'red', transition: 'width 0.5s, height 0.5s'}}>
                  </div>
              </div>
              <div style={{display: 'flex', gap: '30px'}}>
                  <Button variant="success" onClick={() => setIsListening(true)}>Начать прослушивание</Button>
                  <Button variant="danger" onClick={() => setIsListening(false)}>Закончить прослушивание</Button>
              </div>
            </div>
          </div>
      </div>
    </Container>
  );
};


export default alfaPage