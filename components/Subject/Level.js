import React, { useContext } from "react";
import axios from "axios";
import { server } from "@/pages/index.js";
import { useRouter } from 'next/router';
import { toast } from "react-hot-toast";
import { Message_Data } from "../../context/Context.js";

const Level = ({ levels, arenaDesc }) => {
  const router = useRouter();
  const {setQuizData} = useContext(Message_Data);
  let counter = 0;
  console.log(arenaDesc);
  const submitHandler = async (levelDesc,arenaDesc,currentLevel) => {
    try {
      const result = await axios.post(
        `${server}/api/generate`,
        {
          levelDesc,
          arenaDesc,
          currentLevel
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false,
        });
      console.log("Level");
      console.log(result.data); // Assuming the data is under the 'data' key, adjust accordingly
      setQuizData(result.data);
      router.push("/quiz");
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };
  return (
    <div className=" p-4">
      {levels.map((level, levelVal) => {
        counter++;
        return (
          <>
            <div
              key={levelVal}
              className=" bg-primary items-center flex flex-row text-white m-2 p-4 rounded-xl text-lg"
            >
              Level {counter} : {level.levelDesc}
              <div className=" flex-grow" />
              <button
                onClick={() => submitHandler(level.levelDesc,arenaDesc, counter)}
                className=" rounded-lg p-2 text-base bg-green-500"
              >
                Attempt
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Level;
