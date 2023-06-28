import { skipToken } from "@reduxjs/toolkit/dist/query"
import { IProductsColorReq, IProductsColorRes, IUserLoginRes, IUserRegisterRes, IUserReq } from "../../types/types"
import { api } from "./api"

const apiColor = api.injectEndpoints({
  endpoints: (build) => ({
    createOneProductsColor: build.mutation<IProductsColorReq, IProductsColorRes>({
        query: (data) => ({
            url: `/products-color`,
            method: 'POST',
            body: data
        })
    }),
    deleteOneProductsColor: build.mutation<number, number>({
        query: (data) => ({
            url: `/products-color/${data}`,
            method: 'DELETE'   
        })
    }),
    getAllProductsColor: build.query<IProductsColorReq[], void>({
      query: () => ({
          url: `/products-color`,
      })
    }),
    getOneProductsColor: build.query<IProductsColorReq, number>({
      query: (id) => ({
        url: `/products-color/${id}`,
      })
    }),
  }),
})

export const { useGetAllProductsColorQuery, useCreateOneProductsColorMutation, useDeleteOneProductsColorMutation } = apiColor