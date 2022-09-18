import '../../App.css'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Item, Index, addItem, buyItem } from '../features/basketSlice'
import type { RootState } from '../store'
import CustomButton from '../components/Button/Button';
import Form from '../components/Form/Form';
import List from '../components/List/List';

interface ShoppingListProps {

}

const ShoppingList: React.FC<ShoppingListProps> = () => {
  const items = useSelector((state: RootState) => state.basket.items)
  const dispatch = useDispatch()
  const [newItem, setNewItem] = useState<Item>(
    {
      name: '',
      quant: 1,
      bought: false,
    }
  );
  const handleChange = (e: any) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }
  const handleQuantity = (e: React.FormEvent<HTMLInputElement>) => {
    setNewItem({ ...newItem, quant: parseInt(e.currentTarget.value) })
  }
  const handleSubmit = () => {
    dispatch(addItem(newItem))
    setNewItem({
      name: '',
      quant: 1,
      bought: false,
    })
  }
  const confirmPurchase = (index: number) => {
    dispatch(buyItem(index))
  }
  return (
    <div>
      <Form handleQuantity={handleQuantity} handleChange={handleChange} handleSubmit={handleSubmit} />
      <List items={items} />
    </div>
  );
};

export default ShoppingList;