import React from 'react'
import AppInput from '../../components/AppInput'
import { MailOutlined } from '@ant-design/icons'
import AppButton from '../../components/AppButton'
import { TbPassword } from 'react-icons/tb'
import { CgPassword } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import "./ForgetPassword.css"

const ForgetPassword = () => {
  return (
    <div className='auth-wrapper'>
      <div className='auth-container'>
        <div className='auth-header'>- FORGET PASSWORD -</div>
        <AppInput
          prefix={<MailOutlined/>}
          className="forget-input" 
          type="text" 
          placeholder="Enter your email" 
          size="large"
        />
        <AppInput
          prefix={<TbPassword />}
          className="new-password"
          type="text"
          placeholder="Enter New Password"
          size="large"
          isPassword
        />
        <AppInput
          prefix={<CgPassword />}
          className="confirm-new-password"
          type="text"
          placeholder="Enter Confirm New Password"
          size="large"
          isPassword
        />
        <AppButton> CHANGE PASSWORD </AppButton>
        <Link className='back' to="/login">Back to login</Link>
      </div>
    </div>
  )
}

export default ForgetPassword