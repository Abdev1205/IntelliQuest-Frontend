import React, {useContext} from 'react'
import {RiLogoutCircleRLine, RiNotification2Line} from 'react-icons/ri'
import { Message_Data } from '@/context/Context.js';

const RightBar = () => {
  const {isAuthenticated, setIsAuthenticated, loading, setLoading} = useContext(Message_Data);
  const logoutHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      })
      toast.success("Logged Out");
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  }

  return (
    <div className=" w-[50vh] ">
      <div className=" h-12 gap-4 flex flex-row-reverse ">
        <button className=" bg-slate-100 text-slate-400 w-12 flex items-center justify-center rounded-xl">
          <RiLogoutCircleRLine size={27} />
        </button>
        <button onClick={logoutHandler} className=" bg-slate-100 text-slate-400 w-12 flex items-center justify-center rounded-xl">
          <RiNotification2Line size={27} />
        </button>
      </div>

      <div className=" mt-2 h-[92%] pl-4">
        <div className="bg-[#1b1d21] p-4 text-white h-full rounded-xl">
          <div className=" text-2xl">Teacher's report</div>
          <div className=" text-slate-100 pt-4"> Lorem gypsum gypsum ipsum</div>
        </div>
      </div>
    </div>
  )
}

export default RightBar