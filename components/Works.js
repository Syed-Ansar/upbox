/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Workers from './workers'

const Works = () => {

 const [odd,setOdd] =  useState(true);

  return (
    <div>
    <div className='px-[12px] flex flex-col items-center mt-16 mb-10'>
      <h1 className='text-[40px]'>How It Works ?</h1>
      <img src="/assests/underline.png" className='w-[200px]' alt="underline" />
      </div>

    
      <Workers head={'Setup your profile & preferences'} main={'Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.'} number={'1'} images={'/assests/profile.png'} />
      <Workers head={'Review your custom box'} main={'Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.'} number={'2'} images={'/assests/box4.png'} odd={odd} />
      <Workers head={'Try it on at home'} main={'Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with.'} number={'3'} images={'/assests/box3.png'}/>


    <div className=' w-full flex justify-center mt-16 '>
      <h1 className='border-[3px] w-[250px] h-[50px] flex border-[#EF8094] rounded-[300px] font-semibold items-center justify-center uppercase text-[14px] cursor-pointer mb-[194px]'>Try it yourself &#65310;</h1>
    </div>

    </div>
  )
}

export default Works