import React from 'react';
import './Button.css'

interface CustomButtonProps {
  text: string
  action: any
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, action }) => {
  return (
    <div className="wrap">
      <button className="button" onClick={() => { action() }}>{text}</button>
    </div>
  );
};

export default CustomButton;