'use client'

import {useRouter} from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation';
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

export default function Home({params} : {params: {id: string}}) {

    const id = params.id
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [boardData, setData] = useState([])
    const [isTaskPage, setIsTaskPage] = useState(false)

    useEffect(() => {
        async function getData() {
            const res = await fetch(`http://localhost:8008/home/${params.id}`)
            const data = await res.json()
            setData(data)
        }

        getData()
      }, [])

    return (
        <div className={styles.container}>
            <div className={styles.Topbar}>
                <h1 className={styles.title}>Hookset</h1>
            </div>

            <div className={styles.contentContainer}>
                {boardData.map((item, index) => {
                    return <BoardBar key={index + 1} id={id} title={item.title}
                    content={() => 
                        item?.tasks?.map((items, index) => (
                            <Taskbar key={items.title} title={items.title} assignee={items.assignee} dueDate={items.dueDate} />
                        ))}
                    />
                })}
            </div>
            {isTaskPage && <TaskPage onClick={() => setIsTaskPage(!isTaskPage)}/>}
        </div>
    )
}