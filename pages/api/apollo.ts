import { ApolloServer } from "apollo-server-micro";
import { resolvers } from "../../graphql/resolvers";
import { typeDefs } from "../../graphql/schema";
import Cors from 'micro-cors';

const cors = Cors();

const server = new ApolloServer({typeDefs,resolvers});

const startServer = server.start();

export default cors(async function handler(req:any,res:any){
    if(req.method === 'OPTIONS'){
        res.end();
        return false;
    }
    await startServer;

    await server.createHandler({
        // path: 'https://v-lollipop.vercel.app/api/apollo',
        path: '/api/apollo',
        // path: `${process.env.VERCEL_URL}/api/apollo`,
    })(req,res);
});

export const config = {
    api:{
        bodyParser: false,
    }
}