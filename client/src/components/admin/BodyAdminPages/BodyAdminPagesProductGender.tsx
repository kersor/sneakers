import React from 'react'
import { IProductsGenderReq } from '../../../types/types'
import { useCreateOneProductsGenderMutation, useDeleteOneProductsGenderMutation, useGetAllProductsGenderQuery } from '../../../store/api/gender.api'

const BodyAdminPagesProductGender = () => {
  const [gender, setGender] = React.useState({name: ''})
  const [genders, setGenders] = React.useState<IProductsGenderReq[]>([])
  const {data: ProductsGender} = useGetAllProductsGenderQuery()
  const [deleteOneProductsGenderMutation] = useDeleteOneProductsGenderMutation()
  const [createOneProductsGenderMutation] = useCreateOneProductsGenderMutation()

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const {data} = await createOneProductsGenderMutation(gender) as {data: IProductsGenderReq}
    setGenders([...genders, data])
    setGender({name: ''})
  }

  React.useEffect(() => {
    if(ProductsGender) setGenders(ProductsGender)
  }, [ProductsGender])

  const onSubmitRemove = async (id: number) => {
    await deleteOneProductsGenderMutation(id)
    const ready = genders.filter(item => item.id !== id)
    setGenders([...ready])
  }


  return (
    <div className='flex'>
        <div className='flex flex-col gap-[10px] min-w-[50%] h-[920px] overflow-auto p-[10px]'>
          {
            genders && genders.map(item => (
              <div key={item.id} className='p-[10px] bg-white rounded-[10px] flex items-center gap-[10px] justify-between'>
                <div className='flex items-center gap-[5px]'>
                  <div className='bg-[#acb4bf] rounded-full w-[35px] h-[35px] text-[14px] text-white font-bold flex justify-center items-center uppercase'>{item.name.split('')[0]}</div>
                  <div className="font-semibold text-[14px]">Gender: <span  className='font-bold'>{item.name}</span></div>
                </div>
                <button onClick={() => onSubmitRemove(item.id)}><img src="/image/remove-product-admin.svg" alt="" /></button>
              </div>
            ))
          }
        </div>
        <div className='max-w-[400px] mx-auto w-full p-[10px]'>
          <form action="" className='flex flex-col gap-[10px]' onSubmit={onSubmit}>
            <input onChange={e => setGender({name: e.target.value})} value={gender.name}  className='bg-[#d9dde2] outline-none border border-[#b1b9c4] px-[10px] py-[5px] rounded-[5px] text-[#8995a6] w-full' type="text" placeholder='Name...' />
            <button className='text-[14px] bg-white text-[#393939] font-bold py-[5px] rounded-[5px]' type='submit'>Create</button>
          </form>
        </div>
    </div>
  )
}

export default BodyAdminPagesProductGender