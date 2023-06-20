import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import React from 'react'
import './index.scss'

const SidebarFilterShop = () => {
  return (
    <div className="bg-[#f9f9fa] p-[20px] rounded-[20px] max-w-[300px] w-full">
        <h2 className="uppercase text-center text-[20px] font-black">filters</h2>
        <div className='mt-[30px]'>
            <h3 className='uppercase font-bold text-[14px]'>brands</h3>
            <FormGroup>
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="Yeezy" />
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="Yeezy" />
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="Yeezy" />
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="Yeezy" />
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="Yeezy" />
            </FormGroup>
        </div>
        <div className='mt-[30px]'>
            <h3 className='uppercase font-bold text-[14px]'>gender</h3>
            <FormGroup>
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="Man" />
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="Woman" />
            </FormGroup>
        </div>
        <div className='mt-[30px]'>
            <h3 className='uppercase font-bold text-[14px]'>prices</h3>
            <FormGroup>
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="$100 - $200" />
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="$200 - $300" />
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="$300 - $400" />
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="$400 - $500" />
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="$500 - $600" />
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="$600 +" />
            </FormGroup>
        </div>
        <div className='mt-[30px]'>
            <h3 className='uppercase font-bold text-[14px]'>color</h3>
            <FormGroup>
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="WHITE" />
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="BLACK" />
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="GRAY" />
                <FormControlLabel control={<Checkbox color="default" sx={{paddingTop: 0.5, paddingBottom: 0.5}} />} label="MIXED" />
            </FormGroup>
        </div>
    </div>
  )
}

export default SidebarFilterShop