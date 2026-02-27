import React from 'react'

import { Button } from "antd";
import "./AppButton.css"

const AppButton = ({children, ...props}) => {
  return (
    <Button
        className="app-button"
        style={{border: "none"}}
        {...props}
    >
        {children}
    </Button>
  )
}

export default AppButton;
