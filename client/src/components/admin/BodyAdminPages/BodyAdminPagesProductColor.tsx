import React from 'react'
import { useCreateOneProductsColorMutation, useDeleteOneProductsColorMutation, useGetAllProductsColorQuery } from '../../../store/api/color.api'
import { IProductsColorReq, IProductsColorRes } from '../../../types/types'

const BodyAdminPagesProductColor = () => {
  const [color, setColor] = React.useState({name: '', hex: ''})
  const [colors, setColors] = React.useState<IProductsColorReq[]>([])
  const {data: ProductsColor} = useGetAllProductsColorQuery()
  const [createOneProductsColorMutation] = useCreateOneProductsColorMutation()
  const [deleteOneProductsColorMutation] = useDeleteOneProductsColorMutation()

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const {data} = await createOneProductsColorMutation(color) as {data: IProductsColorReq}
    setColors([...colors, data])
  }

  React.useEffect(() => {
    if(ProductsColor) setColors(ProductsColor)
  }, [ProductsColor])

  const onSubmitRemove = async (id: number) => {
    await deleteOneProductsColorMutation(id)
    const ready = colors.filter(item => item.id !== id)
    setColors([...ready])
  }





  return (
    <div className='flex'>
        <div className='flex flex-col gap-[10px] min-w-[50%] h-[920px] overflow-auto p-[10px]'>
          {
            colors && colors.map(item => (
              <div key={item.id} className='p-[10px] bg-white rounded-[10px] flex items-center gap-[10px] justify-between'>
                <div className='flex items-center gap-[5px]'>
                  <div style={{backgroundColor: item.hex}} className={`rounded-full w-[35px] h-[35px] border border-[#393939]`}></div>
                  <div className='flex flex-col text-[14px] leading-[20px]'>
                      <span className="font-semibold">Name: <span  className='font-bold'>{item.name}</span></span>
                      <span className='text-[#b1b9c4]'>HEX: {item.hex}</span>
                  </div>
                </div>
                <button onClick={() => onSubmitRemove(item.id)}><img src="/image/remove-product-admin.svg" alt="" /></button>
              </div>
            ))
          }
          
        </div>
        <div className='max-w-[400px] mx-auto w-full p-[10px]'>
          <form action="" className='flex flex-col gap-[10px]' onSubmit={onSubmit}>
            <input value={color.name} onChange={e => setColor({...color, name: e.target.value})} className='bg-[#d9dde2] outline-none border border-[#b1b9c4] px-[10px] py-[5px] rounded-[5px] text-[#8995a6] w-full' type="text" placeholder='Name...' />
            <input value={color.hex} onChange={e => setColor({...color, hex: e.target.value})} className='bg-[#d9dde2] outline-none border border-[#b1b9c4] px-[10px] py-[5px] rounded-[5px] text-[#8995a6] w-full' type="text" placeholder='HEX...' />
            <button className='text-[14px] bg-white text-[#393939] font-bold py-[5px] rounded-[5px]' type='submit'>Create</button>
          </form>
        </div>
    </div>
  )
}

export default BodyAdminPagesProductColor