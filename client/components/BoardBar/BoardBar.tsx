'use client';

import styles from './BoardBar.module.scss';
import settings from '../../public/more.png'
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
export interface BoardBarProps {
    /**
     * Title for the BoardBar
     */
    title: string;
    /**
     * Id for the BoardBar
     */
    id: string;
    /**
     * Content added to the drop down section
     */
    content?:() => React.ReactNode;
    /**
     * onClick event handler
     */
    onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BoardBar(props: BoardBarProps) {
    const {title, content, id} = props

    const [isOpen, setIsOpen] = useState(false)

    const _onDrop = async (evt: React.DragEvent<HTMLDivElement>) => {
        const data = document.getElementById(evt.dataTransfer.getData('drag-item'))
        
        console.log(evt.dataTransfer.getData('parent-item'))
        {data && evt.currentTarget.append(data)}

        await fetch('http://localhost:8008/home/clipboard-move', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                clipboardId: evt.currentTarget.id,
                parentId: evt.dataTransfer.getData('parent-item'),
                taskId:  evt.dataTransfer.getData('drag-item'),
            })
        })
    }

    const _onClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
        setIsOpen(!isOpen)
        if(props.onClick) props.onClick(evt);
    }

    return (
        <div 
        onDragOver={(evt: React.DragEvent<HTMLDivElement>) => {
            evt.preventDefault()
        }} 
        id={id}
        onDrop={_onDrop} 
        className={styles.board}>
            <div className={styles.titleGroup}>
                <p className={styles.title}>{title}</p>
                <button className={styles.button} onClick={() => {setIsOpen(!isOpen)}}><Image src={settings} alt='Settings Icon' width={15} height={15}/></button>
                {isOpen && (
                    <div className={styles.dropDown}>
                        <button 
                        onClick={_onClick} 
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
            {content && <>{content()}</>}
        </div>
    )
}