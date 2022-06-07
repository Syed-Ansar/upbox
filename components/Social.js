/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Social = ({texts,images}) => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
    <div className='w-[313px] rounded-sm '>
      <img src={images} className=' h-full mb-[32px]' alt="vector" />
      <p className='text-[22px] leading-[28px] mb-[21px]'>{texts}</p>
  </div>
</div>
</div>
  )
}

export default Social