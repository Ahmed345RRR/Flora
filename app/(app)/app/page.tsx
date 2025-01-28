import Recorder from '@/components/Recorder'
import GetUserSession from '@/lib/GetUserSession'
import React from 'react'

const page = async () => {
  const users = await GetUserSession()
  const firstname =users?.user?.name?.split(' ')[0]
  return (
    <div>
    <div className="">
      <h1 className='text-2xl font-bold'>Hello {firstname} </h1>
      <p>welcome to flora</p>
    </div>
    </div>
  )
}

export default page
