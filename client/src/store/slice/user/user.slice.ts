import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IRole, IUserReq } from '../../../types/types'


interface IUserState {
  user: {
    id: number | null,
    name: string | null,
    roles: string[] | null
  },
  isAuth: boolean | null,
  isAdmin: boolean | null
}

const initialState: IUserState = {
  user: {
    id: null,
    name: null,
    roles: null
  },
  isAuth: false,
  isAdmin: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isLogin: (state, action) => {
      const user = action.payload.user

      state.user.id = user.id
      state.user.name = user.name
      state.user.roles = user.roles

      state.isAuth = true
      state.isAdmin = action.payload.isAdmin
    },
    logoutLogin: (state) => {
      state.user.id = null
      state.user.name = null
      state.user.roles = null

      state.isAuth = false
      state.isAdmin = false
    }
  },
})

export const { isLogin, logoutLogin } = userSlice.actions
export default userSlice.reducer