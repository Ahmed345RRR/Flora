import React from 'react'
interface ButtonTYpe {
    children:React.ReactNode ,
    itActive:Boolean ,
    onSomething?:()=> void
}
const Button = ({children ,itActive ,onSomething}:ButtonTYpe) => {
   switch(itActive){
      case false :
        return (
            <button className='w-full borderr h-11 rounded-full bg-blue-200  text-blue-700 '  onClick={onSomething} >{children} </button>
        )
      break 
      default :
        return (
            <button className='w-full border rounded-lg bg-[#fafafa] h-11  opacity-80 text-opacity-50'  onClick={ onSomething} >{children} </button>
        )
      break  
   }
}

export default Button
