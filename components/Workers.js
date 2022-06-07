
import Image from 'next/image'
import React from 'react'

const Workers = ({main,head,number,images,odd}) => {
  return (
    <div className={odd ? 'flex flex-col justify-center p-[28px] relative md:items-end': 'flex md:flex-row md:items-center' + 'flex flex-col items-center justify-center p-[28px] relative'}>
      <div className='md:mr-10'>
          <h1 className='text-[200px] text-[#EF8094] absolute -top-16 z-50 '>{number}</h1>
          <Image src={images} width={500} height={500}  className='rounded-full' alt="profile" />
      </div>
          <div className={!odd ? 'mt-4' : ""}>
          <h1 className='text-[36px] leading-10 w-[306px] mb-4 md:w-[406px]'>{head}</h1>
          <p className='text-[18px] leading-6 tracking-normal md:w-[310px]'>{main}</p>
      </div>
      </div>
  )
}

export default Workers