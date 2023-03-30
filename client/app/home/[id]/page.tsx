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
    const [boardData, setData] = useState([])
    const [isTaskPage, setIsTaskPage] = useState(false)
    const router = useRouter();

    useEffect(() => {
        async function getData() {
            const res = await fetch(`http://localhost:8008/home/${params.id}`, { cache: 'no-store'})
            const data = await res.json()
            setData(data)
        }

        getData()
      }, [])

      const _onClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
        setIsTaskPage(!isTaskPage)
      }
    return (
        <div className={styles.container}>
            <div className={styles.Topbar}>
                <h1 className={styles.title}>Notebook</h1>
            </div>

            <div className={styles.contentContainer}>
                {boardData.map((item:BoardBarProps, index: number) => {
                    console.log(item.tasks[1])
                    return <BoardBar key={index + 1} onClick={_onClick} id={item._id} title={item.title}
                    content={() => 
                        item?.tasks?.map((items: TaskbarProps, index: number) => (
                            <Taskbar key={items.title} title={items.title} dueDate={items.dueDate} assignee={items.assignee} id={items?._id} onClick={() => router.push(`/home/update-task/${items._id}`)} />
                        ))}
                    />
                })}
            </div>
            {isTaskPage && <TaskPage onClick={() => setIsTaskPage(!isTaskPage)}/>}
        </div>
    )
}