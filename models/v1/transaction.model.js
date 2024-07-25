const prisma = require("../../config/prisma");

async function createTransaction(amount, date, sender_account_id, receiver_account_id, description, transfer_purpose) {
    try{
        const transaction = await prisma.transaction.create({
            data:{
                amount,
                date,
                sender_account_id,
                receiver_account_id,
                description,
                transfer_purpose
            },
        });        
        return transaction;
    }catch (error) {
        throw error;
    }
}

module.exports = {
    createTransaction
}