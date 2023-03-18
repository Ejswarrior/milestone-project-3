'use client';

import styles from './BoardBar.module.scss';
import settings from '../../public/more.png'
import Image from 'next/image';
import { useState } from 'react';

interface BoardBarProps {
    /**
     * Title for the BoardBar
     */
    title: string;
    /**
     * Content added to the drop down section
     */
    content?:() => React.ReactNode;
}

export default function BoardBar(props: BoardBarProps) {
    const {title, content} = props

    const [isOpen, setIsOpen] = useState(false)

    const _onDrop = (evt: React.DragEvent<HTMLDivElement>) => {
        const data = document.getElementById(evt.dataTransfer.getData('drag-item'))
        {data && evt.currentTarget.append(data)}
    }

    return (
        <div 
        onDragOver={(evt: React.DragEvent<HTMLDivElement>) => {
            evt.preventDefault()
        }} 
        id={title}
        onDrop={_onDrop} 
        className={styles.board}>
            <div className={styles.titleGroup}>
                <p className={styles.title}>{title}</p>
                <button className={styles.button} onClick={() => {setIsOpen(!isOpen)}}><Image src={settings} alt='Settings Icon' width={15} height={15}/></button>
                {isOpen && (
                    <div className={styles.dropDown}>
                        <button 
                        onClick={() => {setIsOpen(!isOpen)}} 
                        className={styles.dropDownButton}
                        >Add</button>

                        <button 
                        onClick={() => {setIsOpen(!isOpen)}} 
                        className={styles.dropDownButton}
                        >Delete</button>

                        <button 
                        onClick={() => {setIsOpen(!isOpen)}} 
                        className={styles.dropDownButton}
                        >Edit</button>
                    </div>
                )}
            </div>
            {content && <div>{content()}</div>}
        </div>
    )
}