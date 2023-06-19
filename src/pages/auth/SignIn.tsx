import React, {FC} from 'react'

interface SingInProps {
    onClickIsLogin: (value: boolean) => void 
}

const SignIn: FC<SingInProps> = ({onClickIsLogin}) => {
  return (
        <>
            <h2 className='text-center text-[30px] font-bold mb-[50px]'>Log in account</h2>
            <form className='flex flex-col gap-[10px]'>
                <input placeholder='Email' className='border px-[10px] py-[5px] text-[14px] border-[#66666680] rounded-[5px] outline-0 text-black' type="email" />
                <input placeholder='Password' className='border px-[10px] py-[5px] text-[14px] border-[#66666680] rounded-[5px] outline-0 text-black' type="password" />
                <button className='bg-black text-white text-[14px] mt-[20px] py-[15px] rounded-[10px]' type='submit'>Log in</button>
                <div className='text-center text-[14px] mt-[10px]'>
                    Don't have an account? <button className='font-bold text-[#9bbdcd]' type="button"  onClick={() => onClickIsLogin(false)}>Sign up</button>
                </div>
            </form>
        </>
  )
}

export default SignIn