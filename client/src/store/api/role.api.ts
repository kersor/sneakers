import { skipToken } from "@reduxjs/toolkit/dist/query"
import { IRoleReq, IRoleRes, IUserLoginRes, IUserRegisterRes, IUserReq } from "../../types/types"
import { api } from "./api"

interface IRoleAddUser{
  value: string,
  userId: number
}

interface IRoleRemoveUser{
  value: string,
  userId: number
}

const apiRole = api.injectEndpoints({
  endpoints: (build) => ({
    getAll: build.query<IRoleReq[], void>({
      query: () => ({
          url: `/roles`,
      })
    }),
    createRoleOne: build.mutation<IRoleReq, IRoleRes>({
        query: (data) => ({
            url: `/roles`,
            method: 'POST',
            body: data
        })
    }),
    deleteRoleOne: build.mutation<void, string>({
        query: (data) => ({
            url: `/roles/${data}`,
            method: 'DELETE'   
        })
    }),
    addRoleOne: build.mutation<IUserReq, IRoleAddUser>({
      query: (data) => ({
          url: `/roles/add`,
          method: 'POST',
          body: data   
      })
    }),
    removeRoleOne: build.mutation<IUserReq, IRoleRemoveUser>({
      query: (data) => ({
          url: `/roles/remove`,
          method: 'DELETE',
          body: data   
      })
    }),
  }),
})

export const { useRemoveRoleOneMutation, useAddRoleOneMutation, useGetAllQuery, useCreateRoleOneMutation, useDeleteRoleOneMutation } = apiRole