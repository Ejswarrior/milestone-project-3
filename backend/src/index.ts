import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import  {config}  from 'dotenv';
import router from './controllers/home.js'
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express()
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
}
const processEnv = config().parsed


app.use(express.static('public'))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/home', router)



mongoose.connect(processEnv.MONGO_URI as string, {useNewUrlParser: true, useUnifiedTopology: true} as ConnectOptions)

app.listen(processEnv.PORT, () => {
    console.log('server running')
})