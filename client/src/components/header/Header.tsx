import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { logoutLogin } from '../../store/slice/user/user.slice'
import DrawerProfile from '../drawer/DrawerProfile'

const Header = () => {
    const [isMobileMenu, setIsMobileMenu] = React.useState(false)
    const [isProfile, setIsProfile] = React.useState(false)
    const dispatch = useAppDispatch()
    const [firstName, setFirstName] = React.useState<string | undefined>('')
    const {user, isAuth} = useAppSelector(state => state.userReducer)

    React.useEffect(() => {
        if(user){
            const fn = user.name?.split('')[0]
            setFirstName(fn)
        }
    }, [user])

    const onClickLogout = () => {
        sessionStorage.removeItem('token')
        dispatch(logoutLogin())
        setIsProfile(false)
    }

    const onClickCloseDrawerProfile = (value: boolean) => {
        setIsProfile(value)
    }


    return (
        <>
            <div className='fixed w-full h-[100px] top-0 left-0'>
                <div className='max-w-[1330px] mx-auto px-[15px]'>
                    <div className='h-[100px] flex items-center justify-between'>
                        <Link to='/'><img className='max-[500px]:max-w-[120px]' src="/image/logo.svg" alt="" /></Link>
                        <div className='flex items-center gap-[30px] max-[700px]:hidden'>
                            <div className='flex gap-[20px]'>
                                <Link className="uppercase text-[12px] font-extrabold" to='/'>home</Link>
                                <Link className="uppercase text-[12px] font-extrabold" to='/shop'>shop</Link>
                                <Link className="uppercase text-[12px] font-extrabold" to='/about'>about</Link>
                                <Link className="uppercase text-[12px] font-extrabold" to='/blog'>blog</Link>
                            </div>
                            <div className='w-[2px] h-[15px] bg-[#393939]'></div>
                            <div className='flex items-center gap-[13px]'>
                                <Link to='/favorites'><img src="/image/heart.svg" alt="" /></Link>
                                <Link to='/cart'><img src="/image/shopping-bag.svg" alt="" /></Link>
                                {
                                    isAuth
                                    ? <button onClick={() => setIsProfile(true)} className={`w-[40px] h-[40px] bg-[#9bbdcd] flex justify-center items-center text-white rounded-full uppercase`}>{firstName}</button>
                                    : <Link to='/auth'><img src="/image/user.svg" alt="" /></Link>
                                }
                            </div>
                        </div>
                        <div className='min-[700px]:hidden flex gap-[15px]'>
                            <div className='flex gap-[5px]'>
                                <Link to='/favorites'><img src="/image/heart.svg" alt="" /></Link>
                                <Link to='/cart'><img src="/image/shopping-bag.svg" alt="" /></Link>
                            </div>
                            <button>
                                <img src="/image/menu.svg" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isProfile && <DrawerProfile name={user.name} onClickLogout={onClickLogout} onClickCloseDrawerProfile={onClickCloseDrawerProfile} firstName={firstName} />}
        </>
    )
}

export default Header