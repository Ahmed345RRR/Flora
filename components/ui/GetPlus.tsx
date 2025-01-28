import { Gem } from 'lucide-react'
import React from 'react'

const GetPlus = () => {
  return (
    <div className='w-full hidden sm:flex justify-center items-center   text-blue-950 rounded-sm h-full'>
      <div className="w-full bg-white h-full rounded-md p-2">
        <div className="text-center w-full p-2">
        <h1 className='text-2xl'>Get plus</h1>
        <p>Get more  feature</p>
        </div>
        <button className='bg-blue-600 flex justify-center items-center gap-2 w-full h-11 rounded-md text-white'>
            <Gem/>
            <span>Get started</span>
        </button>
      </div>
    </div>
  )
}

export default GetPlus
