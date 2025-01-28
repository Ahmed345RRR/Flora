"use cleint"
import React, { useRef, useState } from 'react'

const Calc = () => {
   const [Value , setValue] = useState<string>('');
   const setvaluenumber = (number:{number:string | number})=>{
         setValue(e=> `${e}${number}`)
   }

  return (
    <div> 
      <input value={00} readOnly />

    </div>
  )
}

export default Calc
