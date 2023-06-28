import { IProductsGenderReq, IProductsGenderRes } from "../../types/types"
import { api } from "./api"

const apiColor = api.injectEndpoints({
  endpoints: (build) => ({
    createOneProductsGender: build.mutation<IProductsGenderReq, IProductsGenderRes>({
        query: (data) => ({
            url: `/products-gender`,
            method: 'POST',
            body: data
        })
    }),
    deleteOneProductsGender: build.mutation<number, number>({
        query: (data) => ({
            url: `/products-gender/${data}`,
            method: 'DELETE'   
        })
    }),
    getAllProductsGender: build.query<IProductsGenderReq[], void>({
      query: () => ({
          url: `/products-gender`,
      })
    }),
    getOneProductsGender: build.query<IProductsGenderReq, number>({
      query: (id) => ({
        url: `/products-gender/${id}`,
      })
    }),
  }),
})

export const { useGetAllProductsGenderQuery, useDeleteOneProductsGenderMutation, useCreateOneProductsGenderMutation } = apiColor