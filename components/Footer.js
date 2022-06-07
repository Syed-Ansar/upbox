/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer = ({head,first,second,third,fourth,five,six}) => {
  return (
    <>
        <section className='list-none mb-10 p-5 md:pr-28 space-y-2'>
              <h1 className='uppercase font-semibold'>{head}</h1>
              <li className='cursor-pointer'>{first}</li>
              <li className='cursor-pointer'>{second}</li>
              <li className='cursor-pointer'>{third}</li>
              <li className='cursor-pointer'>{fourth}</li>
              <li className='cursor-pointer'>{five}</li>
              <li className='cursor-pointer'>{six}</li>
        </section>
    </>
  )
}

export default Footer