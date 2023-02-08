//Create a simple Express Server
const express = require("express");

//Bring in colors
const colors = require("colors");

//Setting up Cors
const cors = require("cors");

require("dotenv").config();

//Bring in GraphQL HTTP
const { graphqlHTTP } = require("express-graphql");

//Bring in Schema
const schema = require("./schema/schema");

const connectDB = require("./config/db");

const port = process.env.PORT || 3000;

const app = express();

//Connect to database
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
