import { FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select';
import React from 'react'
import './updateCountSizeProduct.scss'

const UpdateCountSizeProduct = () => {
    const [productId, setProductId] = React.useState('1')
    const [size, setSize] = React.useState('35')

    const onChangeProductId = (event: SelectChangeEvent) => {
        setProductId(event.target.value as string);
    };

    const onChangeSize = (event: SelectChangeEvent) => {
        setSize(event.target.value as string);
    };


    return (
        <form className='p-[10px] flex gap-[10px] justify-between'>
            <div className='min-w-[400px] flex gap-[10px] items-center'>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Product</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={productId}
                    label="Product"
                    onChange={onChangeProductId}
                    >
                        <MenuItem value={1}>
                            <div className='flex items-center'>
                                <img className='max-w-[40px]' src="/image/1.png" alt="" />
                                <div className='text-[#393939] font-bold text-[14px]'>Yeezy Slide 'Onyx'</div>
                            </div>
                        </MenuItem>
                        <MenuItem value={2}>
                            <div className='flex items-center'>
                                <img className='max-w-[40px]' src="/image/1.png" alt="" />
                                <div className='text-[#393939] font-bold text-[14px]'>Yeezy Slide 'Onyx'</div>
                            </div>
                        </MenuItem>                
                    </Select>
                </FormControl>
                <FormControl fullWidth className='max-w-[100px]'>
                    <InputLabel id="demo-simple-select-label">Size</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    label="Size"
                    onChange={onChangeSize}
                    >
                    <MenuItem value={35}>
                        <div className='text-[14px] font-bold text-[#393939]'>35 size</div>
                    </MenuItem>
                    <MenuItem value={1}>
                        <div className='text-[14px] font-bold text-[#393939]'>35 size</div>
                    </MenuItem>
                    <MenuItem value={1}>
                        <div className='text-[14px] font-bold text-[#393939]'>35 size</div>
                    </MenuItem>
                    <MenuItem value={1}>
                        <div className='text-[14px] font-bold text-[#393939]'>35 size</div>
                    </MenuItem>
                    <MenuItem value={1}>
                        <div className='text-[14px] font-bold text-[#393939]'>35 size</div>
                    </MenuItem>
                    <MenuItem value={1}>
                        <div className='text-[14px] font-bold text-[#393939]'>35 size</div>
                    </MenuItem>
                    <MenuItem value={1}>
                        <div className='text-[14px] font-bold text-[#393939]'>35 size</div>
                    </MenuItem>
                    <MenuItem value={1}>
                        <div className='text-[14px] font-bold text-[#393939]'>35 size</div>
                    </MenuItem>
                    <MenuItem value={1}>
                        <div className='text-[14px] font-bold text-[#393939]'>35 size</div>
                    </MenuItem>
                    <MenuItem value={1}>
                        <div className='text-[14px] font-bold text-[#393939]'>35 size</div>
                    </MenuItem>
                    <MenuItem value={1}>
                        <div className='text-[14px] font-bold text-[#393939]'>35 size</div>
                    </MenuItem>
                    
                    </Select>
                </FormControl>
                <TextField className='w-[200px]' id="outlined-basic" label="Count" variant="outlined" />
            </div>
            <button className='text-[14px] bg-white text-[#393939] font-bold py-[5px] px-[20px] rounded-[5px]' type='submit'>Update</button>
        </form>
    )
}

export default UpdateCountSizeProduct