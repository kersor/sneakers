import React from 'react'

const BodyAdminPagesUsersRoles = () => {
  return (
    <div className='flex'>
        <div className='flex flex-col gap-[10px] min-w-[50%] h-[920px] overflow-auto p-[10px]'>
          <div className='p-[10px] bg-white rounded-[10px] flex items-center gap-[10px] justify-between'>
            <div className='flex items-center gap-[5px]'>
              <div className='bg-[#9bbdcd] rounded-full w-[35px] h-[35px] flex justify-center items-center text-white uppercase'>A</div>
              <div className='flex flex-col text-[14px] leading-[20px]'>
                  <span className="font-semibold">Value: <span  className='font-bold uppercase'>admin</span></span>
                  <span className='text-[#b1b9c4]'>Description: Administrator</span>
              </div>
            </div>
            <button><img src="/image/remove-product-admin.svg" alt="" /></button>
          </div>
          <div className='p-[10px] bg-white rounded-[10px] flex items-center gap-[10px] justify-between'>
            <div className='flex items-center gap-[5px]'>
              <div className='bg-[#9bbdcd] rounded-full w-[35px] h-[35px] flex justify-center items-center text-white uppercase'>U</div>
              <div className='flex flex-col text-[14px] leading-[20px]'>
                  <span className="font-semibold">Value: <span  className='font-bold uppercase'>user</span></span>
                  <span className='text-[#b1b9c4]'>Description: User</span>
              </div>
            </div>
            <button><img src="/image/remove-product-admin.svg" alt="" /></button>
          </div>
        </div>
        <div className='max-w-[400px] mx-auto w-full p-[10px]'>
          <form action="" className='flex flex-col gap-[10px]'>
            <input className='bg-[#d9dde2] outline-none border border-[#b1b9c4] px-[10px] py-[5px] rounded-[5px] text-[#8995a6] w-full' type="text" placeholder='Value...' />
            <input className='bg-[#d9dde2] outline-none border border-[#b1b9c4] px-[10px] py-[5px] rounded-[5px] text-[#8995a6] w-full' type="text" placeholder='Description...' />
            <button className='text-[14px] bg-white text-[#393939] font-bold py-[5px] rounded-[5px]' type='submit'>Create</button>
          </form>
        </div>
    </div>
  )
}

export default BodyAdminPagesUsersRoles