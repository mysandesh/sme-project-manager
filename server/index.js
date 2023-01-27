//Our Entry Point

//Create a simple Express Server
const express = require("express");
require("dotenv").config();

//Bring in GraphQL HTTP
const { graphqlHTTP } = require("express-graphql");

const port = process.env.PORT || 3000;

const app = express();

app.listen(port, console.log(`Server running on port ${port}`));
