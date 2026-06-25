import React from 'react'
import { cn } from '@/lib/utils'
import { IoIosArrowRoundForward } from "react-icons/io";

type CustomButtonProps = {
  children?: React.ReactNode;
  BorderclassName?: string;
  ButtonclassName?: string;
}

const CustomButton = ({
  children, BorderclassName, ButtonclassName
}: CustomButtonProps) => {
  return (
    <div
      className={cn(
        "inline-block rounded-full p-1.5 md:p-2 bg-linear-to-br from-white via-white-60 to-gray-300 shadow-md md:shadow-lg group", BorderclassName
      )}
    >
      <button className={cn(
        "bg-neutral-950 text-white font-semibold tracking-tight rounded-full py-2 px-4 md:py-3 md:px-6 cursor-pointer text-xs sm:text-base md:text-base flex flex- justify-center items-center gap-2 group-hover:bg-linear-to-b group-hover:from-[#1c1c1c] group-hover:via-[#292727] to-[#424242]",
        ButtonclassName
      )}>
        <p> {children} </p>
        <p className='transition-colors ease-in duration-200 text-neutral-200 text-lg sm:text-xl md:text-2xl'> <IoIosArrowRoundForward /> </p>
      </button>
    </div>
  )
}

export default CustomButton