import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from './src/routes/authRoutes.js';
dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express()

app.use(express.json())

app.use(cors());

app.get('/', (req,res) =>{
    return res.send("Hello here is your server")
});

app.use("/api/auth", authRoutes);

const server = http.createServer(app);

mongoose
.connect('mongodb+srv://tonyshawm:1994shao@cluster0.wes8cj5.mongodb.net/main?retryWrites=true&w=majority')
.then(() => {
    server.listen(PORT,() => {
        console.log(`Server is listening on port ${PORT}`);
    });
}).catch(err => {
    console.log('Database connection failed. Server not started');
    console.log(err);
});

