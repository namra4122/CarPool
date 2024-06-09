import express from 'express';

const router = express.Router();

import { 
    employeeRegister,
    getAllEmployee,
    getEmployee
} from "../controller/employee.control.js";

router.route('/employeeRegister').post(employeeRegister);
router.route('/getAllEmployee').get(getAllEmployee,);
router.route('/getEmployee').get(getEmployee);

export default router;