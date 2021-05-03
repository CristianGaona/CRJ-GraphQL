import { gql } from "apollo-server"

const typeDefs = gql `

    type User{
        uid: String!
        name: String!
        lastName: String!
        email: String!

    }

    type Client{
    id: String!
    dni: String!
    nombre: String!
    apellido: String!
    direccion: String!
    correo: String!
    vendedor_id: String!
    creado: String!
}
    
    type Token {
        token: String!
    }

    input AuthUserInput {
        email: String!
        password: String!
    }

    #Cliente para crear
    input sendClient{
        dni: String!
        nombre: String!
        apellido: String!
        direccion: String!
        correo: String!
    }

    #Cliente para modificar
    input sendClientUpdate{
        id: String!
        dni: String!
        nombre: String!
        apellido: String!
        direccion: String!
        correo: String!
    }

    #Queries and mutations

    type Query {
        user: [User!]!

        # Return all clients
        allClients: [Client]

        # Return a single client given it's id (without dependence on the seller)
        getClientById(id: String!): Client

        #Return all clients of a seller
        getClientsBySeller(id: String!):[Client]
    }

    type Mutation {
        authUser(input: AuthUserInput ): Token

        #Create a new Client
        saveClient(input:sendClient): Client

        #Update Client
        updateClient(input:sendClientUpdate): Client

        #Delete Client
        deleteClientById(id: String!):String
    }

`
export default typeDefs