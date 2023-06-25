import React from 'react'

const BodyAdminPagesProductGender = () => {
  return (
    <div className='flex'>
        <div className='flex flex-col gap-[10px] min-w-[50%] h-[920px] overflow-auto p-[10px]'>
          <div className='p-[10px] bg-white rounded-[10px] flex items-center gap-[10px] justify-between'>
            <div className='flex items-center gap-[5px]'>
              <div className='bg-[#acb4bf] rounded-full w-[35px] h-[35px] text-[14px] text-white font-bold flex justify-center items-center uppercase'>M</div>
              <div className="font-semibold text-[14px]">Gender: <span  className='font-bold'>man</span></div>
            </div>
            <button><img src="/image/remove-product-admin.svg" alt="" /></button>
          </div>
          <div className='p-[10px] bg-white rounded-[10px] flex items-center gap-[10px] justify-between'>
            <div className='flex items-center gap-[5px]'>
              <div className='bg-[#acb4bf] rounded-full w-[35px] h-[35px] text-[14px] text-white font-bold flex justify-center items-center uppercase'>M</div>
              <div className="font-semibold text-[14px]">Gender: <span  className='font-bold'>man</span></div>
            </div>
            <button><img src="/image/remove-product-admin.svg" alt="" /></button>
          </div>
          <div className='p-[10px] bg-white rounded-[10px] flex items-center gap-[10px] justify-between'>
            <div className='flex items-center gap-[5px]'>
              <div className='bg-[#acb4bf] rounded-full w-[35px] h-[35px] text-[14px] text-white font-bold flex justify-center items-center uppercase'>M</div>
              <div className="font-semibold text-[14px]">Gender: <span  className='font-bold'>man</span></div>
            </div>
            <button><img src="/image/remove-product-admin.svg" alt="" /></button>
          </div>
        </div>
        <div className='max-w-[400px] mx-auto w-full p-[10px]'>
          <form action="" className='flex flex-col gap-[10px]'>
            <input className='bg-[#d9dde2] outline-none border border-[#b1b9c4] px-[10px] py-[5px] rounded-[5px] text-[#8995a6] w-full' type="text" placeholder='Name...' />
            <button className='text-[14px] bg-white text-[#393939] font-bold py-[5px] rounded-[5px]' type='submit'>Create</button>
          </form>
        </div>
    </div>
  )
}

export default BodyAdminPagesProductGender