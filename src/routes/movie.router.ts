import express from 'express';
import validate from '../middleware/validate';

import {
  movieSchema,
  MovieSchemaType,
} from '../zod_schema/movie.schema';

const router = express.Router();

let movies : MovieSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.status(200).json(movies);
});

router.post('/', validate(movieSchema), (req, res, next) => {
  const newmovie = req.body as  MovieSchemaType;

  movies.push(newmovie);
  return res.status(201).json({ message: ' Added !' });
});

router.put('/:id',validate(movieSchema), (req, res) => {
  const upmovie = req.body as MovieSchemaType;
  const { id } = req.params;

  const updatedmovie = movies.filter((i) => {
    return i.id !== id;
  });

  updatedmovie .push(upmovie);

  movies = updatedmovie;

  return res.json({
    message: ' Updated !',
  });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const del = movies.filter((i) => {
      return i.id !== id ;
    });
  
    movies = del;
    return res.json({
      message: ' Deleted !',
    });
});

router.get('/search/:id', (req, res)=>{
  const {id} = req.params;
  const searcharr = movies.filter((ser)=>{
   if (ser.name === id || ser.genre === id ){
    return ser
   }
  })
return res.json(searcharr)
});
export default router;