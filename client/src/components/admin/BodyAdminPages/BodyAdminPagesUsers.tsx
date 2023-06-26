import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import React, {FC} from 'react'
import { useGetAllUsersQuery } from '../../../store/api/auth.api'
import { IRoleReq, IUserReq } from '../../../types/types'
import { useAddRoleOneMutation, useGetAllQuery, useRemoveRoleOneMutation } from '../../../store/api/role.api'

const BodyAdminPagesUsers = () => {
  const [userId, setUserId] = React.useState('')
  const [rolesValue, setRoelsValue] = React.useState('')

  const [removeUserId, setRemoveUserId] = React.useState('')
  const [removeRolesValue, setRemoveRoelsValue] = React.useState('')

  const [users, setUsers] = React.useState<IUserReq[]>([])
  const [roles, setRoles] = React.useState<IRoleReq[]>([])

  const {data: getAllUsers} = useGetAllUsersQuery()
  const {data: getAllRoles} = useGetAllQuery()
  const [addRoleOneMutation] = useAddRoleOneMutation()
  const [removeRoleOneMutation] = useRemoveRoleOneMutation()


  const onChangeUserId = (event: SelectChangeEvent) => setUserId(event.target.value as string)
  const onChangeRoleValue = (event: SelectChangeEvent) => setRoelsValue(event.target.value as string)

  const onChangeRemoveUserId = (event: SelectChangeEvent) => setRemoveUserId(event.target.value as string)
  const onChangeRemoveRoleValue = (event: SelectChangeEvent) => setRemoveRoelsValue(event.target.value as string)

  React.useEffect(() => {
    if(getAllUsers)setUsers(getAllUsers)
    if(getAllRoles)setRoles(getAllRoles)

  }, [getAllUsers, getAllRoles])

  const onSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      const {data} = await addRoleOneMutation({value: rolesValue, userId: +userId}) as {data: IUserReq}
      const ready = users.filter(item => item.id !== data.id)
      setUsers([...ready, data])
  }

  const onSubmitRemove = async (e: React.FormEvent) => {
    e.preventDefault()
    const {data} = await removeRoleOneMutation({value: removeRolesValue, userId: +removeUserId}) as {data: IUserReq}
    const ready = users.filter(item => item.id !== data.id)
    setUsers([...ready, data])
}


  return (
    <div className='flex items-start gap-[20px]'>
        <div className='flex flex-col gap-[10px] w-full h-[920px] overflow-auto p-[10px] '>
            {
              users && users.map(item => (
                <div key={item.id} className='p-[10px] bg-white rounded-[10px] flex items-center justify-between'>
                    <div className='flex items-center gap-[10px]'>
                        <div className='bg-[#9bbdcd] w-[40px] h-[40px] flex justify-center items-center rounded-full text-[14px] text-white uppercase'>{item.name.split('')[0]}</div>
                        <div className='flex flex-col text-[14px] leading-[17px]'>
                            <span className='font-bold'>{item.name}</span>
                            <span className='text-[#b1b9c4]'>{item.email}</span>
                        </div>
                    </div>
                    <div className='flex gap-[10px]'>
                      {
                        item.roles.map(role => (
                          <div key={role.id} className='text-[12px] font-bold bg-[#dafecd] text-[#7cb72f] px-[10px] py-[3px] border-2 border-[#7cb72f] rounded-[5px]'>
                            {role.value}
                          </div>
                        ))
                      }
                    </div>
                </div>
              ))
            }
        </div>
        <div className='w-full flex flex-col gap-[30px]'>
          <div className='flex flex-col gap-[10px] w-full overflow-auto p-[10px]'>
            <form method='POST' className='flex flex-col gap-[10px]' onSubmit={onSubmit}>
            <div className='flex flex-col gap-[10px]'>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">User</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={userId}
                  label="user"
                  onChange={onChangeUserId}
                >
                  {
                    users && users.map(item => (
                      <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={rolesValue}
                  label="Role"
                  onChange={onChangeRoleValue}
                >
                  {
                    roles && roles.map(item => (
                      <MenuItem key={item.id} value={item.value}>{item.value}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </div>
            <button className='text-[14px] bg-white text-[#393939] font-bold py-[5px] rounded-[5px]' type='submit'>Add</button>
            </form>
          </div>
          <div className='flex flex-col gap-[10px] w-full overflow-auto p-[10px]'>
            <form method='POST' className='flex flex-col gap-[10px]' onSubmit={onSubmitRemove}>
            <div className='flex flex-col gap-[10px]'>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">User</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={removeUserId}
                  label="User"
                  onChange={onChangeRemoveUserId}
                >
                  {
                    users && users.map(item => (
                      <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={removeRolesValue}
                  label="Role"
                  onChange={onChangeRemoveRoleValue}
                >
                  {
                    roles && roles.map(item => (
                      <MenuItem key={item.id} value={item.value}>{item.value}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </div>
            <button className='text-[14px] bg-white text-[#393939] font-bold py-[5px] rounded-[5px]' type='submit'>Remove</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default BodyAdminPagesUsers