import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Item as ItemInterface } from '../../../features/basketSlice'
import './ListItem.css'
import { images } from './items'

interface ItemProps {
  item: ItemInterface
  index: number
  action?: any
}

const Item: React.FC<ItemProps> = ({ item, index, action }) => {
  useEffect(() => {
    images.forEach(el => {
      if (item.name === el.name) { setImg(el.img) }
    })
  }, []);
  const [img, setImg] = useState<string>('');
  //@ts-ignore
  return (
    <div onClick={() => { action(index) }} className={`item shadow ${item.bought ? 'bought' : ''}`} key={index}>
      {/* <p className={`${item.bought ? 'text-green strike-through' : ''}`}>{item.name} - {item.quant} <button onClick={() => { action(index) }}> X </button></p> */}
      <div className='item-left'>
        {
          img === '' ? <CircularProgress style={{ marginTop: '13px' }} size={25} thickness={4} color="secondary" /> : <img src={img} className="item-img" />
        }
        <p className="item-name">{item.name}</p>
      </div>
      <p className="item-quant">Kom. {item.quant}</p>
      <div className="item-btn"> {!item.bought ? 'Kupljeno?' : 'Kupljeno ✔'} </div>
    </div>
  );
};

export default Item;