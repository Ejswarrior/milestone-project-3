'use client';
import styles from './Taskbar.module.scss';
import Image from 'next/image';
import comment from '../../public/speech-bubble.png'
import { HTMLAttributes } from 'react';

export interface TaskbarProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Prop to assign Taskbar
     */
    assignee: string;
    /**
     * Add title to taskbar
     */
    title: string;
    /**
     * Add dueDate to taskbar
     */
    dueDate?: string;
    /**
     * Add number of comments to taskbar
     */
    comments: number;
    /**
     * 
     * OnClick event handler
     */
    onClick?: () => void;
    /**
     * Id for each Taskbar(Used for drag and drop)
     */
    id: string;
}

export default function Taskbar(props: TaskbarProps) {
    const {assignee, title, dueDate, comments, onClick, id} = props

    const _onDragStart = (evt: React.DragEvent<HTMLDivElement>) => {
        console.log(evt.currentTarget.id)
        evt.dataTransfer.setData("drag-item", evt.currentTarget.id)
    }



    return (
        <div onClick={onClick} id={id} draggable={true} onDragStart={_onDragStart} className={styles.classItem}>
            <div className={styles.titleDateGroup}>
                <p className={styles.title}>{title}</p>
                <p className={styles.dueDate}>{dueDate}</p>
            </div>

            <p className={styles.assignee}>{assignee}</p>

            <div className={styles.commentGroup}>
                <div>{comments}</div>
                <Image src={comment} alt='Comment Icon' width={15} height={15}/>
            </div>
        </div>
    )
}