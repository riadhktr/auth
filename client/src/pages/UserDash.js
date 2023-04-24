import React from 'react'
import { useSelector } from 'react-redux'
import { getLocalStorage } from '../helpers/localStorage'

const UserDash = () => {
  // const info = useSelector(state=>state.auth)
  // console.log(info)
  const userInfo = getLocalStorage('user');
  console.log(userInfo);
  return (
    <div>Welcome back {userInfo.name}</div>
  )
}

export default UserDash