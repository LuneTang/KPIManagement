import React from 'react'
import { Input } from 'antd';

const AppInput = ({isPassword, ...props}) => {
  const Component =  isPassword ? Input.Password : Input;
  return (
    <Component
      style={{
        borderRadius: 3,
        backgroundColor: "#fff",
        color: "#111",
      }}
      {...props}
    />
  );
};

export default AppInput;