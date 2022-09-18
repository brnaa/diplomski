import React from 'react';
import './Input.css'

interface InputProps {
  action: any
  type: string
  placeholder: string
}

const Input: React.FC<InputProps> = ({ action, type, placeholder }) => {
  return (
    <input className='input' placeholder={placeholder} onChange={action} name="name" type={type} />
  );
};

export default Input;