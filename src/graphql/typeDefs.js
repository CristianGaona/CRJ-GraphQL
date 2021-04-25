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
    }
    type Mutation {
        authUser(input: AuthUserInput ): Token
    }

`
export default typeDefs