import express from 'express';

const router = express.Router();

import { 
    routeRegister,
    getAllRoute,
    getAvailRoute
} from "../controller/route.control.js";

router.route('/routeRegister').post(routeRegister);
router.route('/getAllRoute').get(getAllRoute);
router.route('/getAvailRoute').get(getAvailRoute);

export default router;