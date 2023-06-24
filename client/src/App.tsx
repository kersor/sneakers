import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Shop from './pages/shop/Shop'
import Auth from './pages/auth/Auth'
import { useAppDispatch, useAppSelector, useDecodeToken } from './hooks/redux'
import { useIsMeQuery } from './store/api/auth.api'
import jwt from 'jwt-decode'
import { IDecodeToken } from './types/types'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import { isLogin } from './store/slice/user/user.slice'
import Admin from './pages/admin/Admin'

const App = () => {
  const decodeToken = useDecodeToken()
  const [decodeTokenData, setDecodeTokenData] = React.useState<null | number>()
  const {data} = useIsMeQuery(decodeTokenData ?? skipToken)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if(decodeToken){
      setDecodeTokenData(decodeToken.id)
    }
  }, [decodeToken])

  React.useEffect(() => {
    if(data){
      const user = data[0]
      const roles = user.roles
      const role = roles.map(item =>  item.value)
      const isAdmin = role.includes('ADMIN')
      const payload = {
          user: {
              id: user.id,
              name: user.name,
              roles: role
          },
          isAdmin: isAdmin
      }

      dispatch(isLogin(payload))
    }
  }, [data])


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App