import React, { useState } from 'react';
import '../App.css';

export default function Quizblock() {
  const quiz = [
    {
      question: "What is the capital of India?",
      options: ["Pakistan", "Lahore", "Bhopal", "Delhi"],
      ans: 'Delhi',
    },
    {
      question: "who is the prime minister of india?",
      options: ["imran khan", "donld trum", "rahul gandi", "narendra modi"],
      ans: 'narendra modi',
    },
    {
      question: "cow has_____ legs?",
      options: ["45", "4", "987", "0"],
      ans: '4',
    },
    {
      question: "4+5?",
      options: ["9", "34", "5", "6"],
      ans: '9',
    },
    {
        question: "45+45",
        options: ["78", "85", "90", "45"],
        ans: '90',
      },

  ];

  const [questions, setQuestions] = useState(0);
  const [checked, setChecked] = useState('');  
  const [score, setScore] = useState(0); 

  function handleOptionChange(event) {
    setChecked(event.target.value); 
  }

  function checkedAns() {
    if (checked === quiz[questions].ans) {
      setScore(score + 1); 
    }
    setChecked(''); 

    
    if (questions + 1 === quiz.length) {
      alert(`Your score is: ${score} / ${quiz.length}`);
    } else {
      setQuestions(questions + 1);
    }
  }
  

  function restart(){
    setQuestions(0);
    setScore(0);
    if(quiz.length === 0){
      alert('quiz is restart');
    }
  }

  return (
    <div className='container'>
       <div className='block'>
       <div className='headding'> <h1>Quiz</h1></div>
      <div className='question'>{quiz[questions].question}</div>
      <div className='options'>

        {quiz[questions].options.map((option, index) => (
          <div className='option' key={index}>
            <input
              type='radio'
              id={`option-${index}`}
              name='answer'
              value={option}
              checked={checked === option}
              onChange={handleOptionChange} 
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
      <div className='btn'>
        <button onClick={checkedAns}>Submit</button>
        <button onClick={restart}>Restart</button>
      </div>
       </div>
    </div>
  );
}
