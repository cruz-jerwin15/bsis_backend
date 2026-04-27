const User = require('../models/userModel');

// Controller fr get all data
const getAllUsersController = async (req,res)=>{

    try {
        const users = await User.getAllUsersModel();
        res.status(200).json(
            {
                success:true,
                message:"Users fetched successfully",
                data:users
            }
        );
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json(
            {
                success:false,
                message:"Failed to fetch users",
                data:null
            }
        );
    }

}

// Controller for add new data
const addUserController = async (req,res)=>{

    try {
        const {firstname,lastname} = req.body;
        if(!firstname || !lastname){
            return res.status(400).json({
                success:false,
                message:"Firstname and lastname are required",
                data:null
            })
        }
        const data = await User.addUserModel({firstname,lastname});
        res.status(201).json(
            {
                success:true,
                message:"User added successfully",
                data:data
            }
        );
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json(
            {
                success:false,
                message:"Failed to add new user",
                data:null
            }
        );
    }

}


module.exports={
    getAllUsersController,
    addUserController
}