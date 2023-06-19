import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#f9f9fa] mt-[100px] p-[50px]'>
        <div className='flex justify-center flex-col text-center items-center'>
            <Link className='block' to='/'><img src="/image/logo-footer.svg" alt="" /></Link>
            <div className='flex gap-[10px]'>
                <Link className='bg-white rounded-full p-[10px] border border-[#9bbdcd]' to='/'><img src="/image/social/facebook.svg" alt="" /></Link>
                <Link className='bg-white rounded-full p-[10px] border border-[#9bbdcd]' to='/'><img src="/image/social/instagram.svg" alt="" /></Link>
                <Link className='bg-white rounded-full p-[10px] border border-[#9bbdcd]' to='/'><img src="/image/social/twitter.svg" alt="" /></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer