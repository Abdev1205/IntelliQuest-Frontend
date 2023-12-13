import React from "react";
import Level from "./Level";

const Subject = ({ subjectName, arenas }) => {
  return (
    <div className=" bg-slate-200 w-full my-2 rounded-xl">
      <div className=" text-center p-6 ml-6 text-3xl">{subjectName}</div>
      <Divider />
      <div className=" p-4">
        <div className=" text-center text-2xl ml-6 p-4">Arenas</div>
        {arenas.map((arena, arenaVal) => {
          return (
            <>
              <div className="bg-slate-300 m-2 p-4 rounded-xl text-2xl " key={arenaVal}>
                {arena.arenaName}
                <Level levels={arena.levels} arenaDesc={arena.arenaDesc} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

const Divider = () => <hr className="h-1 rounded-xl mx-4 bg-slate-300" />;

export default Subject;
