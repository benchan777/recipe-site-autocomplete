import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import express from 'express';
import mongoose from 'mongoose';
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();

const cors = require('cors');
const corsOptions = {
	origin: '*',
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};

const startServer = async () => {
	const app = express();
	const PORT = 4000;

	// Connect to mongodb
	await mongoose.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	app.use(cors(corsOptions));
	app.use(
		'/graphqlapi',
		graphqlHTTP({
			schema: typeDefs,
			rootValue: resolvers,
			graphiql: true,
		})
	);

	app.listen({ port: PORT }, () => {
		console.log(`Server running on port ${PORT}`);
	});
};

// Start server
startServer();
