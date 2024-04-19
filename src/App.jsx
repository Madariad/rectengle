import React, { useState, useRef } from 'react';

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [ballSize, setBallSize] = useState(100); // Начальный размер шарика
  const recognition = useRef(null);

  // Функция для начала прослушивания
  const startListening = () => {
    recognition.current = new window.webkitSpeechRecognition();
    recognition.current.continuous = true; // Прослушивание без остановки
    recognition.current.lang = 'ru-RU';
    recognition.current.start();

    recognition.current.onresult = (event) => {
      const speechResult = event.results[event.resultIndex][0].transcript.toUpperCase();
      if (speechResult.includes(selectedLetter)) {
        // Увеличиваем шарик в зависимости от громкости
        setBallSize((currentSize) => currentSize + 10);
      }
    };
  };

  // Функция для остановки прослушивания
  const stopListening = () => {
    if (recognition.current) {
      recognition.current.stop();
      recognition.current = null;
    }
    setIsListening(false);
  };

  return (
    <div>
      {selectedLetter ? (
        <div>
          <h1>Выбранная буква: {selectedLetter}</h1>
          <button onClick={startListening} disabled={isListening}>
            Начать прослушивание
          </button>
          <button onClick={stopListening} disabled={!isListening}>
            Закончить прослушивание
          </button>
          <div style={{ width: ballSize, height: ballSize, borderRadius: '50%', background: 'red' }}>
            {/* Шарик */}
          </div>
        </div>
      ) : (
        <div>
          <h1>Выберите букву:</h1>
          <button onClick={() => setSelectedLetter('А')}>А</button>
          <button onClick={() => setSelectedLetter('Б')}>Б</button>
          {/* Добавьте другие буквы по аналогии */}
        </div>
      )}
    </div>
  );
};

export default App;
