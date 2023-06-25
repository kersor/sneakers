import React from 'react'
import DrawerAdmin from '../../components/admin/DrawerAdmin'
import BodyAdmin from '../../components/admin/BodyAdmin'
import { IAdminItems } from '../../types/types'

const items: IAdminItems[] = [
  {
      id: 1,
      name: 'users',
      image_black: 'users-black.svg',
      image_white: 'users-white.svg',
      dop: false,
  },
    {
        id: 2,
        name: 'roles',
        image_black: null,
        image_white: null,
        dop: true,
    },
  {
      id: 3,
      name: 'products',
      image_black: 'product-black.svg',
      image_white: 'product-white.svg',
      dop: false,
  },
  {
      id: 4,
      name: 'color',
      image_black: null,
      image_white: null,
      dop: true,
  },
  {
      id: 5,
      name: 'gender',
      image_black: null,
      image_white: null,
      dop: true,
  },
  {
      id: 6,
      name: 'brands',
      image_black: null,
      image_white: null,
      dop: true,
  },
  {
    id: 7,
    name: 'shoe sizes',
    image_black: null,
    image_white: null,
    dop: true,
    },
  {
      id: 8,
      name: 'comments',
      image_black: 'comment-black.svg',
      image_white: 'comment-white.svg',
      dop: false,
  },
  {
      id: 9,
      name: 'blog',
      image_black: 'blog-black.svg',
      image_white: 'blog-white.svg',
      dop: false,
  }
]

const Admin = () => {
  const [activeItem, setActiveItem] = React.useState(1)
  const onClickActiveItem = (value: number) => {
    setActiveItem(value)
  }
  
  return (
    <div className='absolute top-0 left-0 w-full h-screen bg-[#b1b9c4]'>
        <div className='max-w-[1600px] mx-auto px-[15px] flex gap-[20px]'>
            <DrawerAdmin onClickActiveItem={onClickActiveItem} activeItem={activeItem} items={items} />
            <BodyAdmin activeItem={activeItem} items={items} />
        </div>
    </div>
  )
}

export default Admin