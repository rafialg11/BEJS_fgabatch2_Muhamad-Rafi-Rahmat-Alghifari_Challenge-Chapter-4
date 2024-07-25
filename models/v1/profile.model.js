const prisma = require("../../config/prisma");

async function createProfile(birth_date, birth_place, gender, identity_number, identity_type, user_id) {
    try{
        const profile = await prisma.profile.create({
            data:{
                birth_date,
                birth_place,
                gender,
                identity_number,
                identity_type,
                user_id
            },
        });        
        return profile;
    }catch (error) {
        throw error;
    }
}


module.exports = {
    createProfile    
}