import React, { useState, useEffect } from 'react';

const App = () => {
  const [text, setText] = useState(''); 
  const [isListening, setIsListening] = useState(false); 

  const [ballSize, setBallSize] = useState(100); 

  const [IsA, setIsA] = useState('false'); 

  useEffect(() => {
    const recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
    // const speechRecognitionList = new SpeechGrammarList();

// Грамматика для распознавания только буквы 'a'
    const grammar = '#JSGF V1.0; grammar letters; public <letter> = a ;';

// Добавляем грамматику к списку
    SpeechGrammarList.addFromString(grammar, 1);

// Устанавливаем грамматику для объекта распознавания речи
    recognition.grammars = speechRecognitionList;

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
      // setIsA(e);
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
