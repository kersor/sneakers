import React, {FC} from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { logoutLogin } from '../../store/slice/user/user.slice'
import { useNavigate } from 'react-router-dom'
import { IAdminItems } from '../../types/types'

interface IDrawerAdminProps {
    onClickActiveItem: (value: number) => void,
    activeItem: number,
    items: IAdminItems[]
}

const DrawerAdmin: FC<IDrawerAdminProps> = ({onClickActiveItem, activeItem, items}) => {
    const {user} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onClickLogout = () => {
        sessionStorage.removeItem('token')
        dispatch(logoutLogin())
        navigate('/')
    }

    return (
        <div className='min-w-[400px] h-screen py-[20px]'>
            <div className='bg-[#ffffff82] rounded-[20px] shadow-xl p-[20px] h-full relative'>
                <div className='relative after:absolute after:w-full after:h-[1px] after:bg-[#b1b9c4] after:bottom-[-20px] flex items-center justify-between'>
                    <Link to={'/'}><img src='/image/logo.svg' /> </Link>
                    <div className='text-[14px] font-bold mt-[3px]'>{user.name}</div>
                </div>
                <ul className='mt-[50px] text-[12px] flex flex-col gap-[6px]'>
                    {
                        items.map(item => 
                            <li key={item.id}
                                onClick={() => onClickActiveItem(item.id)} 
                                className={`${item.dop && 'ml-[50px] p-[10px]'} p-[10px] cursor-pointer flex gap-[10px] uppercase font-bold ${activeItem === item.id && 'bg-[#acb4bf] text-white shadow-2xl rounded-[5px]'}`}
                            >
                                <img className='max-w-[17px]' src={`/image/${activeItem === item.id ? item.image_white : item.image_black}`} alt="" />
                                {item.name}
                            </li>
                        )
                    }
                </ul>
                <button onClick={() => onClickLogout()} className='bg-[#f43f6d] text-[#ffdbdf] w-[100px] py-[5px] cursor-pointer rounded-[10px] mt-[10px] absolute bottom-[40px] left-[50%] -translate-x-[50%]'>Выйти</button>
            </div>
        </div>
        
  )
}

export default DrawerAdmin