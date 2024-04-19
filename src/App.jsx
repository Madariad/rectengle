import React, { useState, useRef } from 'react';



const App = () => {
  console.log(window.webkitSpeechRecognition);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [ballSize, setBallSize] = useState(100); // Начальный размер шарика


  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  let text = ''
  
  
  
  recognition.addEventListener("result", (e) => {
  
    const text = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");
      console.log(text);
    });
  
    recognition.addEventListener("end", () => {
      recognition.start();
    });
    
  
  


  

  return (
    <div>
     {text}
    </div>
  );
};

export default App;
