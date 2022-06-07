/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

const Main = () => {
  return (
      <>
 <div className='w-full md:h-[58.5vh] lg:h-[73vh] relative bg-[#F5F8FF]'>
    <div className='h-full'>
        <div className='p-[43px]'>
        <div className='text-[48px] leading-[56px] md:text-[42px] md:leading-[48px] lg:text-[48px] lg:leading-[56px] md:w-[500px] lg:pl-[50px]'>
        Look good without leaving your house.
        </div>
        <div className='pt-[28px] text-[14px] md:w-[362px] lg:w-[474px] leading-[23px] tracking-tight font-[400px] lg:pl-[50px]'>
        Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.
        </div>
        <div className='mt-6 lg:pl-[50px]'>
        <li className='border-[3px] w-[183px] h-[61px] flex border-[#EF8094] rounded-[300px] font-semibold list-none items-center justify-center uppercase text-[14px] cursor-pointer flex-1 '>Log In &#65310;</li>
        </div>
        </div>
    </div>
        <div className='bg-[#F5F8FF]'>
        <img className='w-full md:absolute right-0 top-6 md:w-[380px] md:top-26 lg:w-[479px] md:top-5' src="/assests/BOX.png" alt="box" />
         {/* eslint-disable-next-line @next/next/no-img-element */}
        </div>
  </div>
      </>
  )
}

export default Main