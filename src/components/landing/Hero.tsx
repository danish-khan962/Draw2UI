'use client'

import MaxWidthContainer from '@/style/MaxWidthContainer'
import React from 'react'
import dynamic from 'next/dynamic'
import CustomButton from '../common/CustomButton'

// Dynamically import ReactPlayer to prevent Next.js SSR hydration errors
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const Hero = () => {

  const playerConfig = {
    youtube: {
      controls: 0,
      modestbranding: 1,
      rel: 0,
      iv_load_policy: 3
    }
  }

  return (
    <div className="w-full relative">
      <MaxWidthContainer className='flex flex-col justify-center items-center text-center gap-y-10'>
        <div className='bg-white py-2 px-5 md:px-6 lg:px-8 rounded-full font-medium tracking-tight text-sm md:text-base lg:text-lg flex flex-row justify-center items-center gap-2'>
          <span className='h-1.5 w-1.5 md:h-2 md:w-2 lg:w-2.5 lg:h-2.5 bg-green-500 rounded-full'></span> <span>Build Now - Hurry Mate</span>
        </div>

        <div className='text-[34.5px] max-w-4xl w-full sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-tight flex flex-col flex-wrap justify-center items-center gap-y-2 z-10'>
          <div className='flex flex-row justify-center items-center gap-x-2 md:gap-x-5 lg:gap-x-8'>
            <span>Unlimited</span>

            {/* First Video Player */}
            <span className="inline-block align-start overflow-hidden rounded-2xl md:rounded-3xl lg:rounded-4xl w-20 h-14 sm:w-24 sm:h-20 md:w-30 md:h-24 lg:w-38 lg:h-30  bg-neutral-200 border-3 shadow-lg shadow-neutral-900 border-black -rotate-6 pointer-events-none select-none">
              <ReactPlayer
                src="/videos/sample_video1.webm"
                width="100%"
                height="100%"
                playing
                muted
                loop
                autoPlay
                className='object-cover'
              />
            </span>

            <span className='text-neutral-500'>Design </span>

          </div>
          <div className='flex flex-row justify-center items-center gap-x-2 md:gap-x-5 lg:gap-x-8'>
            <span className='text-neutral-500'>for</span>

            {/* Second Video Player */}
            <span className="inline-block align-middle mx-2 overflow-hidden rounded-2xl md:rounded-3xl lg:rounded-4xl w-20 h-14 sm:w-24 sm:h-20 md:w-30 md:h-24 lg:w-38 lg:h-30 bg-neutral-200 border-3 shadow-lg shadow-neutral-900 border-black rotate-3 pointer-events-none select-none">
              <ReactPlayer
                src="/videos/sample_video1.webm"
                width="100%"
                height="100%"
                playing
                muted
                loop
                autoPlay
                className='object-cover'
              />
            </span>

            <span>Solid</span> <span>Crafting</span>
          </div>
        </div>


        <p className='mt-2 md:mt-3 lg:mt-5 text-base md:text-lg lg:text-xl tracking-tight font-medium text-neutral-500 max-w-sm w-full text-center leading-snug'>
          We help startups and brands create beautiful, functional products — fast and hassle-free.
        </p>

        <div className='flex flex-col sm:flex-row gap-x-4 justify-center items-center'>
          <CustomButton>
            Start Crafting Now
          </CustomButton>
        </div>
      </MaxWidthContainer>
    </div>
  )
}

export default Hero