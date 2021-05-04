import got from "got";

const USER_SERVICE_URI = "http://localhost:8080/api/v1";

export default class UserService{
    
    static async fetchUser(){
        const body = await got.get(`${USER_SERVICE_URI}/users`).json();

        return body.users;
    }


    static async getUserById(uid_user){
        const body = await got.get(`${USER_SERVICE_URI}/users/${uid_user}`).json();

        return body.user;
    }


    static async deleteUserById(uid_user){
        const body = await got.delete(`${USER_SERVICE_URI}/users/${uid_user}`).json();

        return body;
    }
}






