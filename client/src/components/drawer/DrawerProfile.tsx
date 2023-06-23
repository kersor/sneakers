import React, {FC} from 'react'

interface IDrawerProfileProps {
    name: string | null,
    firstName: string | undefined,
    onClickLogout: () => void,
    onClickCloseDrawerProfile: (value: boolean) => void
}

const DrawerProfile: FC<IDrawerProfileProps> = ({name, firstName, onClickLogout, onClickCloseDrawerProfile}) => {
  return (
    <div className="absolute top-0 right-0 w-[500px] h-screen bg-white shadow-2xl p-[20px] z-10">
        <div className='flex justify-between items-center'>
            <h2 className='text-[20px] font-bold'>Профиль</h2>
            <button onClick={() => onClickCloseDrawerProfile(false) }><img src="/image/x.svg" alt="" /></button>
        </div>
        <div className='mt-[30px] flex items-center gap-[10px]'>
            <div className='text-[20px] bg-[#9bbdcd] w-[50px] h-[50px] flex justify-center items-center rounded-full text-white'>{firstName}</div>
            <div>{name}</div>
        </div>
        <div className='mt-[20px] text-[14px]'>
            <div>Количество заказов: <span className="font-semibold">0</span></div>
            <div>Общая сумма покупок: <span className="font-semibold">$ 0</span></div>
        </div>
        <button onClick={() => onClickLogout()} className='bg-[#fecdd3] text-[#f43f6d] w-[100px] py-[5px] cursor-pointer rounded-[10px] mt-[10px]'>Выйти</button>
        <h2 className='text-[20px] font-bold mt-[40px]'>Заказы</h2>
        <div className='mt-[5px] flex flex-col gap-[10px] overflow-auto h-[650px] p-[10px] rounded-[20px]'>
            <div className='shadow-xl p-[20px] rounded-[20px] text-[14px] flex justify-between items-center bg-[#9bbdcd22]'>
                <div className='font-bold'>
                    <div className=''>Заказ #322</div>
                    <div className='text-[#6668] text-[12px]'>23.02.2021</div>
                </div>
                <div className='font-bold'>
                    $ 32322
                </div>
            </div>
            <div className='shadow-xl p-[20px] rounded-[20px] text-[14px] flex justify-between items-center bg-[#9bbdcd22]'>
                <div className='font-bold'>
                    <div className=''>Заказ #322</div>
                    <div className='text-[#6668] text-[12px]'>23.02.2021</div>
                </div>
                <div className='font-bold'>
                    $ 32322
                </div>
            </div>
            <div className='shadow-xl p-[20px] rounded-[20px] text-[14px] flex justify-between items-center bg-[#9bbdcd22]'>
                <div className='font-bold'>
                    <div className=''>Заказ #322</div>
                    <div className='text-[#6668] text-[12px]'>23.02.2021</div>
                </div>
                <div className='font-bold'>
                    $ 32322
                </div>
            </div>
        </div>
    </div>
  )
}

export default DrawerProfile