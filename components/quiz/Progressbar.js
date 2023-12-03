import React, { useEffect, useState } from 'react';
import CupAnimation from '../animation/CupAnimation';

const Progressbar = ({ questionAttempted }) => {
  return (
    <>
      <div className='w-[100%] flex justify-center items-center mt-[1rem]  '>
        <div className='w-[60%] flex justify-start items-center rounded-full h-[1rem] bg-primary bg-opacity-25'>
          <div style={{
            width: `${questionAttempted * 10}%`
          }} key={questionAttempted} className={`  transition-[width] duration-[1s] flex justify-center items-center h-[100%] bg-primary rounded-full z-[1] `}>
            <div className={`w-[96%] flex justify-start items-center h-[50%] bg-white z-[10] bg-opacity-[.08] rounded-full`} />
          </div>
        </div>
        <CupAnimation />
      </div>
    </>
  );
};

export default Progressbar;
