'use client';
import NavHeader from "./NavHeader"
import fish from '../../public/fishpic.jpg';
import styles from './Navbar.module.scss'
import List from "../List/List";
import ListItem, { ListItemProps } from "../List/ListItem";
import ListItemForm from "../ListItemForm/ListItemForm";
import { useEffect, useState } from "react";

interface NavBarProps {
    data: ListItemProps[];
}

export default function NavBar(props: NavBarProps) {
    const {data} = props

    const [isExpanded, setIsExpanded] = useState(true)

    const headerData = {
        src: fish, 
        alt: 'Pic'
    }
    const [useData, setData] = useState([{}])
    const [isItemInput, setIsItemInput] = useState(false)
    const [boardTitle, setBoardTitle] = useState('')

    const navbarStyles = [styles.navBar]

    if (isExpanded) navbarStyles.push(styles.expanded)

    const _onClick = () => {
        setIsItemInput(true)
    }

    const _onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        await fetch('http://localhost:8008/home/board-create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: boardTitle
            }),
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
            <List data={data}/>
            </div>
            {isItemInput && (
                <div className={styles.listInput}>
                    <ListItemForm onChange={(evt: React.ChangeEvent<HTMLInputElement>) => _onChange(evt)} onSubmit={_onSubmit} onClick={_onClick} />
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