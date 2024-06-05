import express from 'express';
import cors from 'cors';


const app = express();

app.use(express.json());  // COnvert all reqs coming to server to json

app.use(cors({origin: "*"})); // Client can now talk to any server without any security issues

const PORT = process.env.PORT || 3007;

app.get('/', (req, res) =>{
        res.send("Hello World");     // TEsting end point
})

app.post('/generate', async(req, res) => {
        const {queryDescription} = req.body;   // Destructuring body of queryDescription
        console.log(queryDescription);    // Log the response given by client

        res.json({answer : "The answer goes here"})  // Send back some simple json with answer (Will be replaced by openAI answer)
})

app.listen(PORT, () =>{
        console.log(`server listening on port ${PORT}`);
})