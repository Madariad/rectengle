// SoundBall.js
import React from 'react';

function SoundBall({ audioData }) {
  // Находим максимальное значение в массиве audioData
  const volume = Math.max(...audioData);
  // Ограничиваем размер шарика, чтобы он не становился бесконечным
  const maxBallSize = 200; // Максимальный размер шарика
  const ballSize = Math.min(volume, maxBallSize); // Используем меньшее из двух значений

  return (
    <div
      style={{
        width: ballSize + 'px', // Добавляем 'px' к значению размера
        height: ballSize + 'px', // Добавляем 'px' к значению размера
        borderRadius: '50%',
        backgroundColor: 'blue',
        transition: 'width 0.1s, height 0.1s',
        margin: '10px auto'
      }}
    />
  );
}

export default SoundBall;
