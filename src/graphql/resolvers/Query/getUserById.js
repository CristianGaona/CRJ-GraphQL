import UserService from '#root/adapters/UserService';

const getUserByIdResolver = async(obj, {uid}, ctx)=>{
    const uid_user = uid
    console.log(uid_user)
    return await UserService.getUserById(uid_user);
};

export default getUserByIdResolver;