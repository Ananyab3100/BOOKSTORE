import express from "express" ;
import {PORT , mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import { Book } from "./models/bookModel.js";
import  cors from 'cors';


const app = express();

//middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
//Option 1 : Allow All origins with default  of cors(*)
app.use(cors());

//Option 2 :  Allow Custom Origin




app.get('/' ,(req,res) =>{
    console.log(req);
    return res.status(234).send('Welcome to MERN stack Tutorial!')
})

app.listen(PORT, ()=>{
    console.log(`App is listening to port : ${PORT}`);
});

app.use('/books' ,booksRoute);


mongoose.connect(mongoDBURL)
.then(() =>{
console.log('Connected to database')
})
.catch((error) => {
    console.error(error);
});


