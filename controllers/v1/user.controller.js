const user = require("../../models/v1/user.model");
const address = require("../../models/v1/address.model");
const profile = require("../../models/v1/profile.model");


async function createUser(req, res) {
    try {
        const { 
            name, 
            email, 
            password, 
            phone, 
            birth_date, 
            birth_place, 
            gender, 
            identity_number, 
            identity_type ,
            street,
            post_code,
            village,
            district,
            city,
            province
        } = req.body;
        const newUser = await user.createUser(name, email, password, phone);         
        const userId = newUser.id;
        const newProfile = await profile.createProfile(birth_date, birth_place, gender, identity_number, identity_type, userId);
        const newAddress = await address.createAddress(street, post_code, village, district, city, province, userId);
        const data = {
            user: newUser,
            profile: newProfile,
            address: newAddress
        }
        res.status(201).json(data); 
    }catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function getAllUsers(req,res){
    try{
        const users = await user.getAllUsers();           
        const data = {
            users,                 
        }   
        return res.status(200).json(data);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getOneUser(req, res) {
    try{
        const id = req.params.id;

        const userData = await user.getOneUser(id);           
        const data = {
            user: userData,                 
        }   
        return res.status(200).json(data);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function updateUser(req, res) {
    try{
        const user_id = req.params.id;
        
        const { 
            name, 
            email, 
            password, 
            phone, 
            birth_date, 
            birth_place, 
            gender, 
            identity_number, 
            identity_type ,
            street,
            post_code,
            village,
            district,
            city,
            province
        } = req.body;       
        
        const userData = await user.updateUser(user_id, name, email, password, phone);
        const profileData = await profile.updateProfile(user_id, birth_date, birth_place, gender, identity_number, identity_type);
        const addressData = await address.updateAddress(user_id, street, post_code, village, district, city, province);
        
        const data = {
            userData,
            profileData,
            addressData
        }
        return res.status(200).json({message: "User updated successfully", data});
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function deleteUser(req, res) {
    try{
        const user_id = req.params.id;
        await user.deleteUser(user_id);       
        return res.status(200).json({message: "User deleted successfully"});
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}