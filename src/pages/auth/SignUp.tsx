import React, {FC} from 'react'

interface SingUpProps {
    onClickIsLogin: (value: boolean) => void 
}

const SignUp: FC<SingUpProps> = ({onClickIsLogin}) => {
  return (
        <>
            <h2 className='text-center text-[30px] font-bold mb-[50px]'>Create an account</h2>
            <form className='flex flex-col gap-[10px]'>
                <input placeholder='Name' className='border px-[10px] py-[5px] text-[14px] border-[#66666680] rounded-[5px] outline-0 text-black' type="text" />
                <input placeholder='Email' className='border px-[10px] py-[5px] text-[14px] border-[#66666680] rounded-[5px] outline-0 text-black' type="email" />
                <input placeholder='Password' className='border px-[10px] py-[5px] text-[14px] border-[#66666680] rounded-[5px] outline-0 text-black' type="password" />
                <button className='bg-black text-white text-[14px] mt-[20px] py-[15px] rounded-[10px]' type='submit'>Create</button>
                <div className='text-center text-[14px] mt-[10px]'>
                    Do have an account? <button className='font-bold text-[#9bbdcd]' type="button" onClick={() => onClickIsLogin(true)}>Log in</button>
                </div>
            </form>
        </>
  )
}

export default SignUp