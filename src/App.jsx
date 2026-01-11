import { useState } from 'react'
import "./App.css"

function App() {
  return (
    <>
      <div className="quiz-app">
        <div className="score-section" >
        <h2>Your Score: 3/3</h2>
        <button>Restart</button>
        </div>
        <div className="question-section">
          <h2>Question 1</h2>
          <p>This is sample Question</p>
          <div className="options">
            <button>option-1</button>
            <button>option-2</button>
            <button>option-3</button>
            <button>option-4</button>
          </div>
          <div className="timer">Time Left:5s</div>
        </div>
      </div>
    </>
  );

}

export default App;
