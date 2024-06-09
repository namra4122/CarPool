import express from 'express';

const router = express.Router();

import { 
    driverRegister,
    getAllDriver,
    getDriver
} from "../controller/driver.control.js";

router.route('/driverRegister').post(driverRegister);
router.route('/getAllDriver').get(getAllDriver);
router.route('/getDriver').get(getDriver);

export default router;