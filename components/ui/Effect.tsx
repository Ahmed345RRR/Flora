import { cn } from '@/lib/utils'
import React from 'react'
interface EffectType{
    children:React.ReactNode ,
    hight:number ,
    center?:Boolean
}
const Effect = ({children , hight ,center}:EffectType) => {
    return (
        <div className={cn('p-[2px] bg-grident bg-gradient-to-tr from-red-400 via-white to-blue-500 rounded-full border ' , `h-max w-max ` , center && 'mx-auto')}>
            <div className="w-full p-2 flex justify-center items-center h-full rounded-full bg-white">{children} </div>
        </div>
    )
}

export default Effect
