import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';

import userRoutes from './routes/userRoutes.js'

config();

const app = express();
const PORT = process.env.PORT || 5000;
const db_URI = process.env.db_URI;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next();
})

app.use('/api/auth', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello From server!');
})

const connetDB = async url => {
    await mongoose  
        .connect(url)
        .then(console.log("Database connected"))
        .catch(err => console.log(err));
}

app.listen(PORT, async () => {
    await connetDB(db_URI);
    console.log(`Server Started at port ${PORT}`);
})