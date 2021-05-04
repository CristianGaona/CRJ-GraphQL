import UserService from '#root/adapters/UserService';

const deleteUserResolver = async (ob, {uid}, ctx)=>{
    console.log(uid)
    const deleteUser = await UserService.deleteUserById(uid)
    return deleteUser
};

export default deleteUserResolver