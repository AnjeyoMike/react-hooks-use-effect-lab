/*import React, { useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);*/

  // add useEffect code

  /*function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;*/

import React, { useState, useEffect } from 'react';

const Question = ({ onAnswered }) => {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    // Set up the timeout to decrease timeRemaining by 1 every second
    const timer = setTimeout(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(prevTime => prevTime - 1);
      } else {
        setTimeRemaining(10);
        onAnswered(false);
      }
    }, 1000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timer);

    // The effect depends on timeRemaining and onAnswered
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <p>Time Remaining: {timeRemaining}</p>
      {/* Render the question content here */}
    </div>
  );
};

export default Question;

