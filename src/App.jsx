import React, { useState, useEffect } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [ballSize, setBallSize] = useState(100);
  const [recognition, setRecognition] = useState(null);

  const a = []

  if (text) {
    a.push(Array.from(text))

  }

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const speechRecognitionInstance = new SpeechRecognition();
    setRecognition(speechRecognitionInstance);

    const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
    const speechRecognitionList = new SpeechGrammarList();

    const grammar = '#JSGF V1.0; grammar letters; public <letter> = a ;';
    speechRecognitionList.addFromString(grammar, 1);
    speechRecognitionInstance.grammars = speechRecognitionList;

    speechRecognitionInstance.interimResults = true;
    speechRecognitionInstance.continuous = true;
    speechRecognitionInstance.lang = 'ru-RU';

    speechRecognitionInstance.onresult = (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("")
        .toLowerCase();
      setText(transcript);
      if (transcript.includes('a')) {
        setBallSize((currentSize) => currentSize + 10);
      }
    };

    if (isListening) {
      speechRecognitionInstance.start();
    }

    return () => {
      speechRecognitionInstance.stop();
      speechRecognitionInstance.onresult = null;
      speechRecognitionInstance.onend = null;
    };
  }, [isListening]);

  return (
    <div>
      <button onClick={() => setIsListening(true)}>Начать прослушивание</button>
      <button onClick={() => setIsListening(false)}>Закончить прослушивание</button>
      <p>{text}</p>
      <p>{ballSize}</p>
      <p>{a}</p>
      <div style={{ width: ballSize, height: ballSize, borderRadius: '50%', background: 'red' }}>
        {/* Шарик */}
      </div>
    </div>
  );
};

export default App;
