import { useState } from "react";
import QuizStatus from "./QuizStatus";
import CorrectAnswerAnimation from "../animation/CorrectAnswerAnimation";
import WrongAnswerAnimation from "../animation/WrongAnswerAnimation";

const QuizWindow = ({ data, setQuestionAttempted, questionAttempted }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerCorrect, setAnswerCorrect] = useState(false)
  const [showQuizStatus, setShowQuizStatus] = useState(false)
  
  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };

  const checkAnswer = () => {
    const currentQuestion = data[currentQuestionIndex];
    setShowQuizStatus(true);

    // Ensure that currentQuestion is defined before accessing its properties
    if (currentQuestion) {
      if (selectedAnswer === currentQuestion.ans) {
        setAnswerCorrect(true)
      } else {
        setAnswerCorrect(false)
      }

      // // Move to the next question

    }

  };

  const nextQuestionHandler = () => {
    setShowQuizStatus(false);
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null); // Reset selected answer for the next question
    }
    setQuestionAttempted(questionAttempted + 1)
  }

  return (
    <>
      <div className=" w-[100%] flex flex-col justify-between h-[86vh] " >


        <div className=" w-[100%] flex flex-col justify-center items-center mt-[4rem] gap-[2rem]  ">
          <h2 className=" font-dm_sans font-[600] px-[2rem] py-[1rem] rounded-full  text-[1.5rem]  ">{data[currentQuestionIndex]?.text}</h2>
          <div className=" flex justify-center items-center flex-wrap gap-[2rem] w-[45rem] " >
            {data[currentQuestionIndex]?.options.map((option, optionIndex) => (
              <button
                key={optionIndex}
                onClick={() => handleOptionSelect(option)}
                disabled={selectedAnswer !== null}
                className={`${selectedAnswer === option ? " bg-primary bg-opacity-100 text-white " : "bg-primary bg-opacity-[.1] text-black "}   font-nunito w-[20rem] font-bold py-2 px-4 rounded mb-2 ${selectedAnswer && 'cursor-not-allowed'}`}
              >
                {option} {/* Access the first value of the nested object */}
              </button>
            ))}
          </div>
        </div>
        <div className={` ${answerCorrect && selectedAnswer && showQuizStatus ? " bg-[#d7ffb8]  " : !answerCorrect && selectedAnswer && showQuizStatus ? "bg-[#ffdfe0]" : null} flex  justify-center items-center w-[100%] h-[10rem] border-t-[1px] border-black border-opacity-25`} >

          <div className=" flex  justify-between items-center w-[50rem] " >

            <div className=" flex justify-center items-center gap-[.5rem] " >
              <div>
                {
                  answerCorrect && selectedAnswer && showQuizStatus ? <CorrectAnswerAnimation /> : !answerCorrect && selectedAnswer && showQuizStatus ? <WrongAnswerAnimation /> : null
                }
              </div>
              <div className=" flex flex-col  " >
                <h2 className={` ${answerCorrect && selectedAnswer && showQuizStatus ? " text-green-700  " : !answerCorrect && selectedAnswer && showQuizStatus ? "text-red-500" : null} text-[1.5rem] font-dm_sans font-[600] `} >{
                  answerCorrect && selectedAnswer && showQuizStatus ? "Correct Answer " : !answerCorrect && selectedAnswer && showQuizStatus ? "Wrong Answer" : null
                }</h2>
                <h3 className={` ${answerCorrect && selectedAnswer && showQuizStatus ? " text-green-700  " : !answerCorrect && selectedAnswer && showQuizStatus ? "text-red-500" : null} text-[1rem] font-dm_sans font-[400] `} >{
                  selectedAnswer && showQuizStatus ? data[currentQuestionIndex].ans : null
                }</h3>
              </div>
            </div>
            <button
              onClick={checkAnswer}
              disabled={selectedAnswer === null}
              className={`${showQuizStatus ? "hidden" : ""}   ${selectedAnswer ? " bg-primary opacity-100 " : "bg-primary   "} mt-4  text-white font-bold py-2 px-[2rem] rounded ${selectedAnswer === null && 'cursor-not-allowed'}`}
            >
              Submit Answer
            </button>
            <button
              onClick={nextQuestionHandler}
              disabled={selectedAnswer === null}
              className={`${showQuizStatus ? "" : "hidden"} ${answerCorrect && selectedAnswer && showQuizStatus ? " bg-[#61e002]  " : !answerCorrect && selectedAnswer && showQuizStatus ? "bg-[#ff5252]" : null}   ${selectedAnswer ? " bg-primary opacity-100 " : "bg-primary   "} mt-4  text-white font-bold py-2 px-[2rem] rounded ${selectedAnswer === null && 'cursor-not-allowed'}`}
            >
              Next Question
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizWindow;
