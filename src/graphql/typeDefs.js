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

    type Producto {
        id: ID!
        nombre: String!
        descripcion: String!
        precio: Float!
        existencia: Int!
    }

    input AuthUserInput {
        email: String!
        password: String!
    }

    #Queries and mutations

    type Query {
        user: [User!]!
        getproducts:[Producto]!
    }

    type Mutation {
        authUser(input: AuthUserInput ): Token
    }

`
export default typeDefs