import React, { useEffect, useContext } from 'react';
import Sidebar from '@/components/Dashboard/Sidebar';
import Stats from '@/components/Dashboard/Stats';
import toast from 'react-hot-toast';
import { Message_Data } from '../context/Context.js';
import { useRouter } from 'next/router.js';

const Dashboard = () => {
  const router = useRouter();
  const { isAuthenticated } = useContext(Message_Data);
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.push('/login');
  //   }
  // }, [isAuthenticated, router]);

  return (
    <div className="bg-prim h-screen w-screen flex flex-row p-4">
      <Sidebar />
      <Stats />
    </div>
  );
};

export default Dashboard;
