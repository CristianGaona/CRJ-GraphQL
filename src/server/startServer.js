import express from "express";
import accessEnv from "#root/helpers/accessEnv";
import {ApolloServer} from "apollo-server-express";

import typeDefs from "#root/graphql/typeDefs"
import resolvers from "#root/graphql/resolvers"

//require('dotenv').config({path:'../../.env'})
//require('dotenv').config();

const PORT = accessEnv("PORT", 4500)
//const PORT = process.env.PORT

const app = express();

const apolloServer = new ApolloServer({
    resolvers,
    typeDefs
})

apolloServer.applyMiddleware({app, cors: false, path: "/graphql"});

app.listen(PORT, "0.0.0.0", ()=>{
    console.info(`API Gateway listening on ${PORT}`)
})

