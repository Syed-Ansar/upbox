/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Plan = () => {
  return (
    <div className='w-full'>
      <div className='px-[12px] flex flex-col items-center mb-10'>
      <h1 className='text-[40px]'>Pick Your Line</h1>
      <img src="/assests/underline.png" className='w-[200px]' alt="underline" />
      </div>

      <div className='flex flex-col items-center md:flex-row md:items-center md:justify-center'>
        
      <div className='mb-10 md:mb-0 w-[313px] h-[188px] border-2 border-[#C4C4C4] rounded-sm relative md:mr-[64px]'>
          <img src="/assests/Vectorb.png" className=' h-full' alt="vector" />
          <h1 className='absolute top-8 left-28 text-3xl tracking-normal'>Montly</h1>
          <h1 className='absolute top-16 left-28 text-2xl mt-1'>$18/mo</h1>
          <h1 className='absolute top-24 left-[86px] text-[12px] mt-2 bg-[#EF8094] px-6 py-2 rounded-3xl text-white uppercase'>Find The Box</h1>
      </div>

      <div className='w-[313px] h-[188px] border-2 border-[#C4C4C4] rounded-sm relative'>
          <img src="/assests/Vector.png" className=' h-full' alt="vector" />
          <h1 className='absolute top-8 left-28 text-3xl tracking-normal'>Yearly</h1>
          <h1 className='absolute top-16 left-28 text-2xl mt-1'>$15/mo</h1>
          <h1 className='absolute top-24 left-[86px] text-[12px] mt-2 bg-[#EF8094] px-6 py-2 rounded-3xl text-white uppercase'>Find The Box</h1>
      </div>
      </div>
      <h1 className='text-[14px] px-[30px] flex justify-center mt-4'>Your plan auto-renews at the end of 30 days from the 1st day you signed-up.</h1>
    </div>
  )
}

export default Plan