import zod from 'zod'
import { Route } from '../models/route.model.js'

const createRouteValidation = zod.object({
    destination: zod.string().min(1), //kuch toh name hoga
    startingPoint: zod.string().min(1), //kuch toh name hoga
})

const routeRegister = async (req, res) => {

    if(!createRouteValidation.safeParse(req.body).success){
        res.status(411).json({
            error: "Invalid User Input"
        })
        return;
    }
    const { destination,startingPoint } = req.body;

    try{
        await Route.create({
            destination: destination,
            startingPoint: startingPoint,
            serviceAvability: true
        })
    }catch(error){
        res.status(500).json({
            msg: "Error creating Driver data",
            error: error
        });
    }

    res.status(200).json({
        msg: "Route Created"
    });

}

const getAllRoute = async (req, res) => {
    try{
        const routeData = await Route.find();
        res.status(200).json({
            msg: "Route Detail Fetched",
            data: routeData
        });
    }catch(error){
        res.status(500).json({
            msg: "Error fetching Route data",
            error: error
        });
    }
}

const getAvailRoute = async (req, res) => {
    try{
        const routeData = await Route.find({
            serviceAvability:true
        });

        res.status(200).json({
            msg: "Available Route Details",
            data: routeData
        });
    }catch(error){
        res.status(500).json({
            msg: "Error fetching Route data",
            error: error
        });
    }
}

export {
    routeRegister,
    getAllRoute,
    getAvailRoute
    
}