import React from "react";
import Sidebar from "@/components/Dashboard/Sidebar";
import MainSubjectScreen from "@/components/Subject/MainSubjectScreen";
import SubjectStats from "@/components/Subject/SubjectStats";
const subject = () => {
  return (
    <div className="bg-prim h-screen w-screen flex flex-row p-4">
      <Sidebar />
      <MainSubjectScreen />
      <SubjectStats />
    </div>
  );
};

export default subject;
