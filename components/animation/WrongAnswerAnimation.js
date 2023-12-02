import React from 'react'
import Lottie from 'lottie-react';
import { WrongAnimationAssets } from '@/public/assetsManager';

const WrongAnswerAnimation = () => {
  return (
    <div className='w-[5rem] ' >
      <Lottie
        animationData={WrongAnimationAssets}
        autoplay={true}
        loop={false}
      />

    </div>
  )
}

export default WrongAnswerAnimation
