'use client'

import Taskbar, { TaskbarProps } from "@/components/Taskbar/Taskbar";
import BoardBar from "@/components/BoardBar/BoardBar";
import TaskPage from "@/components/TaskPage/TaskPage";
import styles from './Home.module.scss'
import {useState} from 'react'

interface taskbarData {
    taskData: TaskbarProps[]
}

export default function Home(props: taskbarData) {
    const {taskData} = props

    const [isTaskPage, setIsTaskPage] = useState(false)

    const data = [
        {
            assignee:'Erik',
            title: 'Code website',
            dueDate:'10/21',
            comments: 2,
            id: 'item2',
            onClick:() => setIsTaskPage(!isTaskPage)
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
    
    const _renderContent = () => {
        return (
            <div>
            {data.map((item) => (
                <Taskbar key={item.id} {...item}/>
            ))}
            </div>
        )
    }

    const changeData = () => {
        
    }


    return (
        <div className={styles.container}>
            <div className={styles.Topbar}>
                <h1 className={styles.title}>Hookset</h1>
            </div>

            <div className={styles.contentContainer}>
                <BoardBar content={_renderContent} title="to-do"/>
                <BoardBar  title="in-progress"/>
                <BoardBar  title="completed"/>
            </div>
            {isTaskPage && <TaskPage onClick={() => setIsTaskPage(!isTaskPage)}/>}
        </div>
    )
}