import React from 'react'
import AppLayout from '../Layout/AppLayout'
import { Navigate } from 'react-router-dom'

const PrivateRouter = (props) => {
let auth = {
    token: false
}

  return (
    auth.token ? <AppLayout>{props.children}</AppLayout> : <Navigate to='login'/>
  )
}

export default PrivateRouter