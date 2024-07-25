const account = require("../../models/v1/account.model");
const user = require("../../models/v1/user.model");

async function createAccount(req, res) {
    try {
        const { 
            bank_name, 
            account_number, 
            account_type, 
            pin, 
            balance, 
            user_id
        } = req.body;
        if(!bank_name || !account_number || !account_type || !pin || !user_id) 
        { 
            return res.status(400).json({message: "Please provide all required details"});
        }                
        
        const findUser = await user.getOneUser(user_id);
        if(!findUser) return res.status(400).json({message: "User not found"});

        const newAccount = await account.createAccount(bank_name, account_number, account_type, pin, balance, user_id);
        const data = {
            account: newAccount
        }
        res.status(201).json(data); 
    }catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function getAllAccounts(req, res) {
    try{
        const accounts = await account.getAllAccounts();           
        const data = {
            accounts,                 
        }   
        return res.status(200).json(data);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getOneAccount(req, res) {
    try{
        const id = req.params.id;
        
        if(!id) return res.status(400).json({message: "Please provide account id"});
        
        const accountData = await account.getOneAccount(id);           
        const data = {
            account: accountData,                 
        }   
        return res.status(200).json(data);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function changePin(req, res) {
    try{
        const id = req.params.id;
        const { pin } = req.body;
        if(!id) return res.status(400).json({message: "Please provide account id"});
        if(!pin) return res.status(400).json({message: "Please provide pin"});
        
        await account.changePin(id, pin);           
         
        return res.status(200).json({message: "Pin changed successfully"});
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function deleteAccount(req, res) {
    try{
        const id=req.params.id;
        if(!id) return res.status(400).json({message: "Please provide account id"});

        const findAccount = await account.getOneAccount(id);
        if(!findAccount) return res.status(404).json({message: "Account not found"});

        await account.deleteAccount(id);

        return res.status(200).json({message: "Account deleted successfully"});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createAccount,
    getAllAccounts,
    getOneAccount,
    changePin,
    deleteAccount
}