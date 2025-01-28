import React from 'react'
import Effect from '../ui/Effect'
import Button from '../ui/Button'

const Header = () => {
  return (
<header className='flex h-[500px] p-1 justify-center items-center w-full '>
    <div className="h-14 p-2  rounded-full w-[70%] flex justify-center   items-center">
      <div className="text-center space-y-2">
      <small className='text-transparent bg-clip-text bg-gradient-to-tr from-red-500 to-blue-600'>Recorde like a pro</small >
      <div className="">
      <h1 className='text-4xl font-bold'>Flora & shear & Screen recorder</h1>
      <p className='opacity-90 font-medium'>Effortless screen recording for sharing and productivity.</p>
      </div>
      <Effect hight={11} center >
         <button className='w-[300px] h-11 '>Get started </button>
      </Effect >

      </div>
    </div>
 </header>
  )
}

export default Header
