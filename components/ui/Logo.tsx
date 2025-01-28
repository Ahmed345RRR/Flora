import Image from 'next/image'
import React from 'react'
import Effect from './Effect'

const Logo = () => {
  return (
    <div className='flex justify-start items-center gap-2'>
      <div className="h-11 border-blue-600 rounded-full w-11 border-[6px] "/>
       <h2 className='text-2xl font-Flora hidden sm:block font-bold '>Flora</h2>
    </div>
  )
}

export default Logo
