import User from '../models/userModel';

export const getUserById = async (id:number|string) => {
    const user = await User.findById(id);
    if(!user){
        throw new Error("User not Found");
    }
    return user;
};