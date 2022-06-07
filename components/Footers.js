/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Footer from './Footer'

const Footers = () => {
  return (
    <>
<div className='bg-[#E5E5E5] border-2 border-gray-500 rounded-lg'>
    <div className='pt-10 pl-6 md:pl-32 lg:pl-44 grid grid-cols-2 '>
        <div>
            <img className='nav-image mb-[60px] ml-150' src={'/assests/Logo.png'} alt="logo"/>
        </div>

        <div className='hidden md:flex w-[26px] h-[26px] space-x-2 cursor-pointer'>
            <img src={'/assests/ig.png'} alt="instagram" />
            <img src={'/assests/fb.png'} alt="facebook" />
            <img src={'/assests/tw.png'} alt="teitter" />
            <img src={'/assests/sc.png'} alt="snapchat" />
        </div>
    </div>
<div>
<div className='flex justify-center'>
<div className='grid justify-center grid-cols-2 lg:grid-cols-4'>
        <Footer head={'UPBOX'} first={'Upbox Bag'} second={'Upbox Box Platinum'} third={'Upbox Box VIP'} fourth={'Deals'} five={'Seasonal Items'} six={'Upbox Promise'} />
        <Footer head={'Product'} first={'Get the App'} second={'Loyalty Program'} third={'Affiliates'} fourth={'Press'} />
        <Footer head={'Find Us On'} first={'Instagram'} second={'Facebook'} third={'TikTok'} fourth={'SnapChat'} five={'Twitter'}/>
        <Footer head={'Help'} first={'Returns'} second={'FAQ'} third={'Contact'} fourth={'Community'} five={'Videos'} />
</div>

</div>
<div className='w-full flex justify-center items-center border-2 border-gray-500 border-t-1 pb-10'>
<div className='flex flex-col md:items-start md:justify-center md:flex-row-reverse justify-center space-y-2 mt-2'>
    <p className='md:ml-5 cursor-pointer'>Terms</p>
    <p className='md:ml-5 cursor-pointer'>Privacy</p>
    <p className='w-[400px] md:w-[100%] cursor-pointer'>
    © 2020 Quest AI. Upbox is a Sample Project and open source design project free for personal and commercial use.
    </p>
</div>
</div>

</div>
</div>
    </>
  )
}

export default Footers