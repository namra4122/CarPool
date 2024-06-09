import zod from 'zod'
import { Employee } from '../models/employee.model.js'

const createEmployeeValidation = zod.object({
    name: zod.string().min(1), //kuch toh name hoga
    username: zod.string().min(1), //kuch toh name hoga
    address: zod.string().min(10),
})

const getEmployeeValidation = zod.string().min(1);

const employeeRegister = async (req, res) => {

    if(!createEmployeeValidation.safeParse(req.body).success){
        res.status(411).json({
            error: "Invalid User Input"
        })
        return;
    }
    const { name, username, address } = req.body;

    const alrData = await Employee.findOne({username: username});

    if(alrData){
        res.status(411).json({
            error: "This username is already in use"
        })
        return;
    }

    try{
        await Employee.create({
            name: name,
            username: username,
            address: address
        })
    }catch(error){
        res.status(500).json({
            msg: "Error creating Driver data",
            error: error
        });
    }

    res.status(200).json({
        msg: "Employee Deatils Created"
    });

}

const getAllEmployee = async (req, res) => {
    try{
        const empData = await Employee.find();
        res.status(200).json({
            msg: "Employee Deatils Fetched",
            data: empData
        });
    }catch(error){
        res.status(500).json({
            msg: "Error fetching Employee data",
            error: error
        });
    }
}

const getEmployee = async (req, res) => {
    
    if(!getEmployeeValidation.safeParse(req.query.username).success){
        res.status(411).json({
            error: "Invalid User Input"
        })
        return;
    }

    const empUsername = req.query.username;
    
    try{
        const empData = await Employee.find({
            username: empUsername,
        });

        res.status(200).json({
            msg: "Employee Deatils Fetched",
            data: empData
        });
    }catch(error){
        res.status(500).json({
            msg: "Error fetching Employee data",
            error: error
        });
    }
}

export {
    employeeRegister,
    getAllEmployee,
    getEmployee
}