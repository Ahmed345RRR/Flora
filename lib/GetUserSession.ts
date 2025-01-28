import { getServerSession } from 'next-auth'
import { authOptions } from './NextAuth'

const GetUserSession = async () => {
    const session = await getServerSession(authOptions)
    return session
}

export default GetUserSession
