import React, { useState, useEffect } from 'react';

const App = () => {
  const [ballSize, setBallSize] = useState(100);
  const [audioContext, setAudioContext] = useState(null);
  const [analyser, setAnalyser] = useState(null);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (!audioContext) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const context = new AudioContext();
      const analyser = context.createAnalyser();
      setAudioContext(context);
      setAnalyser(analyser);
    }

    if (audioContext && isListening) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateBallSize = () => {
          analyser.getByteFrequencyData(dataArray);
          let sum = 0;
          for (let i = 0; i < bufferLength; i++) {
            sum += dataArray[i];
          }
          const averageVolume = sum / bufferLength;
          const newBallSize = Math.min(Math.max(100, averageVolume * 2), 300); // Примерный расчет размера
          setBallSize(newBallSize);
          requestAnimationFrame(updateBallSize);
        };

        updateBallSize();
      });
    }

    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [audioContext, isListening]);

  return (
    <div>
      <button onClick={() => setIsListening(true)}>Начать прослушивание</button>
      <button onClick={() => setIsListening(false)}>Закончить прослушивание</button>
      <div style={{ width: ballSize, height: ballSize, borderRadius: '50%', background: 'red' }}>
        {/* Шарик */}
      </div>
    </div>
  );
};

export default App;
