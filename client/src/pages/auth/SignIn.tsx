import React, {FC} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useError } from '../../hooks/redux'
import { useLoginMutation } from '../../store/api/auth.api'
import { isLogin } from '../../store/slice/user/user.slice'
import { Alert } from '@mui/material'

interface SingInProps {
    onClickIsLogin: (value: boolean) => void 
}

const SignIn: FC<SingInProps> = ({onClickIsLogin}) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [singIn, setSignIn] = React.useState({email: '', password: ''})
    const [loginUser, {data, error, isError}] = useLoginMutation()
    const isErrorMessage = useError(error)

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        loginUser(singIn)
        setSignIn({email: '', password: ''})
    }

    React.useEffect(() => {
        if(data) {
            const {user, access_token} = data
            sessionStorage.setItem('token', access_token)

            const roles = user[0].roles
            const role = roles.map(item => item.value)
            const isAdmin = role.includes('ADMIN')
            const payload = {
                user: {
                    id: user[0].id,
                    name: user[0].name,
                    roles: role
                },
                isAdmin: isAdmin
            }

            dispatch(isLogin(payload))
            if(isAdmin) navigate('/admin')
            else navigate('/')
        }
    }, [data])

    return (
            <>
                <h2 className='text-center text-[30px] font-bold mb-[50px]'>Log in account</h2>
                <form className='flex flex-col gap-[10px]' onSubmit={onSubmit} method='POST'>
                    <input value={singIn.email} onChange={(e) => setSignIn({...singIn, email: e.target.value})} placeholder='Email' className='border px-[10px] py-[5px] text-[14px] border-[#66666680] rounded-[5px] outline-0 text-black' type="text" />
                    <input value={singIn.password} onChange={(e) => setSignIn({...singIn, password: e.target.value})} placeholder='Password' className='border px-[10px] py-[5px] text-[14px] border-[#66666680] rounded-[5px] outline-0 text-black' type="password" />
                    <button className='bg-black text-white text-[14px] mt-[20px] py-[15px] rounded-[10px]' type='submit'>Log in</button>
                    <div className='text-center text-[14px] mt-[10px]'>
                        Don't have an account? <button className='font-bold text-[#9bbdcd]' type="button"  onClick={() => onClickIsLogin(false)}>Sign up</button>
                    </div>
                    {
                        error && <Alert severity="error">{ isErrorMessage}</Alert>
                    }
                </form>
            </>
    )
}

export default SignIn