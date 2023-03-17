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
    children: () => React.ReactNode;
}

export default function BoardBar(props: BoardBarProps) {
    const {title, children} = props

    const [isOpen, setIsOpen] = useState(false)

    const _renderContent = () => {
            children();
    }

    return (
        <div className={styles.board}>
            <div className={styles.titleGroup}>
                <p className={styles.title}>{title}</p>
                <button className={styles.button} onClick={() => {setIsOpen(!isOpen)}}><Image src={settings} alt='Settings Icon' width={15} height={15}/></button>
                {isOpen && (
                    <div className={styles.dropDown}>
                        <button onClick={() => {setIsOpen(!isOpen)}} className={styles.dropDownButton}>Delete</button>
                        <button onClick={() => {setIsOpen(!isOpen)}} className={styles.dropDownButton}>Edit</button>
                    </div>
                )}
                <div>{_renderContent}</div>
            </div>
        </div>
    )
}