import React from 'react'

function Modal() {
  return (
    <div className='min-h-screen absolute inset-0 bg-black/50 h-full w-full flex justify-center items-center font-serif-display'>
      <div className='bg-[#f0e5de] max-w-sm w-full h-40 rounded-xl flex flex-col justify-between items-start p-8'>
        <h1 className='text-start text-lg'>Are you sure you want to remove this item?</h1>
        <div className='space-x-3 w-full flex justify-end'>
          <button className='px-5 py-2 bg-stone-300 rounded-xl'>Cancel</button>
        <button className='px-5 py-2 bg-[#dc2626ec] rounded-xl text-white'>Yes</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
