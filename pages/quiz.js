import React, { useContext, useEffect, useState } from 'react';
import Progressbar from '@/components/quiz/Progressbar';
import QuizWindow from '@/components/quiz/QuizWindow';
import { Message_Data } from "../context/Context";

const Quiz = () => {
  const {quizData} = useContext(Message_Data);
  const [questionAttempted, setQuestionAttempted] = useState(1);

  return (
    <>
      <div className= 'flex flex-col items-center justify-between'>
        <Progressbar questionAttempted={questionAttempted} />
        <QuizWindow data={quizData.data.questions} setQuestionAttempted={setQuestionAttempted} questionAttempted={questionAttempted} />
      </div>
    </>
  );
};

export default Quiz;
