import { AuthenticationError } from "apollo-server-errors";
import got from "got";

const AUTH_SERVICE_URI = "https://app-users-microservice.herokuapp.com/api/v1/auth";

export default class AuthUser{
    static async authUser ({email, password}){
        const body = await got.post(`${AUTH_SERVICE_URI}/login`,{
            json: {email, password}
        }).json();

        const {error_description, token} = await body;
        if(error_description) throw new AuthenticationError(error_description);
        return token;

    }
}