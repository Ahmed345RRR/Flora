"use client"
import React from 'react'
import { button } from '../Ui-helper'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const ButtonNavigate = () => {
    const rout = usePathname();
    return (
        <>
        {
            button.map(({icon , label , src},index)=>(
               <Link key={index} className={cn('w-full  p-1 rounded-md h-11  flex justify-center sm:justify-start duration-200 items-center gap-2', rout==src || rout.endsWith(`/${src}`) ? "bg-blue-100 text-blue-600":'opacity-70')} href={`/${src}`}>{icon} <span className='hidden sm:block'>{label}</span> </Link>
            ))

        }
        </>
    )
      
}

export default ButtonNavigate
