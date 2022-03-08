import https from 'https'
import { ApolloClient, InMemoryCache } from '@apollo/client'

const httpsAgent = new https.Agent({ rejectUnauthorized: false })

const client = new ApolloClient({
    uri: "http://pim.local/graphql",
    cache: new InMemoryCache(),
});

export default client;