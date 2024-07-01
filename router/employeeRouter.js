const express =require('express');
const router=express.Router();
const employeeController=require('../controllers/employeeControllers');
const Employee=require('../models/Employee');


router.post('/addEmployee',employeeController.createEmployee)
router.get('/allemployees',employeeController.getEmployee)
router.get('/employee/:id',employeeController.singleEmployee)
router.put('/updateemployee/:id',employeeController.updateEmployee)
router.delete('/deletemployee/:id',employeeController.deleteEmployee)
module.exports = router