import express from 'express';
import validate from '../middleware/validate';

import {
  bankSchema,
  BankSchemaType,
} from '../zod_schema/bank.schema'
const router = express.Router();

let Customer : BankSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.status(200).json(Customer);
});

router.post('/', validate(bankSchema), (req, res, next) => {
  const newCustomer = req.body as  BankSchemaType;

  Customer.push(newCustomer);
  return res.status(201).json({ message: ' Added !' });
});

router.put('/:id',validate(bankSchema), (req, res) => {
  const upcs = req.body as BankSchemaType;
  const { id } = req.params;

  const updateCustomer = Customer.filter((i) => {
    return i.id !== id;
  });

  updateCustomer .push(upcs);

  Customer = updateCustomer;

  return res.json({
    message: ' Updated !',
  });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const del = Customer.filter((i) => {
      return i.id !== id ;
    });
  
    Customer = del;
    return res.json({
      message: ' Deleted !',
    });
});

export default router;