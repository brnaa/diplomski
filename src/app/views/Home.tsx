import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../images/learn.svg'

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className='home'>
      <p className='home-text'>Cao! Lazar ovdje,<br /> Ovaj projekat sluzi kako bi predstavio moje dosadasnje znanje, kroz najbitnije djelove TypeScripta, JavaScripta i React Biblioteke za iste.</p>
      <img className='home-img' src={hero} alt="" />
    </div>
  );
};

export default Home;