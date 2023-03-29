'use client'
import TaskPage from "@/components/TaskPage/TaskPage";
import { useState, useEffect } from "react";

export default function Home({params} : {params: {id: string}}) {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            const res = await fetch(`http://localhost:8008/home/get-tasks/${params.id}`, {cache: 'no-store'})
            const data = await res.json()
            setData(data)
        }

        getData()
      }, [])

    return (
        <TaskPage titleValue={data.title} assigneeValue={data.assignee} dateValue={data.dueDate}/>
    )
}