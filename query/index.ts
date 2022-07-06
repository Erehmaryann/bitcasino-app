import { gql } from "@apollo/client";

export const QUERY_ALL_PRICES = gql `
    query GetAllPrices($coinCode: String!){
        markets(filter: {baseSymbol: {_eq: $coinCode}, quoteSymbol: {_eq: "EUR"}}){
            marketSymbol
            ticker {
                lastPrice
            }
        }
    }
`;