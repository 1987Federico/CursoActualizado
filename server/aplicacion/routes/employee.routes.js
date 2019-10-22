const express=require('express');
const router=express.Router();
const employee=require('../controllers/employee.controllers');


router.get('/',employee.getEmployees);

router.post('/',employee.createEmployees);

router.get('/:salary',employee.getEmployees)

router.get('/:id',employee.getIdEmployees);

router.put('/:id',employee.updateEmployees);

router.delete('/:id',employee.deleteEmployees);

module.exports=router;