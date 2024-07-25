const transaction = require("../../models/v1/transaction.model");
const account = require("../../models/v1/account.model");

async function createTransaction(req, res) {
    try{
        const { 
            amount,              
            sender_account_id, 
            receiver_account_id, 
            description, 
            transfer_purpose
        } = req.body;
        const date = new Date();
        if(!amount || !sender_account_id || !receiver_account_id) 
        { 
            return res.status(400).json({message: "Please provide all required details"});
        }                
        
        const senderAccount = await account.getOneAccount(sender_account_id);
        if(!senderAccount) return res.status(400).json({message: "Sender account not found"});

        const receiverAccount = await account.getOneAccount(receiver_account_id);
        if(!receiverAccount) return res.status(400).json({message: "Receiver account not found"});
        
        const newTransaction = await transaction.createTransaction(amount, date, sender_account_id, receiver_account_id, description, transfer_purpose);
        
        const senderBalance = senderAccount.balance - amount;
        
        if(senderBalance<0) 
        {
            return res.status(400).json({message: "Insufficient balance"});
        }
        const receiverBalance = receiverAccount.balance + amount;
        
        await account.updateBalance(sender_account_id, senderBalance);
        await account.updateBalance(receiver_account_id, receiverBalance);
        
        const data = {
            transaction: newTransaction
        }
        res.status(201).json(data);
    }catch(error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createTransaction
}