import express from 'express';
import Boards from '../models/boards.js';
import mongoose from 'mongoose';

const router = express.Router()


router.get('/boards', async(req, res) => {

    const foundBoards = await Boards.find()
    console.log(foundBoards)
    return res.json(foundBoards)
})

router.post('/board-create', async(req, res) => {
    const createBoard = await Boards.create(req.body)
    res.redirect('/')
})

export default router