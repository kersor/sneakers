import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Auth = () => {
    const [isLogin, setIsLogin] = React.useState(false)

    const onClickIsLogin = (value: boolean) => {
        setIsLogin(prev => value)
    }

    React.useEffect(() => {
        document.querySelector('body')?.classList.add('_active')       
        return () =>  document.querySelector('body')?.classList.remove('_active')
    }, [])

    return (
        <div className='flex'>
            <div className='w-[50%] h-screen bg-white flex justify-center items-center'>
                <div className='flex flex-col max-w-[350px] mx-auto w-full'>
                    {
                        isLogin
                        ? <SignIn onClickIsLogin={onClickIsLogin} />
                        : <SignUp onClickIsLogin={onClickIsLogin} />
                    }
                </div>
            </div>
            <div className="w-[50%] h-screen flex items-center justify-center ">
                <div className='w-[95%] h-[95%] relative'>
                    <img className='absolute top-0 left-0 w-full h-full object-cover rounded-[20px]' src="/image/bg-auth.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Auth