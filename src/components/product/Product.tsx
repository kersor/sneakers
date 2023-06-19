import React, { FC } from 'react'

interface IProduct{
    image: string,
    title: string,
    price: number,
}

interface IProductProps {
    item: IProduct
}

const Product: FC<IProductProps> = ({item}) => {
  return (
    <div className='max-w-[310px] text-center'>
        <img className='max-w-[310px]' src={`/image/${item.image}`} alt="" />
        <div className='text-[#666] mt-[15px]'>Yeezy Slide 'Onyx'</div>
        <div className='flex justify-center text-[15px] font-bold mt-[5px]'>
            $ 232432
        </div>
    </div>
  )
}

export default Product