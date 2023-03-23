import express from 'express';
import Boards from '../models/boards.js';
import mongoose from 'mongoose';

const router = express.Router()

router.get('/',  async(req, res) => {
    const foundBoards = await Boards.find()
    return res.json({foundBoards})
})
export default router