import React from 'react'

const Loader = () => {
  return (
    <div className='bg-black fixed w-screen h-screen flex flex-col justify-center items-center'>
        <h1 className='text-2xl'>Loading Planets and Stars...</h1>
        <p className="text-gray-400">Loading Time May Vary Depending on Your Device's Performance.</p>
    </div>
  )
}

export default Loader