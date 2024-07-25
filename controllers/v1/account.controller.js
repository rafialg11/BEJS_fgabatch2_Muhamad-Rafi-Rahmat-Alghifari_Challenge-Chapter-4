const account = require("../../models/v1/account.model");

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
        const newAccount = await account.createAccount(bank_name, account_number, account_type, pin, balance, user_id);
        const data = {
            account: newAccount
        }
        res.status(201).json(data); 
    }catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createAccount
}