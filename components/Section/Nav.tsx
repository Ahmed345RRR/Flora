import React from 'react'
import Logo from '../ui/Logo'
import Uers from '../ui/Uers'
import { button } from '../Ui-helper'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { root } from 'postcss'
import { cn } from '@/lib/utils'
import GetPlus from '../ui/GetPlus'
import SearchButton from '../ui/SearchButton'
import ButtonNavigate from '../rooute/buttons'

const Nav = () => {
  
  
  return (
    <nav className="w-full bg-white p-1 space-y-3 flex flex-col justify-between items-center   h-full">
     <div className="h-[23%]  border-b  w-full p-1 ">
     <Logo/>
     </div>

     <div className="h-full  flex flex-col justify-start  gap-2   w-full p-1 ">
     <ButtonNavigate/>
     </div>
      <GetPlus/>
     <div className="h-[10%] border-b  w-full p-1 ">
     <Uers/>
     </div>
    </nav>
  )
}

export default Nav
