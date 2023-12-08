import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import router from './Routes/index.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
dotenv.config();
app.use(cors());


app.use('/api/v1', router);

mongoose.connect(process.env.MONGO_URL).then(()=>(console.log('database connected')));

app.listen(8000, () => {console.log('Listening on port 8000')});