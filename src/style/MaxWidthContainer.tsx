import React from 'react'
import { cn } from '@/lib/utils'

type MaxWidthContainerProps = {
    children? : React.ReactNode;
    className?: string;
}

const MaxWidthContainer = (
    {children, className}: MaxWidthContainerProps
) => {
  return (
    <div
    className={cn(
        'max-w-7xl w-full mx-auto',
        className
    )}
    >
        {children}
    </div>
  )
}

export default MaxWidthContainer