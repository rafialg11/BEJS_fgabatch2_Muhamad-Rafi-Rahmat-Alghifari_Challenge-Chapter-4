const prisma = require("../../config/prisma");

async function createAccount(bank_name, account_number, account_type, pin, balance, user_id) {
    try{
        const account = await prisma.account.create({
            data:{
                bank_name,
                account_number,
                account_type,
                pin,
                balance,
                user_id
            },
        });        
        return account;
    }catch (error) {
        throw error;
    }
}

module.exports = {
    createAccount
}