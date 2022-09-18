import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyItem } from '../../features/basketSlice';
import type { RootState } from '../../store'
import './List.css'
import { Item } from '../../features/basketSlice'
import ListItem from './Item/ListItem';

interface ListProps {
  items: Item[]
}

const List: React.FC<ListProps> = ({ items }) => {
  const dispatch = useDispatch()
  const confirmPurchase = (index: number) => {
    dispatch(buyItem(index))
  }
  return (
    <div className='center'>
      <div className='items-list'>
        {
          items.map((item, index) => {
            return (
              <ListItem key={index} item={item} index={index} action={confirmPurchase} />
              // <li key={index}>
              //   <p className={`${item.bought ? 'text-green strike-through' : ''}`}>{item.name} - {item.quant} <button onClick={() => { confirmPurchase(index) }}> X </button></p>
              // </li>
            )
          })
        }
      </div></div>
  );
};

export default List;