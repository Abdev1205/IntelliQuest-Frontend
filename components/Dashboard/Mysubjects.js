import React, { useEffect, useState } from "react";

const Mysubjects = () => {
  const exampleCourse = {
    name: "Biology Class 9th",
    date: Date.now(),
    score: 64,
  };

  const [courses, setCourses] = useState([{}]);

  useEffect(() => {
    setCourses((prevCourses) => [...prevCourses, exampleCourse]);
  }, []);

  return (
    <div className="mt-1">
      <div className="text-2xl px-4 flex items-center h-12">Your Courses</div>
      <div className=" h-[38.5vh] overflow-auto overflow-x-hidden overflow-y-auto">
        {courses.map((course, courseVal) => (
          <div
            key={courseVal}
            className=" text-2xl flex flex-row items-center px-8 h-16 my-4 bg-slate-100 rounded-xl"
          >
            <div className="font-bold">{course.name}</div>
            <div className=" text-slate-400 flex flex-row justify-center flex-grow">
              {course.date}
            </div>
            <div className="">{course.score}/100</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mysubjects;
