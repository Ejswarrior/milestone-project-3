'use client'

import List from "@/components/List/List";
import Taskbar, { TaskbarProps } from "@/components/Taskbar/Taskbar";
import BoardBar from "@/components/BoardBar/BoardBar";
import TaskPage from "@/components/TaskPage/TaskPage";
import styles from './Home.module.scss'

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
        <div className={styles.container}>
        </div>
    )
}