'use client'

import Taskbar, { TaskbarProps } from "@/components/Taskbar/Taskbar";
import BoardBar, {BoardBarProps} from "@/components/BoardBar/BoardBar";
import TaskPage from "@/components/TaskPage/TaskPage";
import styles from '../Home.module.scss'
import {useState, useEffect} from 'react'

interface taskbarData {
    taskData: TaskbarProps[];
}

interface ClipboardProps extends BoardBarProps {
    id: string;
}

export default async function Home(props: taskbarData, params: string) {

    const [isTaskPage, setIsTaskPage] = useState(false)
    const [boardData, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const res = await fetch(`http://localhost:8008/home/${params}`)

            if(res.ok) {
                try {
                    const result = await res.json()
                    setData(Object.values(result))
                }catch {
                    const error = res.statusText
                    return Promise.reject(error)
                }
            }
        }
        getData()
      }, [])

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

    return (
        <div className={styles.container}>
            <div className={styles.Topbar}>
                <h1 className={styles.title}>Hookset</h1>
            </div>

            <div className={styles.contentContainer}>
                {boardData.map((item: ClipboardProps, index: number) => {
                    return <BoardBar key={index + 1} content={() => <div>Hello</div>} title={item.title} />
                })}
            </div>
            {isTaskPage && <TaskPage onClick={() => setIsTaskPage(!isTaskPage)}/>}
        </div>
    )
}