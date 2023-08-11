import express from 'express'
import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config();

const router = express.Router();

// Configure the use of the DALL-E API
// get your key from https://platform.openai.com/account/api-keys 
// Need active subscription to use their api
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

// utilize the config and merge it witht he instance of the OpenAI API
const openai = new OpenAIApi(configuration);

// create a demo get route
router.route('/').get((req,res) => {
    res.status(200).json({ openai });
    //res.status(200).json({message: `Hello from DALL.E ROUTES`})
})

// route to pass the prompt from the front-end to the server
router.route('/').post(async (req, res) => {
    try {
        // get the prompt from the front-end
        const { prompt } = req.body;
  
        const response = await openai.createImage({
            prompt,                         // the prompt from the front-end
            n: 1,                           // number of images
            size: '1024x1024',              // size by width and height
            response_format: 'b64_json'     // format it to base64 like how we read the image from ReadFile()
        });
    
        // get the image in base64 format
        //const image = response.data.data[0].b64_json;

        const image = response.data.data[0].b64_json;

        // pass it back to the fron-end
        res.status(200).json({ photo: image });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" })
    }
})


export default router;
