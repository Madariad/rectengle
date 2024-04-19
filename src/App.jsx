import React, { useState, useEffect } from 'react';

const App = () => {
  const [text, setText] = useState(''); 
  const [isListening, setIsListening] = useState(false); 

  const [ballSize, setBallSize] = useState(100); 

  const [IsA, setIsA] = useState('false');
  
  function val() {

     // Запрашиваем доступ к микрофону
 navigator.mediaDevices.getUserMedia({ audio: true, video: false })
 .then((stream) => {
   const audioContext = new AudioContext();
   const analyser = audioContext.createAnalyser();
   const microphone = audioContext.createMediaStreamSource(stream);
   microphone.connect(analyser);
   analyser.fftSize = 256;
   const bufferLength = analyser.frequencyBinCount;
   const dataArray = new Uint8Array(bufferLength);

   // Функция для обновления громкости
   function updateVolume() {
     analyser.getByteFrequencyData(dataArray);

     // Вычисляем среднюю громкость
     let sum = 0;
     for(let i = 0; i < bufferLength; i++) {
       sum += dataArray[i];
     }
     let averageVolume = sum / bufferLength;

     if (ballSize < averageVolume) {
      
       setBallSize(averageVolume);
     }


     // Повторяем функцию каждые 100 миллисекунд
     setTimeout(updateVolume, 100);
   }

   // Запускаем функцию обновления громкости
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
       
      transcript.at(-1) === 'а'? val() : ''
 
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
    <div>
      <button onClick={() => setIsListening(true)}>Начать прослушивание</button>
      <button onClick={() => setIsListening(false)}>Закончить прослушивание</button>
      <p>{text}</p>

      <p>{IsA}</p>
      <p>{ballSize}</p>
      

      <div style={{ width: ballSize, height: ballSize, borderRadius: '50%', background: 'red' }}>
       
          </div>
    </div>
  );
};

export default App;
