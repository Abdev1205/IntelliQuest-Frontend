import React from 'react'
import {RiLogoutCircleRLine, RiNotification2Line} from 'react-icons/ri'
const RightBar = () => {
  return (
    <div className=" w-[50vh] ">
      <div className=" h-12 gap-4 flex flex-row-reverse ">
        <button className=" bg-slate-100 text-slate-400 w-12 flex items-center justify-center rounded-xl">
          <RiLogoutCircleRLine size={27} />
        </button>
        <button className=" bg-slate-100 text-slate-400 w-12 flex items-center justify-center rounded-xl">
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