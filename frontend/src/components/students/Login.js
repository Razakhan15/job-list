import React from 'react'
import LoginCard from '../../partials/LoginCard'

const Login = () => {
  return (
    <div  className="min-h-screen bg-gradient-to-r from-gray-100 to-emerald-300 ">
    <h1 className='text-center pt-5 text-3xl font-semibold'>Welcome to the Student Portal!</h1>
    <LoginCard link="loginstudent"/>
    </div>
  )
}

export default Login