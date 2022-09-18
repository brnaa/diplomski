import React from 'react';
import CustomButton from '../Button/Button';
import Input from '../Input/Input';
import './Form.css'

interface FormProps {
  handleQuantity: any
  handleChange: any
  handleSubmit: any
}

const Form: React.FC<FormProps> = ({ handleQuantity, handleChange, handleSubmit }) => {
  return (
    <div className='form'>
      <Input placeholder={'Namjernica'} action={handleChange} type={'text'} />
      <Input placeholder={'Kom.'} action={handleQuantity} type={'number'} />
      <CustomButton action={handleSubmit} text={'Dodaj'} />
    </div>
  );
};

export default Form;