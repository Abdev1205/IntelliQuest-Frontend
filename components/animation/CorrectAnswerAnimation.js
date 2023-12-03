import React from 'react'
import Lottie from 'lottie-react';
import { CorrectAnimationAssets } from '@/public/assetsManager';

const CorrectAnswerAnimation = () => {
  return (
    <div className='w-[5rem] ' >
      <Lottie
        animationData={CorrectAnimationAssets}
        autoplay={true}
        loop={false}
      />

    </div>
  )
}

export default CorrectAnswerAnimation
