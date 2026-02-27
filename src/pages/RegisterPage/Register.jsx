import React from 'react'
import AppInput from '../../components/AppInput'
import { FaUserCircle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TbPassword } from "react-icons/tb";
import { CgPassword } from "react-icons/cg";
import AppButton from '../../components/AppButton';
import { Link } from 'react-router-dom';
import AppSelect from '../../components/AppSelect';
import { FaUsers } from "react-icons/fa6";
import "./Register.css"

const Register = () => {
  return (
    <div className='auth-wrapper'>
      <div className='auth-container'>
        <div className='auth-header'>WELCOME TO MAIHOUSE</div>
        <AppInput
          prefix={<FaUserCircle />}
          className="register-name"
          type="text"
          placeholder="Enter Full Name"
          size="large"
        />
        <AppInput
          prefix={<IoMdMail />}
          className="register-mail"
          type="text"
          placeholder="Enter Email"
          size="large"
        />
        <AppSelect
          prefix={<FaUsers/>}
          className="register-select"
          placeholder="Select position"
          size="large"
          options={[
            { value: "A", label: "Position A"},
            { value: "B", label: "Position B"},
            { value: "C", label: "Position C"},
            { value: "D", label: "Position D"},
          ]}
        />
        <AppInput
          prefix={<TbPassword />}
          className="register-password"
          type="text"
          placeholder="Enter Password"
          size="large"
          isPassword
        />
        <AppInput
          prefix={<CgPassword />}
          className="register-confirm-password"
          type="text"
          placeholder="Enter Confirm Password"
          size="large"
          isPassword
        />
        <AppButton> REGISTER </AppButton>
        <div className='already-account'>Already have account ? <Link to='/login' className='login'>Login</Link></div>
      </div>
    </div>
  )
}

export default Register