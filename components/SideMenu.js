import React from 'react'

const SideMenu = () => {
  return (
    <div className='hidden md:inline'>
        <nav className='sidebar flex list-none items-center uppercase text-[14px] md:text-[12px] cursor-pointer'>
           <li className='lg:m-5 md:m-4'>This Month</li>
           <li className='lg:m-5 md:m-4'>Skin</li>
           <li className='lg:m-5 md:m-4'>Hair</li>
           <li className='lg:m-5 md:m-4'>Bath</li>
           <li className='lg:m-5 md:m-4'>Sale</li>
           <li className='lg:m-5 md:m-4 border-[3px] border-black px-10 py-2 rounded-3xl'>Log In &#65310;</li>
        </nav>
    </div>
  )
}

export default SideMenu