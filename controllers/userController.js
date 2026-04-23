const User = require('../models/userModel');


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

module.exports={
    getAllUsersController
}