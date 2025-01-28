import React from 'react'

const SearchButton = () => {
  return (
    <div className='w-full h-14 flex justify-start items-center gap-1'>
      <div className="w-11 h-11 bg-neutral-50 rounded-md">
        <span>c/v</span>
      </div>
      <div className="w-full h-11 rounded-md bg-neutral-50 flex justify-center items-center">
        <span className='opacity-70'>search</span>
      </div>
    </div>
  )
}

export default SearchButton
