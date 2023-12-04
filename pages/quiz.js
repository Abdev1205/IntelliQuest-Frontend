import React, { useEffect, useState } from 'react';
import Progressbar from '@/components/quiz/Progressbar';
import QuizWindow from '@/components/quiz/QuizWindow';

const Quiz = () => {
  const [questionAttempted, setQuestionAttempted] = useState(1);

  const sampleData = [

    {
      "format": "mcq",
      "text": "What is the French word for 'hello'?",
      "options": ["Bonjour", "Bonsoir", "Salut", "Merci"],
      "ans": "Bonjour"
    },
    {
      "format": "mcq",
      "text": "Which of the following means 'thank you' in French?",
      "options": ["Oui", "Non", "Merci", "S'il vous plaît"],
      "ans": "Merci"
    },
    {
      "format": "mcq",
      "text": "What is the French word for 'goodbye'?",
      "options": ["Merci", "Au revoir", "S'il vous plaît", "Excusez-moi"],
      "ans": "Au revoir"
    },
    {
      "format": "mcq",
      "text": "What is the word for 'she' in French?",
      "options": ["Il", "Elle", "Ils/Elles", "Nous"],
      "ans": "Elle"
    },
    {
      "format": "mcq",
      "text": "What is the word for 'we' in French?",
      "options": ["Vous", "Ils/Elles", "Nous", "Tu"],
      "ans": "Nous"
    },
    {
      "format": "mcq",
      "text": "What is the French word for 'hello'?",
      "options": ["Bonjour", "Bonsoir", "Salut", "Merci"],
      "ans": "Bonjour"
    },
    {
      "format": "mcq",
      "text": "Which of the following means 'thank you' in French?",
      "options": ["Oui", "Non", "Merci", "S'il vous plaît"],
      "ans": "Merci"
    },
    {
      "format": "mcq",
      "text": "What is the French word for 'goodbye'?",
      "options": ["Merci", "Au revoir", "S'il vous plaît", "Excusez-moi"],
      "ans": "Au revoir"
    },
    {
      "format": "mcq",
      "text": "What is the word for 'she' in French?",
      "options": ["Il", "Elle", "Ils/Elles", "Nous"],
      "ans": "Elle"
    },
    {
      "format": "mcq",
      "text": "What is the word for 'we' in French?",
      "options": ["Vous", "Ils/Elles", "Nous", "Tu"],
      "ans": "Nous"
    },

  ]


  return (
    <>
      <div className= 'flex flex-col items-center justify-between'>
        <Progressbar questionAttempted={questionAttempted} />
        <QuizWindow data={sampleData} setQuestionAttempted={setQuestionAttempted} questionAttempted={questionAttempted} />
      </div>
    </>
  );
};

export default Quiz;
