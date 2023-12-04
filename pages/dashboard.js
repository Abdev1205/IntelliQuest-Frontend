import React from 'react'
import Sidebar from '@/components/Dashboard/Sidebar'
import Stats from '@/components/Dashboard/Stats'

const Dashboard = () => {
  return (
    <div className="bg-prim h-screen w-screen flex flex-row p-4">
      <Sidebar />
      <Stats />
    </div>
  )
}

export default Dashboard