"use client"
import Recorder from '@/components/Recorder'
import AuthComponent from '@/components/ui/AuthComponent'
import Logo from '@/components/ui/Logo'
import { signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

const Home = () => {
  return (
  
   <>
    <AuthComponent/>
   </>
  )
}

export default Home
