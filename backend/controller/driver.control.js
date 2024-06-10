import zod from 'zod'
import { Driver } from '../models/driver.model.js'

const createDriverValidation = zod.object({
    name: zod.string().min(1), // kuch toh name hoga
    contact: zod.string().min(10), //+91 1234567890
    vehicle: zod.string().min(1), //AA 00 AA 0000
})

const getDriverValidation = zod.string().min(1);

const getVehicleValidation = zod.string().min(1);

const driverRegister = async (req, res) => {
    //zod validation
    //get details
    //account already?
    //create user
    //check user created
    //return res
    console.log(req.body);
    if(!createDriverValidation.safeParse(req.body).success){
        res.status(411).json({
            error: "Invalid User Input"
        })
        return;
    }
    const { name, contact, vehicle } = req.body;

    const alrContactData = await Driver.find({contact: contact});
    const alrVehicleData = await Driver.find({vehicle: vehicle});
    
    if(alrContactData.length != 0){
        res.status(411).json({
            error: "This contact number is already in use"
        })
        return;
    }

    if(alrVehicleData.length != 0){
        res.status(411).json({
            error: "This Vehicle is already listed"
        })
        return;
    }

    try{
        await Driver.create({
            name: name,
            contact: contact,
            vehicle: vehicle,
            verified: true
        })
    }catch(error){
        res.status(500).json({
            msg: "Error creating Driver data",
            error: error
        });
    }

    res.status(200).json({
        msg: "Driver Deatils Created "
    });

}

const getAllDriver = async (req, res) => {
    try{
        const driverData = await Driver.find();
        res.status(200).json({
            msg: "Driver Deatils Fetched",
            data: driverData
        });
    }catch(error){
        res.status(500).json({
            msg: "Error fetching Driver data",
            error: error
        });
    }
}

const getDriver = async (req, res) => {
    if(!getDriverValidation.safeParse(req.query.driverName).success){
        res.status(411).json({
            error: "Invalid User Input"
        })
        return;
    }

    const driverName = req.query.driverName;
    
    try{
        const driverData = await Driver.find({
            name:driverName
        });

        res.status(200).json({
            msg: "Driver Deatils Created",
            data: driverData
        });
    }catch(error){
        res.status(500).json({
            msg: "Error fetching Driver data",
            error: error
        });
    }
}

const getVehicle = async (req, res) => {
    if(!getVehicleValidation.safeParse(req.query.vehicleNumber).success){
        res.status(411).json({
            error: "Invalid User Input"
        })
        return;
    }

    const vehicleNumber = req.query.vehicleNumber;
    
    try{
        const vehicleData = await Driver.find({
            vehicle: vehicleNumber
        });

        res.status(200).json({
            msg: "Vehicle Deatils",
            data: vehicleData
        });
    }catch(error){
        res.status(500).json({
            msg: "Error fetching Vehicle data",
            error: error
        });
    }
}

export {
    driverRegister,
    getAllDriver,
    getDriver,
    getVehicle
}