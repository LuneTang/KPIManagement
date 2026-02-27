import React from 'react'
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.css";
import AppButton from '../../components/AppButton';
import { Link } from 'react-router-dom';
import AppInput from '../../components/AppInput';

const Login = () => {
  return (
    <div className='auth-wrapper'>
      <div className='auth-container'>
        <div className='auth-header'>~ ARE YOU READY ~</div>
        <AppInput
          prefix={<MailOutlined/>} 
          className="login-input" 
          type="text" 
          placeholder="Enter your email" 
          size="large"
        />
        <AppInput
          prefix={<LockOutlined/>} 
          className="login-input" 
          type="text" 
          placeholder="Enter your password" 
          size="large"
          isPassword  
        />
        <AppButton> LOGIN </AppButton>
        <div className='no-account'>Haven't had account !? <Link to='/' className='here'>Get it</Link> </div>
        <div className='forget-password'>Don't remember password !? <Link to='/forget-password' className='here'>Help</Link> </div>
      </div>
    </div>
  )
}

export default Login