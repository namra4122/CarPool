import express from 'express';

const router = express.Router();

import { 
    driverRegister,
    getAllDriver,
    getDriver,
    getVehicle
} from "../controller/driver.control.js";

router.route('/driverRegister').post(driverRegister);
router.route('/getAllDriver').get(getAllDriver);
router.route('/getDriver').get(getDriver);
router.route('/getVehicle').get(getVehicle);

export default router;