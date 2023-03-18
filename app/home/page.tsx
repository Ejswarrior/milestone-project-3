'use client'

import List from "@/components/List/List"
import NavBar from "@/components/Navbar/Navbar"
import Taskbar, { TaskbarProps } from "@/components/Taskbar/Taskbar"
import BoardBar from "@/components/BoardBar/BoardBar"

interface taskbarData {
    taskData: TaskbarProps[]
}

const data = [
    {
        assignee:'Erik',
        title: 'Code website',
        dueDate:'10/21',
        comments: 2,
        id: 'item2'
    },
    {
        assignee:'Erik',
        title: 'Code website',
        dueDate:'10/21',
        comments: 2,
        id: 'item3'
    },
    {
        assignee:'Erik',
        title: 'Code website',
        dueDate:'10/21',
        comments: 2,
        id: 'item4'
    },
    {
        assignee:'Erik',
        title: 'Code website',
        dueDate:'10/21',
        comments: 2,
        id: 'item5'
    },
]

export default function home(props: taskbarData) {
    const {taskData} = props
    const _renderContent = () => {
        return (
            <div>
                {data.map((item) => (
                    <Taskbar {...item}/>
                ))}
            </div>
        )
    }
    return (
        <>
            <BoardBar content={_renderContent} title='Todo' />
            <Taskbar id={'item1'} assignee={'Erik'} title='Code website' dueDate='10/21' comments={2}/>
        </>
    )
}