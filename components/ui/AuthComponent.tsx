import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import Logo from './Logo'

const AuthComponent = () => {
  return (
    <div className="w-full h-full bg-white flex justify-center items-center">
    <div className="w-max w-min-[360px] space-y-3 bg-white   p-3 h-[400px] rounded-md ">
      <div className=" space-y-6">
        <Logo/>
        <div className="">
        <h1 className='text-2xl '>Log in to your account</h1>
        <p>Join us , select Method to log in with</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1">
     <button className='w-full flex justify-center items-center gap-1 h-11 rounded-md border ' onClick={()=> signIn('google',{redirect:true , callbackUrl:'/app'})}>
      <Image  src="/google.png" width={25} height={25} alt='logo' />
      <span> Google</span>
     </button>
     <button className='w-full flex justify-center items-center gap-1 h-11 rounded-md border ' onClick={()=> signIn('google',{redirect:true , callbackUrl:'/app'})}>
      <Image  src="/github.png" width={25} height={25} alt='logo' />
      <span>github</span>
     </button>
     
      </div>
    </div>
   </div>
 
  )
}

export default AuthComponent
