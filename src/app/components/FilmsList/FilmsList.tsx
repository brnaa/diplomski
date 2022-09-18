import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './FilmsList.css'

interface FilmsListProps {
  films: any[]
}

const FilmsList: React.FC<FilmsListProps> = ({ films }) => {
  const checkJson = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="films">
      { 
        films.map((el, index) => {
          return (
            <Card sx={{ maxWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Naziv Filma
                </Typography>
                <Typography variant="h5" component="div">
                  {el.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {el.original_title}
                </Typography>
                <Typography variant="body2">
                  {el.description.substring(0, 80)}
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => { checkJson(el.url) }} size="small">Pogledaj JSON</Button>
              </CardActions>
            </Card>
            // <div key={index}>
            //   <a href={el.url} target="_blank">Naziv: {el.title}</a>
            //   <p>Originalni Naziv: {el.original_title}</p>
            //   <p>Datum Objavljivanja: {el.release_date}</p>
            //   <p>Opis: {el.description}</p>
            // </div>
          )
        })
      }
    </div >
  );
};

export default FilmsList;