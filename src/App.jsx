import React, { useState, useEffect } from 'react';

const App = () => {
  const [text, setText] = useState(''); 
  const [isListening, setIsListening] = useState(false); 

  const [ballSize, setBallSize] = useState(100); 

  const [IsA, setIsA] = useState('false');
  
  // data = {
  //   'a': () => setIsA('true'),
  // }
  

  useEffect(() => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new window.SpeechRecognition();
    
    recognition.interimResults = true;
    recognition.continuous = true; 
    recognition.lang = 'ru-RU';



    recognition.onresult = (e) => {
      arr = []
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("")
        .toLowerCase();
      setText(transcript); 
       
      arr.push(transcript);
      setIsA(arr);
      if (transcript == 'проверка' || transcript.indexOf('a') > 0) { 
        setBallSize((currentSize) => currentSize + 10);
      }
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
