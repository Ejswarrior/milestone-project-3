import express from 'express';
import Boards from '../models/boards.js';
import Clipboard from '../models/clipboard.js';
import Tasks, {tasks} from '../models/tasks.js';
import mongoose from 'mongoose';

const router = express.Router()


router.get('/boards', async(req, res) => {

    const foundBoards = await Boards.find()
    return res.json(foundBoards)
})

router.get('/:id', async(req, res) => {
    const clipboards = await Clipboard.find().populate<{tasks: tasks[]}>('tasks').orFail()
    const Task = await Tasks.find().orFail()
    clipboards.map((item, index) => {
        item.tasks.push(Task[index])
    })
    console.log(clipboards)
    return res.json(clipboards)
})

router.post('/board-create', async(req, res) => {
    const createBoard = await Boards.create(req.body)
    res.redirect('/')
})

router.post('/clipboard-create', async(req, res) => {
    const tasks = await Tasks.create(req.body)
    console.log(tasks)
    res.redirect('/')
})

export default router