import React, { useContext, useState, useEffect } from "react";
import imageIQ from "@/styles/iq.png";
import { useRouter } from 'next/router';
import {toast} from 'react-hot-toast'
import { server } from '@/pages/index.js';
import axios from 'axios';
import { Message_Data } from "../context/Context";
// import ImagePreloader from '@lottie-web/player/js/utils/imagePreloaderWorkerOverride';
const register = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const {isAuthenticated, setIsAuthenticated, loading, setLoading} = useContext(Message_Data);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/api/register`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setIsAuthenticated(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  return (
    <div className="w-full h-screen flex bg-zinc-800">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] rounded-lg bg-neutral-300 shadow-gray-600 sm:max-w-[900px]">
        <div className="w-full h-[550px] hidden md:block">
          <h2>Left hand side</h2>
        </div>
        <div className="p-4 flex flex-col bg-white rounded-lg justify-around m-2">
          <form onSubmit={submitHandler} className="text-center py-30">
            <h2 className="text-4xl font-bold text-center mb-4">Welcome</h2>
            <p className="text-center text-xs  text-gray-500">
              Please Enter your Details
            </p>
            <div className="pt-6">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 mr-2 rounded-t-xl w-346"
                type="text"
                placeholder="username"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 mr-2 w-346"
                type="text"
                placeholder="Email"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 mr-2 rounded-b-xl w-346"
                type="password"
                placeholder="Password"
              />
            </div>
            <button onClick={submitHandler} className="flex-none rounded-full px-20 py-1.5 mt-8 mb-2 text-base text-white bg-zinc-900 hover:bg-neutral-700">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;
