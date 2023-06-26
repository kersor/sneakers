import React from 'react'
import { useCreateRoleOneMutation, useDeleteRoleOneMutation, useGetAllQuery } from '../../../store/api/role.api'
import { IRoleReq } from '../../../types/types'
import { Alert } from '@mui/material'

const BodyAdminPagesUsersRoles = () => {
  const [roles, setRoles] = React.useState<IRoleReq[]>([])
  const {data} = useGetAllQuery()
  const [role, setRole] = React.useState({value: '', description: ''})
  const [createRoleOneMutation] = useCreateRoleOneMutation()
  const [deleteRoleOneMutation] = useDeleteRoleOneMutation()
  const [errorMessage, setErrorMessage] = React.useState('')

  const onSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      const { data } = await createRoleOneMutation(role) as { data: IRoleReq }
      if (data) {
        setRoles(prev => [...prev, data])
      }
  }

  const onClickDeleteRole = async (value: string) => {
    const roleDelete = await deleteRoleOneMutation(value)
    if('error' in roleDelete) {
      const error = roleDelete.error as { data: { message: string } };
      if (error.data && error.data.message) {
        const errorMessage = error.data.message;
        setErrorMessage(errorMessage);
      }
      return false
    }
    setRoles(prev => roles.filter(item => item.value !== value))
  }

  React.useEffect(() => {
    if(data) setRoles(data)
  }, [data])

  return (
    <div className='flex'>
        <div className='flex flex-col gap-[10px] min-w-[50%] h-[920px] overflow-auto p-[10px]'>
          {
            roles && roles.map(item => (
              <div key={item.id} className='p-[10px] bg-white rounded-[10px] flex items-center gap-[10px] justify-between'>
                <div className='flex items-center gap-[5px]'>
                  <div className='bg-[#9bbdcd] rounded-full w-[35px] h-[35px] flex justify-center items-center text-white uppercase'>{item.value.split('')[0]}</div>
                  <div className='flex flex-col text-[14px] leading-[20px]'>
                      <span className="font-semibold">Value: <span  className='font-bold uppercase'>{item.value}</span></span>
                      <span className='text-[#b1b9c4]'>Description: {item.description}</span>
                  </div>
                </div>
                <button onClick={() => onClickDeleteRole(item.value)}><img src="/image/remove-product-admin.svg" alt="" /></button>
              </div>
            ))
          }
          {
            errorMessage.length > 0 && <Alert severity="error">{errorMessage}</Alert>
          }
        </div>
        <div className='max-w-[400px] mx-auto w-full p-[10px]'>
          <form method='POST' className='flex flex-col gap-[10px]' onSubmit={onSubmit}>
            <input onChange={(e) => setRole({...role, value: e.target.value})} value={role.value} className='bg-[#d9dde2] outline-none border border-[#b1b9c4] px-[10px] py-[5px] rounded-[5px] text-[#8995a6] w-full' type="text" placeholder='Value...' />
            <input onChange={(e) => setRole({...role, description: e.target.value})} value={role.description} className='bg-[#d9dde2] outline-none border border-[#b1b9c4] px-[10px] py-[5px] rounded-[5px] text-[#8995a6] w-full' type="text" placeholder='Description...' />
            <button className='text-[14px] bg-white text-[#393939] font-bold py-[5px] rounded-[5px]' type='submit'>Create</button>
          </form>
        </div>
    </div>
  )
}

export default BodyAdminPagesUsersRoles