import Image from 'next/image'
import React from 'react'
import Logo from './ui/Logo'
import Button from './ui/Button'
import { motion } from 'motion/react'
const Welcome = () => {
  return (
    <div className="w-[400px] flex flex-col justify-between items-center p-5 h-[300PX] rounded-xl bg-white border ">
    <div className="space-y-1">
       <Logo/>
       <p className='opacity-90 font-medium'>Effortless screen recording for sharing and productivity.</p>
    </div> 
    <div className="w-full flex justify-end items-center ">
     <div className="gap-3 flex justify-center items-center">
       <Button itActive >Screen</Button>
       <Button itActive={false} >save as</Button>
     </div>
    </div>
</div>
  )
}

export default Welcome
