import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='max-w-[1330px] mx-auto px-[15px]'>
        <div className='h-[100px] flex items-center justify-between'>
            <Link to='/'><img src="/image/logo.svg" alt="" /></Link>
            <div className='flex items-center gap-[30px]'>
                <div className='flex gap-[20px]'>
                    <Link className="uppercase text-[12px] font-extrabold" to='/'>home</Link>
                    <Link className="uppercase text-[12px] font-extrabold" to='/shop'>shop</Link>
                    <Link className="uppercase text-[12px] font-extrabold" to='/about'>about</Link>
                    <Link className="uppercase text-[12px] font-extrabold" to='/blog'>blog</Link>
                </div>
                <div className='w-[2px] h-[15px] bg-[#393939]'></div>
                <div className='flex items-center gap-[13px]'>
                    <Link to='/favorites'><img src="/image/heart.svg" alt="" /></Link>
                    <Link to='/cart'><img src="/image/shopping-bag.svg" alt="" /></Link>
                    <Link to='/auth'><img src="/image/user.svg" alt="" /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header