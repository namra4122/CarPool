import express from 'express';

const router = express.Router();

import { 
    suggestionCreation,
    getAllSuggestions
} from "../controller/suggestion.control.js";

router.route('/suggestionCreation').post(suggestionCreation);
router.route('/getAllSuggestions').get(getAllSuggestions);

export default router;