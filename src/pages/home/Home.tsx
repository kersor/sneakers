import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='max-w-[1330px] mx-auto px-[15px]'>
        <div className='mt-[100px] relative p-[10px]'>
            <h2 className='max-w-[650px] text-center mx-auto text-[30px] font-bold'>Discover your style with our diverse <span className="uppercase text-[#9bbdcd] font-black">sneaker</span> collection</h2>
            <div className='bg-white flex max-w-[800px] border border-[#3939393] p-[10px] mx-auto mt-[10px]'>
                <img className='max-w-[20px] mr-[20px]' src="/image/search.svg" alt="" />
                <input className="outline-0 w-full" type="text" placeholder='Search...' />
            </div>
            <img className="absolute top-0 left-[50%] -translate-x-[50%] -z-[1]" src="/image/bg.jpg" alt="" />
        </div>
        <div className='mt-[250px]'>
            <div className='flex justify-between items-center'>
                <h2 className="uppercase text-[20px] font-black">best saller</h2>
                <Link className="uppercase text-[14px]" to='/shop'>see all</Link>
            </div>
            <div className="grid grid-cols-5 grid-flow-row gap-[12.5px]">
                <div className='max-w-[250px] text-center'>
                    <img className='max-w-[250px]' src="/image/1.png" alt="" />
                    <div className='text-[#666] mt-[15px]'>Yeezy Slide 'Onyx'</div>
                    <div className='flex justify-center text-[15px] font-bold mt-[5px]'>
                        $ 232432
                    </div>
                </div>
                <div className='max-w-[250px] text-center'>
                    <img className='max-w-[250px]' src="/image/1.png" alt="" />
                    <div className='text-[#666] mt-[15px]'>Yeezy Slide 'Onyx'</div>
                    <div className='flex justify-center text-[15px] font-bold mt-[5px]'>
                        $ 232432
                    </div>
                </div>
                <div className='max-w-[250px] text-center'>
                    <img className='max-w-[250px]' src="/image/1.png" alt="" />
                    <div className='text-[#666] mt-[15px]'>Yeezy Slide 'Onyx'</div>
                    <div className='flex justify-center text-[15px] font-bold mt-[5px]'>
                        $ 232432
                    </div>
                </div>
                <div className='max-w-[250px] text-center'>
                    <img className='max-w-[250px]' src="/image/1.png" alt="" />
                    <div className='text-[#666] mt-[15px]'>Yeezy Slide 'Onyx'</div>
                    <div className='flex justify-center text-[15px] font-bold mt-[5px]'>
                        $ 232432
                    </div>
                </div>
                <div className='max-w-[250px] text-center'>
                    <img className='max-w-[250px]' src="/image/1.png" alt="" />
                    <div className='text-[#666] mt-[15px]'>Yeezy Slide 'Onyx'</div>
                    <div className='flex justify-center text-[15px] font-bold mt-[5px]'>
                        $ 232432
                    </div>
                </div>
                <div className='max-w-[250px] text-center'>
                    <img className='max-w-[250px]' src="/image/1.png" alt="" />
                    <div className='text-[#666] mt-[15px]'>Yeezy Slide 'Onyx'</div>
                    <div className='flex justify-center text-[15px] font-bold mt-[5px]'>
                        $ 232432
                    </div>
                </div>
                <div className='max-w-[250px] text-center'>
                    <img className='max-w-[250px]' src="/image/1.png" alt="" />
                    <div className='text-[#666] mt-[15px]'>Yeezy Slide 'Onyx'</div>
                    <div className='flex justify-center text-[15px] font-bold mt-[5px]'>
                        $ 232432
                    </div>
                </div>
                <div className='max-w-[250px] text-center'>
                    <img className='max-w-[250px]' src="/image/1.png" alt="" />
                    <div className='text-[#666] mt-[15px]'>Yeezy Slide 'Onyx'</div>
                    <div className='flex justify-center text-[15px] font-bold mt-[5px]'>
                        $ 232432
                    </div>
                </div>
                <div className='max-w-[250px] text-center'>
                    <img className='max-w-[250px]' src="/image/1.png" alt="" />
                    <div className='text-[#666] mt-[15px]'>Yeezy Slide 'Onyx'</div>
                    <div className='flex justify-center text-[15px] font-bold mt-[5px]'>
                        $ 232432
                    </div>
                </div>
                <div className='max-w-[250px] text-center'>
                    <img className='max-w-[250px]' src="/image/1.png" alt="" />
                    <div className='text-[#666] mt-[15px]'>Yeezy Slide 'Onyx'</div>
                    <div className='flex justify-center text-[15px] font-bold mt-[5px]'>
                        $ 232432
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home