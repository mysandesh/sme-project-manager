//Create a simple Express Server
const express = require("express");
require("dotenv").config();

//Bring in GraphQL HTTP
const { graphqlHTTP } = require("express-graphql");

//Bring in Schema
const schema = require("./schema/schema");

const port = process.env.PORT || 3000;

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
