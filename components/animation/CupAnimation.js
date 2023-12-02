import React from 'react'
import Lottie from 'lottie-react';
import { cupAnimationAssets } from '@/public/assetsManager';

const CupAnimation = () => {
  return (
    <div className='w-[5rem] ' >
      <Lottie
        animationData={cupAnimationAssets}
        autoplay={true}
        loop={true}
      />

    </div>
  )
}

export default CupAnimation