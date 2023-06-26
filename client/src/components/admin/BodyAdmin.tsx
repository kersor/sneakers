import React, {FC} from 'react'
import { IAdminItems, IAdminPages } from '../../types/types'
import { pages } from './BodyAdminPages'

interface IDrawerAdminProps {
    activeItem: number,
    items: IAdminItems[]
}

const BodyAdmin: FC<IDrawerAdminProps> = ({activeItem, items}) => {

  return (
    <div className='w-full h-screen py-[20px]'>
        <div className='bg-[#ffffff82] rounded-[20px] shadow-xl p-[20px] h-full relative'>
          {pages.map((item: IAdminPages) => item.id === activeItem && <item.page key={item.id} />)}
        </div>
    </div>
  )
}

export default BodyAdmin