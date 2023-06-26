import { skipToken } from "@reduxjs/toolkit/dist/query"
import { IUserLoginRes, IUserRegisterRes, IUserReq } from "../../types/types"
import { api } from "./api"

const apiAuth = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<IUserReq, IUserRegisterRes>({
        query: (data) => ({
            url: '/auth/register',
            body: data,
            method: 'POST'
        })
    }),
    login: build.mutation<IUserReq, IUserLoginRes>({
      query: (data) => ({
          url: '/auth/login',
          body: data,
          method: 'POST'
      })
    }),
    isMe: build.query<IUserReq[], number>({
      query: (data) => ({
          url: `/auth/me/${data}`,
      })
    }),
    getAllUsers: build.query<IUserReq[], void>({
      query: () => ({
          url: `/auth`,
      })
    }),
  }),
})

export const { useRegisterMutation, useLoginMutation, useIsMeQuery, useGetAllUsersQuery } = apiAuth