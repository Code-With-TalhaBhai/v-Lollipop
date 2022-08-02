import { gql } from "apollo-server-micro";

export const typeDefs = gql`

    type linkData {
        id: String
        sender: String
        message: String
        receiver: String
        color: colors
    }
    
    type colors {
        upper: String
        middle: String
        bottom: String
    }


    type Link {
        data: linkData
    }

    input inColors{
        upper: String
        middle: String
        bottom: String
    }

    input InpLink{
        id: String!
        sender: String!
        message: String!
        receiver: String!
        color: inColors
    }

    type Query {
        link(id:ID!): Link
        str: String
    }

    type Mutation {
        getLink(inplink:InpLink): Link
    }
`