import React from "react";

const Subject = ({ subjectName, arenas }) => {
  return (
    <div className=" bg-slate-200 h-52 w-full my-2 rounded-xl">
      {subjectName}
      <div className=" p-4 text-xl">
        {arenas.map((arena) => {
          <div key={arena._id}>
             Hello {arena.arenaName}
            
          </div>;
        })}
      </div>
    </div>
  );
};

export default Subject;
