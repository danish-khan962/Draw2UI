import MaxWidthContainer from '@/style/MaxWidthContainer'
import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'
import { BsInstagram, BsLinkedin, BsTwitterX, BsGithub } from 'react-icons/bs'

// social icons
const socialIcons = [
  { name: "Github", icon: <BsGithub />, hrefUrl: "/" },
  { name: "X-twitter", icon: <BsTwitterX />, hrefUrl: "/" },
  { name: "LinkedIn", icon: <BsLinkedin />, hrefUrl: "/" },
  { name: "Instagram", icon: <BsInstagram />, hrefUrl: "/" },
]

const Footer = () => {
  return (
    <footer className='w-full relative px-10 sm:px-14 md:px-16 lg:px-20 pt-28 pb-10 sm:pb-14 md:pb-16 lg:pb-20 bg-linear-to-bl from-[#212121] via-[#0A0A0A] to-[#2A2A2A] rounded-2xl flex flex-col gap-28 justify-center items-center text-center'>

      <div className='flex flex-col gap-8 justify-center items-center'>
        <h4 className='font-medium text-lg sm:text-xl md:text-2xl italic font-instrument-serif text-neutral-400'> Register Now </h4>

        <h1 className='mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-medium font-inter tracking-tighter'>
          Let's <span className='text-neutral-400'>Connect</span>
        </h1>
        <p className='font-medium tracking-tight text-white text-base md:text-lg lg:text-xl max-w-full sm:max-w-104 w-full leading-normal'>
          Feel free to contact me if having any questions. I&apos;m available for new projects or just for chatting.
        </p>
        <CustomButton BorderclassName='mt-3 bg-white/10 from-transparent via-transparent to-transparent backdrop-blue-sm'>
          Book a free intro call
        </CustomButton>
      </div>


      <div className='w-full text-neutral-100 flex flex-col justify-center md:flex-row md:justify-between items-center gap-10'>
        <div className='font-medium text-xs md:text-sm lg:text-base border-y border-white/80 py-4'>
          Developed by <Link href={"/"}> <span className='hover:text-white hover:underline transition-all ease-in-out duration-200 font-semibold'>Danish</span> </Link> | &copy; 2026
        </div>

        {/* Socials */}
        <div className='flex flex-row justify-start items-center gap-6'>
          {
            socialIcons.map((icon, index) => (
              <div className='p-3.5 rounded-full border border-neutral-500 text-neutral-500 hover:text-neutral-200 cursor-pointer text-base md:text-lg transition-all duration-200 ease-in-out' key={index}>
                {icon.icon}
              </div>
            ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer