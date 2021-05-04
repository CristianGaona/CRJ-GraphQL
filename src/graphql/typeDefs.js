import {gql} from "apollo-server"

const typeDefs = gql `

    type User{
        uid: String!
        name: String!
        lastName: String!
        email: String!

    }
    
    type Token {
        token: String!
    }



    input AuthUserInput {
        email: String!
        password: String!
    }


    #Queries and mutations

    type Query {
        user: [User!]!
        getUserById(uid:String): User!
    }
    type Mutation {
        authUser(input: AuthUserInput ): Token
        deleteUser(uid: String) : String
    }

`
export default typeDefs