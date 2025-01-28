"use client"
import Recorder from '@/components/Recorder'
import Logo from '@/components/ui/Logo'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'

const Home = () => {
  const {data} = useSession()
  return (
  
   <>
   <div className="w-full h-full flex justify-center items-center">
    <div className="w-[400px] border p-3 space-y-2 h-max rounded-md ">
      <div className="text-clip space-y-1">
        <Logo/>
        <p>Join us  with your Google account</p>
      </div>
     <button className='w-[300px] flex justify-center items-center gap-1 h-11 rounded-md border ' onClick={()=> signIn('google')}>
      <Image  src="/google.png" width={30} height={30} alt='logo' />
      <span>Join us</span>
     </button>

    </div>
   </div>
   {data && <p>{data.user?.email} </p>}
   </>
  )
}

export default Home
