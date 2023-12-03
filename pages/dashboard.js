import React from 'react'
import Sidebar from '@/components/Sidebar'
import Stats from '@/components/Stats'
import Subjects from "@/components/Subjects";

const Dashboard = () => {
  return (
    <div className=" bg-prim w-full flex flex-row p-4">
      <Sidebar />
      <Stats />
      <Subjects />
    </div>
  )
}

export default Dashboard