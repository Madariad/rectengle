import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import img from'./assets/img/img.webp';

const App = () => {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [ballSize, setBallSize] = useState(40); // Минимальный размер шарика
  const minVolume = 40; // Минимальная громкость для изменения размера шарика

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

      transcript.at(-1) === 'а' ? val() : '';
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
    <Container className="p-3">
      <Row className="justify-content-md-center">
        <Col md={6} xs={12}>
          <Button variant="success" onClick={() => setIsListening(true)}>Начать прослушивание</Button>
          <Button variant="danger" onClick={() => setIsListening(false)}>Закончить прослушивание</Button>
          <p>{text}</p>
          <Image src={img} style={{width: '100px'}} fluid />
          <div style={{ width: ballSize, height: ballSize, borderRadius: '50%', background: 'red', transition: 'width 0.5s, height 0.5s' }}>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
