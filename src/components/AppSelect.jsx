import React from 'react'
import { Select } from 'antd';

const AppSelect = (props) => {
  return (
    <Select
        style={{
            borderRadius: 8,
        }}
        {...props}
    />
  )
}

export default AppSelect