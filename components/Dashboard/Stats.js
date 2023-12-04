import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Mysubjects from "./Mysubjects";
import RightBar from "./RightBar";

const Stats = () => {
  return (
    <div className=" flex flex-row flex-grow px-6">

      <div className="flex flex-col">

        {/* Search Bar */}
        <div className=" flex flex-row">
          <div className="flex flex-row items-center rounded-lg h-12 bg-slate-100">
            <FaSearch className="mx-2 text-slate-300" size={20} />
            <input
              className=" bg-transparent"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>


        <div className="flex">
          <div className=" pt-2 grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-4">
            <div className=" h-[42vh] w-[40vh] col-start-1 text-white row-start-1 row-span-2 bg-[#581fe6] rounded-xl">
              Penta gram statistics
            </div>
            <div className=" h-[20vh] w-[40vh] text-white col-start-2 row-start-1 bg-[#fd8549] rounded-xl">
              Overall Level
            </div>
            <div className=" h-[20vh] w-[40vh] text-white col-start-2 row-start-2 bg-[#f5db28] rounded-xl">
              Last Performance
            </div>
          </div>
          <div className=" flex flex-col ml-6">
            <div className=" h-[28vh] w-[44vh] my-2 bg-[#cfe4ff] rounded-xl">
              statistics
            </div>
            <div className=" flex h-[12vh] w-[44vh]  mt-2 bg-white border-black border-2 rounded-xl justify-center items-center">
              <FaPlus size={45} />
            </div>
          </div>
        </div>

        <Mysubjects />
      </div>
      <RightBar />
    </div>
  );
};

export default Stats;
