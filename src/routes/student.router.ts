import express from 'express';
import validate from '../middleware/validate';

import {
  studentSchema,
  StudentSchemaType,
} from '../zod_schema/student.schema'
const router = express.Router();

let students : StudentSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.status(200).json(students);
});

router.post('/', validate(studentSchema), (req, res, next) => {
  const newstudent = req.body as  StudentSchemaType;

  students.push(newstudent);
  return res.status(201).json({ message: ' Added !' });
});

router.put('/:id',validate(studentSchema), (req, res) => {
  const upst = req.body as StudentSchemaType;
  const { id } = req.params;

  const updatestudent = students.filter((i) => {
    return i.id !== id;
  });

  updatestudent .push(upst);

  students = updatestudent;

  return res.json({
    message: ' Updated !',
  });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const del = students.filter((i) => {
      return i.id !== id ;
    });
  
    students = del;
    return res.json({
      message: ' Deleted !',
    });
});

router.get('/search/:id', (req, res)=>{
  const {id} = req.params;
  const searcharr = students.filter((ser)=>{
   if (ser.major === id){
    return ser
   }
  })
return res.json(searcharr)
})

export default router;