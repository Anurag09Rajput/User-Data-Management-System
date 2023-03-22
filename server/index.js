
import express from "express";
import Routes from './routes/route.js';
import Connection from "./database/db.js";
import cors from'cors';
import bodyParser from "body-parser";




const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',Routes);


Connection();

const PORT = 8000;
app.listen(PORT, ()=>console.log(`Server is runnung successfully on PORT ${8000}`))
