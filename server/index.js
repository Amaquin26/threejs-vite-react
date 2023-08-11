/*

For server

To generate all the files and folders (packet JSON) run this npm command 
npm init -y

Go to server>package.json and then inside the scripts object
remove the test property and replace with "start": "nodemon index"
This will result to just going to keep this index file running so 
it looks into all of the changes

Add "type" : "module" to the package.json ( could be after the version )
This allow us to use the modern import syntax like in react

Now install the dependency of our server run this npm command
npm install cloudinary cors dotenv express mongoose nodemon openai

cloudinary = for saving images
cors = Allow Cross-Origin Request
dotenv = for storing environment variables
express = backend
mongoose = database
nodemon = speedy development
openai = for the ai prompts


run server by using (make sure u are in the server directory)
npm start

*/

import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';;

import dalleRoutes from './routes/dalle.routes.js';

// NOTE: We are in node here so always include .js file extention for js files

dotenv.config(); // setup environment variables

const app = express(); // set up the express application
app.use(cors()); // setup the middleware so we wont have problems with cross-origin 
app.use(express.json({ limig: "50mb" })) // specify the weight of the payload that we can send

// consume the route as a middleware
app.use("/api/v1/dalle", dalleRoutes);

// demo route
app.get('/', (req,res) => {
    res.status(200).json({message: "Hello From DALL.E"})
}) 

// listen on this port (This is important because this host our server)
app.listen(8080, () => console.log('Server has started on port 8080'))