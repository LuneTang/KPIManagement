import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from '../pages/LoginPage/Login';
import Register from '../pages/RegisterPage/Register';

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes