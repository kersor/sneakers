import React from 'react'
import SidebarFilterShop from '../../components/sidebar/sidebarFilterShop/SidebarFilterShop'
import Product from '../../components/product/Product'
import { Pagination, Stack } from '@mui/material'

interface IProduct{
    image: string,
    title: string,
    price: number,
}

const products: IProduct[] = [
    {
        image: '1.png',
        title: "Yeezy Slide 'Onyx'",
        price: 232432
    },
    {
        image: '1.png',
        title: "Yeezy Slide 'Onyx'",
        price: 232432
    },
    {
        image: '1.png',
        title: "Yeezy Slide 'Onyx'",
        price: 232432
    },
    {
        image: '1.png',
        title: "Yeezy Slide 'Onyx'",
        price: 232432
    },
    {
        image: '1.png',
        title: "Yeezy Slide 'Onyx'",
        price: 232432
    },
    {
        image: '1.png',
        title: "Yeezy Slide 'Onyx'",
        price: 232432
    },
    {
        image: '1.png',
        title: "Yeezy Slide 'Onyx'",
        price: 232432
    },
    {
        image: '1.png',
        title: "Yeezy Slide 'Onyx'",
        price: 232432
    },
    {
        image: '1.png',
        title: "Yeezy Slide 'Onyx'",
        price: 232432
    },
    {
        image: '1.png',
        title: "Yeezy Slide 'Onyx'",
        price: 232432
    },
    {
        image: '1.png',
        title: "Yeezy Slide 'Onyx'",
        price: 232432
    },
    {
        image: '1.png',
        title: "Yeezy Slide 'Onyx'",
        price: 232432
    }
]

const Shop = () => {

  return (
    <div className='max-w-[1330px] px-[15px] mx-auto mt-[100px] flex items-start gap-[50px]'>
        <SidebarFilterShop />
        <div className='flex flex-col items-center gap-[100px]'>
            <div className="grid grid-cols-3 grid-flow-row gap-[12.5px]">
                {
                    products && products.map((item, index) => 
                        <Product key={index} item={item} />
                    )
                }
            </div>
            <Stack spacing={2}>
                <Pagination count={10} variant="outlined" />
            </Stack>
        </div>

    </div>
  )
}

export default Shop