import express from 'express'
import dotenv from 'dotenv';
import connection from './Database/db.js';
import DefaultData from './defaultdata.js';
import Router from './routes/route.js'
import cors from 'cors';
import bodyParser from 'body-parser';
const app=express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Router);
const PORT=4500;


const USERNAME= process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

connection(USERNAME,PASSWORD);


app.listen(PORT,()=>{
    console.log(`Server has been started on PORT ${PORT}`)
})
DefaultData();