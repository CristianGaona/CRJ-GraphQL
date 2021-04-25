import  AuthUsers from "#root/adapters/AuthUsers"

const authUserResolver = async (obj, {input}) =>{
    const {email, password} = input;

    const userSession = await AuthUsers.authUser({email, password});

    return {
        token: userSession
    }
};

export default authUserResolver;