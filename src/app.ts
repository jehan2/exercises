import express from 'express';
import movieRouter from './routes/movie.router'
import studentRouter from './routes/student.router'
import bankRouter from './routes/bank.router'
import { z } from 'zod';
const app = express();

app.use(express.json());

app.use('/api/v1/movie', movieRouter);
app.use('/api/v1/student', studentRouter);
app.use('/api/v1/bank', bankRouter);


const PORT =5000;
app.listen(PORT, ()=>{
     console.log(`server listeng on port ${PORT}`)
});