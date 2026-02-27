import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from '../pages/LoginPage/Login';
import Register from '../pages/RegisterPage/Register';
import ForgetPassword from '../pages/ForgetPasswordPage/ForgetPassword';

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/forget-password' element={<ForgetPassword/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes