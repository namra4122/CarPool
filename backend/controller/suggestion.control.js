import zod from 'zod'
import { Suggestion } from '../models/suggestion.model.js'
import axios from 'axios'

const createSuggestionValidation = zod.object({
    title: zod.string().min(1), //kuch toh name hoga
    username: zod.string().min(1), //kuch toh name hoga
    issue: zod.string().min(15),
})

const suggestionCreation = async (req, res) => {

    if(!createSuggestionValidation.safeParse(req.body).success){
        res.status(411).json({
            error: "Invalid User Input"
        })
        return;
    }
    const { title,issue,username }  = req.body;

    try{
        const empId = await axios.get(`http://localhost:3000/api/emp/getEmployee?username=${username}`) //getDriver Detailsaas
        await Suggestion.create({
            title: title,
            issue: issue,
            emp_id: empId.data.data[0]._id
        })
        
    }catch(error){
        res.status(500).json({
            msg: "Error creating user issue ticket",
            error: error
        });
    }

    res.status(200).json({
        msg: "Issue Registered Created"
    });

}

const getAllSuggestions = async (req, res) => {
    try{
        const suggestData = await Suggestion.find();
        res.status(200).json({
            msg: "All suggestion Fetched",
            data: suggestData
        });
    }catch(error){
        res.status(500).json({
            msg: "Error fetching suggestion data",
            error: error
        });
    }
}

export{
    suggestionCreation,
    getAllSuggestions
}