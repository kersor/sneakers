import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select';
import React from 'react'

import './index.scss'
import { useGetAllProductsColorQuery } from '../../../store/api/color.api';
import { IProductsColorReq } from '../../../types/types';

const BodyAdminPagesProduct = () => {
  const [brand, setBrand] = React.useState('')
  const [gender, setGender] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [color, setColor] = React.useState('')
  
  const [colors, setColors] = React.useState<IProductsColorReq[]>([])
  const {data: ProductsColor} = useGetAllProductsColorQuery()

  const onChangeBrand = (event: SelectChangeEvent) => {
    setBrand(event.target.value as string)
  }

  const onChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string)
  }

  const onChangePrice = (event: SelectChangeEvent) => {
    setPrice(event.target.value as string)
  }

  const onChangeColor = (event: SelectChangeEvent) => {
    setColor(event.target.value as string)
  }

  React.useEffect(() => {
    if(ProductsColor) setColors(ProductsColor)
  }, [ProductsColor])



  return (
    <div className='flex items-start gap-[20px]'>
        <div className='flex flex-col gap-[10px] min-w-[50%] h-[920px] overflow-auto p-[10px] '>
            <div className='p-[10px] bg-white rounded-[10px] flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <div className='flex justify-center items-center rounded-full text-[14px] text-white uppercase'>
                      <img className='max-w-[100px]' src="/image/1.png" alt="" />
                    </div>
                    <div className='flex flex-col text-[14px] leading-[20px]'>
                        <span className='font-bold'>Yeezy Slide 'Onyx'</span>
                        <span className='text-[#b1b9c4]'>YEEZY</span>
                    </div>
                </div>
                <button>
                  <img src="/image/remove-product-admin.svg" alt="" />
                </button>
            </div>
            <div className='p-[10px] bg-white rounded-[10px] flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <div className='flex justify-center items-center rounded-full text-[14px] text-white uppercase'>
                      <img className='max-w-[100px]' src="/image/1.png" alt="" />
                    </div>
                    <div className='flex flex-col text-[14px] leading-[20px]'>
                        <span className='font-bold'>Yeezy Slide 'Onyx'</span>
                        <span className='text-[#b1b9c4]'>YEEZY</span>
                    </div>
                </div>
                <button>
                  <img src="/image/remove-product-admin.svg" alt="" />
                </button>
            </div>
            <div className='p-[10px] bg-white rounded-[10px] flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <div className='flex justify-center items-center rounded-full text-[14px] text-white uppercase'>
                      <img className='max-w-[100px]' src="/image/1.png" alt="" />
                    </div>
                    <div className='flex flex-col text-[14px] leading-[20px]'>
                        <span className='font-bold'>Yeezy Slide 'Onyx'</span>
                        <span className='text-[#b1b9c4]'>YEEZY</span>
                    </div>
                </div>
                <button>
                  <img src="/image/remove-product-admin.svg" alt="" />
                </button>
            </div>
            <div className='p-[10px] bg-white rounded-[10px] flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <div className='flex justify-center items-center rounded-full text-[14px] text-white uppercase'>
                      <img className='max-w-[100px]' src="/image/1.png" alt="" />
                    </div>
                    <div className='flex flex-col text-[14px] leading-[20px]'>
                        <span className='font-bold'>Yeezy Slide 'Onyx'</span>
                        <span className='text-[#b1b9c4]'>YEEZY</span>
                    </div>
                </div>
                <button>
                  <img src="/image/remove-product-admin.svg" alt="" />
                </button>
            </div>
            <div className='p-[10px] bg-white rounded-[10px] flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <div className='flex justify-center items-center rounded-full text-[14px] text-white uppercase'>
                      <img className='max-w-[100px]' src="/image/1.png" alt="" />
                    </div>
                    <div className='flex flex-col text-[14px] leading-[20px]'>
                        <span className='font-bold'>Yeezy Slide 'Onyx'</span>
                        <span className='text-[#b1b9c4]'>YEEZY</span>
                    </div>
                </div>
                <button>
                  <img src="/image/remove-product-admin.svg" alt="" />
                </button>
            </div>
            <div className='p-[10px] bg-white rounded-[10px] flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <div className='flex justify-center items-center rounded-full text-[14px] text-white uppercase'>
                      <img className='max-w-[100px]' src="/image/1.png" alt="" />
                    </div>
                    <div className='flex flex-col text-[14px] leading-[20px]'>
                        <span className='font-bold'>Yeezy Slide 'Onyx'</span>
                        <span className='text-[#b1b9c4]'>YEEZY</span>
                    </div>
                </div>
                <button>
                  <img src="/image/remove-product-admin.svg" alt="" />
                </button>
            </div>
            <div className='p-[10px] bg-white rounded-[10px] flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <div className='flex justify-center items-center rounded-full text-[14px] text-white uppercase'>
                      <img className='max-w-[100px]' src="/image/1.png" alt="" />
                    </div>
                    <div className='flex flex-col text-[14px] leading-[20px]'>
                        <span className='font-bold'>Yeezy Slide 'Onyx'</span>
                        <span className='text-[#b1b9c4]'>YEEZY</span>
                    </div>
                </div>
                <button>
                  <img src="/image/remove-product-admin.svg" alt="" />
                </button>
            </div>
            <div className='p-[10px] bg-white rounded-[10px] flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <div className='flex justify-center items-center rounded-full text-[14px] text-white uppercase'>
                      <img className='max-w-[100px]' src="/image/1.png" alt="" />
                    </div>
                    <div className='flex flex-col text-[14px] leading-[20px]'>
                        <span className='font-bold'>Yeezy Slide 'Onyx'</span>
                        <span className='text-[#b1b9c4]'>YEEZY</span>
                    </div>
                </div>
                <button>
                  <img src="/image/remove-product-admin.svg" alt="" />
                </button>
            </div>
            <div className='p-[10px] bg-white rounded-[10px] flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <div className='flex justify-center items-center rounded-full text-[14px] text-white uppercase'>
                      <img className='max-w-[100px]' src="/image/1.png" alt="" />
                    </div>
                    <div className='flex flex-col text-[14px] leading-[20px]'>
                        <span className='font-bold'>Yeezy Slide 'Onyx'</span>
                        <span className='text-[#b1b9c4]'>YEEZY</span>
                    </div>
                </div>
                <button>
                  <img src="/image/remove-product-admin.svg" alt="" />
                </button>
            </div>
            <div className='p-[10px] bg-white rounded-[10px] flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <div className='flex justify-center items-center rounded-full text-[14px] text-white uppercase'>
                      <img className='max-w-[100px]' src="/image/1.png" alt="" />
                    </div>
                    <div className='flex flex-col text-[14px] leading-[20px]'>
                        <span className='font-bold'>Yeezy Slide 'Onyx'</span>
                        <span className='text-[#b1b9c4]'>YEEZY</span>
                    </div>
                </div>
                <button>
                  <img src="/image/remove-product-admin.svg" alt="" />
                </button>
            </div>
            <div className='p-[10px] bg-white rounded-[10px] flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <div className='flex justify-center items-center rounded-full text-[14px] text-white uppercase'>
                      <img className='max-w-[100px]' src="/image/1.png" alt="" />
                    </div>
                    <div className='flex flex-col text-[14px] leading-[20px]'>
                        <span className='font-bold'>Yeezy Slide 'Onyx'</span>
                        <span className='text-[#b1b9c4]'>YEEZY</span>
                    </div>
                </div>
                <button>
                  <img src="/image/remove-product-admin.svg" alt="" />
                </button>
            </div>
            <div className='p-[10px] bg-white rounded-[10px] flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <div className='flex justify-center items-center rounded-full text-[14px] text-white uppercase'>
                      <img className='max-w-[100px]' src="/image/1.png" alt="" />
                    </div>
                    <div className='flex flex-col text-[14px] leading-[20px]'>
                        <span className='font-bold'>Yeezy Slide 'Onyx'</span>
                        <span className='text-[#b1b9c4]'>YEEZY</span>
                    </div>
                </div>
                <button>
                  <img src="/image/remove-product-admin.svg" alt="" />
                </button>
            </div>
        </div>
        <div className='max-w-[400px] mx-auto w-full p-[10px]'>
          <form action="" className='flex flex-col gap-[10px] w-full'>
            <input className='bg-[#d9dde2] outline-none border border-[#b1b9c4] px-[10px] py-[5px] rounded-[5px] text-[#8995a6] w-full' type="text" placeholder='Name...' />
            <textarea rows={5} className='bg-[#d9dde2] outline-none border border-[#b1b9c4] px-[10px] py-[10px] rounded-[5px] text-[#8995a6] resize-none w-full' placeholder='Description...'></textarea>
            <FormControl>
              <InputLabel id="brands">Brands</InputLabel>
              <Select
                labelId="brands"
                id="demo-simple-select"
                value={brand}
                label="Brands"
                onChange={onChangeBrand}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={onChangeGender}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel id="demo-simple-select-label">Prices</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={price}
                label="Prices"
                onChange={onChangePrice}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel id="demo-simple-select-label">Color</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={color}
                label="Color"
                onChange={onChangeColor}
              >
                {
                  colors && colors.map(item => (
                    <MenuItem value={item.id} className='flex gap-[5px]'><div style={{backgroundColor: item.hex}} className="border border-[#393939] w-[20px] h-[20px] rounded-full"></div>{item.name}</MenuItem> 
                  ))
                }
              </Select>
            </FormControl>

           

            <input className='text-[12px]' type="file" name="" id="" />
 
            <button className='text-[14px] bg-white text-[#393939] font-bold py-[5px] rounded-[5px]' type='submit'>Create</button>

          </form>
        </div>
    </div>
  )
}

export default BodyAdminPagesProduct