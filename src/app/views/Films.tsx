import React, { useEffect, useState } from 'react';
import { getFilms } from '../api/films';
import FilmsList from '../components/FilmsList/FilmsList';

interface FilmsProps {

}

const Films: React.FC<FilmsProps> = () => {
  useEffect(() => {
    getFilms()
    .then(res => {
      setFilms(res.data)
    })
  }, []);
  const [films, setFilms] = useState<any[]>([]);
  return (
    <div className="text-white">
      <h4>Primjer konzumacije API endpointa Ghibli filmova (free API) uz pomoc AXIOS biblioteke.</h4>
      <FilmsList films={films} />
    </div>
  );
};

export default Films;