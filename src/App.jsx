import React, { useState, useEffect } from 'react';

const App = () => {
  const [text, setText] = useState(''); // Используем useState для управления текстом
  const [isListening, setIsListening] = useState(false); // Состояние прослушивания

  const [ballSize, setBallSize] = useState(100); // Начальный размер шарика

  const [IsA, setIsA] = useState('false'); 

  useEffect(() => {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new window.SpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = true; // Установка непрерывного распознавания

    recognition.onresult = (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("")
        .toLowerCase(); // Приводим к нижнему регистру
      setText(transcript); // Обновляем состояние текста
      if (transcript == 'a' || transcript == "a" || transcript == 'A' || transcript == "A") { // Используем includes вместо строгого сравнения
        setIsA('True');
        setBallSize((currentSize) => currentSize + 10);
      }
    };

    if (isListening) {
      recognition.start(); // Запускаем распознавание
    }

    recognition.onend = () => {
      if (isListening) {
        recognition.start(); // Перезапускаем распознавание, если нужно
      }
    };

    return () => {
      recognition.stop(); // Очистка при размонтировании компонента
    };
  }, [isListening]); // Зависимость от состояния прослушивания

  return (
    <div>
      <button onClick={() => setIsListening(true)}>Начать прослушивание</button>
      <button onClick={() => setIsListening(false)}>Закончить прослушивание</button>
      <p>{text}</p>
      <p>{IsA}</p>
      <p>{ballSize}</p>
      

      <div style={{ width: ballSize, height: ballSize, borderRadius: '50%', background: 'red' }}>
            {/* Шарик */}
          </div>
    </div>
  );
};

export default App;
