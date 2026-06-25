"use client"

import MaxWidthContainer from '@/style/MaxWidthContainer'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Equal, X } from "lucide-react"
import { BsTwitterX, BsLinkedin, BsInstagram } from "react-icons/bs"
import CustomButton from './CustomButton'
import Image from 'next/image'

// Dropdown navigation links
const DropdownNavigationItems = [
    { name: "Process", hrefURL: "#process" },
    { name: "Work", hrefURL: "#work" },
    { name: "About", hrefURL: "#about" },
    { name: "Pricing", hrefURL: "#pricing" },
    { name: "FAQ", hrefURL: "#faq" },
    { name: "Contact", hrefURL: "#contact" },
]


// social icons
const socialIcons = [
    { name: "X-twitter", icon: <BsTwitterX />, hrefUrl: "/" },
    { name: "LinkedIn", icon: <BsLinkedin />, hrefUrl: "/" },
    { name: "Instagram", icon: <BsInstagram />, hrefUrl: "/" },
]

const Navbar = () => {

    // Dropdown tracking state
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <nav className='w-full py-6'>
            <MaxWidthContainer className='relative flex flex-row justify-between items-center'>
                <Link href={"/"}>
                    <Image
                    src={"/images/draw2ui_icon.png"}
                    alt={'home-icon'}
                    height={1000}
                    width={1000}
                    className='max-w-10 md:max-w-12 w-full h-auto object-contain'
                    />
                </Link>


                {/* Menu and Auth Group */}
                <div className='flex flex-row gap-3 justify-center items-center z-10'>
                    <CustomButton>
                        Login
                    </CustomButton>
                    {isDropdownOpen ? (<div className='bg-white rounded-full p-1 md:p-2 cursor-pointer' onClick={handleDropdownToggle}> <X /> </div>) : (<div className='bg-white rounded-full p-1 md:p-2 cursor-pointer' onClick={handleDropdownToggle}> <Equal /> </div>)}
                </div>

                {/* Dropdown menu */}
                {isDropdownOpen && (
                    <div className="absolute right-0 top-full max-w-full md:max-w-xs w-full mt-3 rounded-tl-4xl rounded-tr-lg rounded-b-4xl bg-white backdrop-blur-lg p-10 py-10 md:py-14 flex flex-col gap-10 z-999">
                        <ul className='flex flex-col justify-start items-start gap-3'>
                            {
                                DropdownNavigationItems.map((linkItem, index) => (
                                    <li key={index} className='text-lg md:text-xl font-semibold  text-black/80 tracking-tight hover:text-neutral-500 transition-all ease-in-out duration-200'>
                                        <Link href={linkItem.hrefURL}>
                                            {linkItem.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                        <p className='text-lg md:text-xl font-semibold uppercase text-orange-600 tracking-tight hover:text-orange-700 transition-all ease-in-out duration-200 cursor-pointer'> Help </p>

                        {/* Socials */}
                        <div className='flex flex-row justify-start items-center gap-6'>
                            {
                                socialIcons.map((icon, index) => (
                                    <div className='p-3.5 rounded-full border border-neutral-500 text-neutral-600 hover:text-black cursor-pointer text-base md:text-lg' key={index}>
                                        {icon.icon}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )}
            </MaxWidthContainer>
        </nav>
    )
}

export default Navbar