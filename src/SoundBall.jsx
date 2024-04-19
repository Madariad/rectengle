import React, { useState, useEffect } from 'react';
import { LiveAudioVisualizer } from 'react-audio-visualize';

const SoundBall = () => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [ballSize, setBallSize] = useState(50); // Начальный размер шарика

  useEffect(() => {
    // Запрашиваем доступ к микрофону и устанавливаем mediaRecorder
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const mr = new MediaRecorder(stream);
      setMediaRecorder(mr);
    }).catch(error => {
      console.error('Ошибка доступа к микрофону:', error);
    });
  }, []);

  const handleData = (audioData) => {
    // Обработка аудиоданных для изменения размера шарика
    const volume = Math.max(...audioData); // Получаем громкость
    const newBallSize = Math.min(200, (volume / 255) * 200); // Рассчитываем размер шарика
    setBallSize(newBallSize);
  };

  return (
    <div>
      {mediaRecorder && (
        <LiveAudioVisualizer
          mediaRecorder={mediaRecorder}
          width={500}
          height={500}
          onAudioProcess={handleData}
        />
      )}
      <div
        style={{
          width: ballSize,
          height: ballSize,
          borderRadius: '50%',
          backgroundColor: 'blue',
          transition: 'width 0.1s, height 0.1s',
          margin: '10px auto'
        }}
      />
    </div>
  );
};

export default SoundBall;
