import express from 'express';

const router = express.Router();

import { 
    
} from "";

router.route('/register').post();
router.route('/login').post();

//securedRoutes
router.route('/logout').post();
router.route('/refreshToken').post();
router.route('/changePassword').post();
router.route('/getUser').get();
router.route('/getStudent').get();
router.route('/getFaculty').get();

export default router;