/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Footers from './Footers'
import Social from './Social'

const Socials = () => {
  return (
    <>
    <div className='w-full bg-[#F5F8FF]'>
      <div className='flex justify-center'>
      <h1 className='text-[40px] mb-[23px] mt-10'>Social Posts</h1>
      </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center'>
      <Social images={'/assests/img1.png'} texts={'How to rock the lip look that turns heads'} />
      <Social images={'/assests/img2.png'} texts={'Find the perfect shade for the season'} />
      <Social images={'/assests/img3.png'} texts={'The 5 eye shadow secrets you never knew'} />
      <Social images={'/assests/img4.png'} texts={'The pro-tips for at home hair dying'} />
    </div>
    <div className=' w-full flex justify-center mt-16 '>
      <h1 className='w-[250px] h-[50px] flex bg-[#EF8094] rounded-[300px] font-semibold items-center justify-center uppercase text-[14px] text-white cursor-pointer mb-[194px]'>Follow us on Instagram</h1>
    </div>
    </div>
    <div className='m-5'>
    <Footers/>
    </div>
    </>
  )
}

export default Socials