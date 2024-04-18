import React, { useState, useEffect } from 'react';

const App = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [spokenLetter, setSpokenLetter] = useState('');
  const [volume, setVolume] = useState(0); // Имитация громкости звука

  // Функция для начала прослушивания
  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'ru-RU';
    recognition.start();

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript.toUpperCase();
      setSpokenLetter(speechResult);
      // Здесь можно добавить логику для определения громкости
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    setIsListening(true);
  };

  // Функция для остановки прослушивания
  const stopListening = () => {
    setIsListening(false);
    // Остановить распознавание голоса
  };

  useEffect(() => {
    // Здесь можно добавить логику для изменения размера шарика в зависимости от громкости
  }, [volume]);

  return (
    <div>
      {selectedLetter ? (
        <div>
          <h1>Выбранная буква: {selectedLetter}</h1>
          <button onClick={startListening}>Начать прослушивание</button>
          <button onClick={stopListening} disabled={!isListening}>
            Остановить прослушивание
          </button>
          <p>Произнесенная буква: {spokenLetter}</p>
          {spokenLetter === selectedLetter && (
            <div>
              {/* Логика для увеличения шарика */}
              <h2>Шарик увеличивается!</h2>
            </div>
          )}
          {spokenLetter !== selectedLetter && (
            <div>
              {/* Логика для уменьшения шарика */}
              <h2>Говорите букву {selectedLetter}.</h2>
            </div>
          )}
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