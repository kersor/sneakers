import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import jwt from 'jwt-decode'
import { useIsMeQuery } from '../store/api/auth.api'
import { IDecodeToken, IUserReq } from '../types/types'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useDecodeToken = () => {
    const token = sessionStorage.getItem('token')

    if(token) {
        const smallData: IDecodeToken = jwt(token)
        return smallData
    }else{
        return false
    }
}

