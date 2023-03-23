import express from 'express';
import mongoose from 'mongoose';

const app = express()
app.use(express.static('public'))


app.listen('8008', () => {
    console.log('server running')
})