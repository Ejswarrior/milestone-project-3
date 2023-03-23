'use client';
import NavHeader from "./NavHeader"
import fish from '../../public/fishpic.jpg';
import styles from './Navbar.module.scss'
import List from "../List/List";
import ListItem, { ListItemProps } from "../List/ListItem";
import ListItemForm from "../ListItemForm/ListItemForm";
import { useState } from "react";

interface NavBarProps {
    data?: ListItemProps[];
}

export default function NavBar(props: NavBarProps) {
    const {data} = props

    const [isExpanded, setIsExpanded] = useState(true)

    const headerData = {
        src: fish, 
        alt: 'Pic'
    }

    const listData = [
        {
            href: '/dashboard',
            children: 'dashboard',
        },
        {
            href: '/Hookset',
            children: 'Hookset',
        },
        {
            href: '/Planboard',
            children: 'Planboard',
        },
        {
            href: '/blogstorm',
            children: 'blogstorm',
        },
    ]
    
    const [listItem, addListItem] = useState(listData)
    const [isItemInput, setIsItemInput] = useState(false)
    const [boardTitle, setBoardTitle] = useState('')

    const navbarStyles = [styles.navBar]

    if (isExpanded) navbarStyles.push(styles.expanded)

    const _onClick = () => {
        setIsItemInput(true)
    }

    const _onSubmit = async () => {
        await fetch('http://localhost:3000/api/boards', {
            method: 'POST'
            ,
            headers: {
                'content-Type': 'application/json',
            }        
        })
    }

    const _onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        console.log(evt.currentTarget.value)
        setBoardTitle(evt.currentTarget.value)
    }

    return (
        <div className={navbarStyles.join(' ')}>
            <NavHeader imageProps={headerData} onClick={() => setIsExpanded(!isExpanded)} username="Ejswarrior" />
            <div className={styles.listContainer}>
                <List data={listItem}/>
            </div>
            {isItemInput && (
                <div className={styles.listInput}>
                    <ListItemForm onChange={() => _onChange} onSubmit={() => setIsItemInput(false)} onClick={_onClick} />
                </div>
            )}
            <div className={styles.addItemButton}>
                <button className={styles.button} onClick={_onClick}>Add a board</button>
            </div>
            <div className={styles.navFooter}>
                <h1 className={styles.footerTitle}>Planitize</h1>
            </div>
            {!isExpanded && <button className={styles.expandButton} onClick={() => setIsExpanded(!isExpanded)}></button>}
        </div>
    )
} 