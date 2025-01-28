import GetUserSession from '@/lib/GetUserSession'
import Image from 'next/image'
const Uers = async () => {
  const session = await GetUserSession()
  const userImage = session ? session && session?.user?.image as string :''
  return (
    <div className='flex justify-start items-center w-full h-full gap-3'>
      <Image width={44} height={44} alt='user image' src={userImage} className="h-11 w-11 bg-blue-100 rounded-full"/>
      <h3 className='hidden sm:block'>{session && session?.user?.name} </h3>
    </div>
  )
}

export default Uers
