import React, {FC} from 'react'
import { useRegisterMutation } from '../../store/api/auth.api'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useError } from '../../hooks/redux'
import { isLogin } from '../../store/slice/user/user.slice'
import { Alert } from '@mui/material'

interface SingUpProps {
    onClickIsLogin: (value: boolean) => void 
}

const SignUp: FC<SingUpProps> = ({onClickIsLogin}) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [singUp, setSignUp] = React.useState({name: '', email: '', password: ''})
    const [registerUser, {data, error, isError}] = useRegisterMutation()
    const isErrorMessage = useError(error)

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        registerUser(singUp)
        setSignUp({name: '', email: '', password: ''})
    }

    React.useEffect(() => {
        if(data) {
            const {user, access_token} = data
            sessionStorage.setItem('token', access_token)

            const roles = user[0].roles
            const role = roles.map(item =>  item.value)
            const payload = {
                user: {
                    id: user[0].id,
                    name: user[0].name,
                    roles: role
                },
                access_token: access_token
            }

            dispatch(isLogin(payload))
            navigate('/')
        }
    }, [data])



    return (
            <>
                <h2 className='text-center text-[30px] font-bold mb-[50px]'>Create an account</h2>
                <form className='flex flex-col gap-[10px]' onSubmit={onSubmit} method='POST'>
                    <input value={singUp.name} onChange={(e) => setSignUp({...singUp, name: e.target.value})} placeholder='Name' className='border px-[10px] py-[5px] text-[14px] border-[#66666680] rounded-[5px] outline-0 text-black' type="text" />
                    <input value={singUp.email} onChange={(e) => setSignUp({...singUp, email: e.target.value})} placeholder='Email' className='border px-[10px] py-[5px] text-[14px] border-[#66666680] rounded-[5px] outline-0 text-black' type="text" />
                    <input value={singUp.password} onChange={(e) => setSignUp({...singUp, password: e.target.value})} placeholder='Password' className='border px-[10px] py-[5px] text-[14px] border-[#66666680] rounded-[5px] outline-0 text-black' type="password" />
                    <button className='bg-black text-white text-[14px] mt-[20px] py-[15px] rounded-[10px]' type='submit'>Create</button>
                    <div className='text-center text-[14px] mt-[10px]'>
                        Do have an account? <button className='font-bold text-[#9bbdcd]' type="button" onClick={() => onClickIsLogin(true)}>Log in</button>
                    </div>
                    {
                        error && <Alert severity="error">{ isErrorMessage}</Alert>
                    }
                </form>
            </>
    )
}

export default SignUp