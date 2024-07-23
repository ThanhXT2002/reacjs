import React from 'react'

const Banner = () => {
  return (
    <div className='w-full h-[800px] bg-banner bg-center bg-no-repeat bg-cover relative'>
      <div className='w-full h-full absolute top-0 left-0 bg-black opacity-40' />
      <div className='w-full h-full flex items-center'>
            <div>Content</div>
            <div>Image</div>
      </div>
    </div>
  )
}

export default Banner