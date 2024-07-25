const prisma = require("../../config/prisma");

async function createAddress(street, post_code, village, district, city, province, user_id) {
    try{
        const address = await prisma.address.create({
            data:{
                street,
                post_code,
                village,
                district,
                city,
                province,
                user_id
            },
        });        
        return address;
    }catch (error) {
        throw error;
    }
}


module.exports = {
    createAddress 
}