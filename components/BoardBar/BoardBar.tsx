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
    content:() => React.ReactNode;

    id: string;
}

export default function BoardBar(props: BoardBarProps) {
    const {title, content} = props

    const [isOpen, setIsOpen] = useState(false)

    const _onDrop = (evt: React.DragEvent<HTMLDivElement>) => {
        evt.dataTransfer.getData('drag-item')
        console.log(document.getElementById('item1'))
        evt.currentTarget.appendChild(document.getElementById('item1'))
    }

    console.log(document.getElementById('item1'))


    return (
        <div 
        onDragOver={(evt: React.DragEvent<HTMLDivElement>) => {
            evt.preventDefault()
        }} 
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
                        >Delete</button>

                        <button 
                        onClick={() => {setIsOpen(!isOpen)}} 
                        className={styles.dropDownButton}
                        >Edit</button>

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