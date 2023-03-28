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
    return res.json(clipboards)
})

router.post('/board-create', async(req, res) => {
    const createBoard = await Boards.create(req.body)
    res.redirect('/')
})

router.post('/clipboard-create', async(req, res) => {
    console.log(req.body)
    const clipboards = await Clipboard.find().populate<{tasks: tasks[]}>('tasks').orFail()
    const Taskz = await Tasks.create(req.body)
    console.log(Taskz)
    await clipboards[0].tasks.push(Taskz.id);
    clipboards[0].save()
    res.redirect('/:id')
})

router.post('/clipboard-move', async(req, res) => {
    console.log(req.body.parentId)
    const prevClipboard = await Clipboard.findById(req.body.parentId).populate<{tasks: tasks[]}>('tasks').orFail()
    const clipboard = await Clipboard.findById(req.body.clipboardId).populate<{tasks: tasks[]}>('tasks').orFail()
    const tazk = await Tasks.findById(req.body.taskId).orFail()
    await clipboard.tasks.push(tazk.id)
    await prevClipboard.tasks.forEach((item, index) => {
        if(item.id === tazk.id) {
            prevClipboard.tasks.splice(index, index + 1)
        }
        return 
    })
    clipboard.save()
    prevClipboard.save()
    res.redirect('/:id')
})

export default router