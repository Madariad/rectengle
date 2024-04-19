// App.js
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import SoundBall from './SoundBall';

function App() {
  const [audioData, setAudioData] = useState(new Uint8Array(0));
  const [audioContext, setAudioContext] = useState(null);
  const [analyser, setAnalyser] = useState(null);
  const [microphone, setMicrophone] = useState(null);

  useEffect(() => {
    if (audioContext === null) {
      setAudioContext(new AudioContext());
    }
  }, []);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const mic = audioContext.createMediaStreamSource(stream);
      const analyserNode = audioContext.createAnalyser();
      analyserNode.fftSize = 2048;
      mic.connect(analyserNode);
      setMicrophone(mic);
      setAnalyser(analyserNode);
      const bufferLength = analyserNode.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      setAudioData(dataArray);
      const draw = () => {
        analyserNode.getByteTimeDomainData(dataArray);
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          const x = dataArray[i] / 128.0 - 1.0;
          sum += x * x;
        }
        const rms = Math.sqrt(sum / bufferLength);
        setAudioData(dataArray.slice());
        requestAnimationFrame(draw);
      };
      draw();
    });
  };

  const stopRecording = () => {
    microphone.disconnect();
    analyser.disconnect();
  };

  return (
    <div>
      <Button onClick={startRecording}>Начать</Button>
      <Button onClick={stopRecording}>Закончить</Button>
      <SoundBall audioData={audioData} />
    </div>
  );
}

export default App;
