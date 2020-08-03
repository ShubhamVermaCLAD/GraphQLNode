const mongoose = require('mongoose');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const dotenv = require('dotenv');
const schema = require('./schema/schema');

// creating app 
const app = express();

// Add process.env
dotenv.config();
// Port 
const port=process.env.port | 3000
// connsect to mongoDB 
mongoose.connect(process.env.DB_CONNECT,  { useNewUrlParser: true, useUnifiedTopology: true },()=>console.log("Connect to Mongodb"));

// configure graphQL to express
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port,()=>console.log(`Server is running on ${port}: http://localhost:3000`));
