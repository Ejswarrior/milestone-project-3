'use client';
import NavHeader from "./NavHeader"
import fish from '../../public/fishpic.jpg';
import styles from './Navbar.module.scss'
import List from "../List/List";
import ListItem from "../List/ListItem";
import { useState } from "react";



export default function NavBar() {

    const [isExpanded, setIsExpanded] = useState(true)

    const headerData = {
        src: fish, 
        alt: 'Pic'
    }

    const listData = [
        {
        href: '/dashboard',
        src: fish,
        alt: 'link',
        children: 'dashboard',
        },
        {
            href: '/Hookset',
            src: fish,
            alt: 'link',
            children: 'Hookset',
        },
        {
            href: '/Planboard',
            src: fish,
            alt: 'link',
            children: 'Planboard',
        },
        {
            href: '/blogstorm',
            src: fish,
            alt: 'link',
            children: 'blogstorm',
        },
    ]
    
    const [listItem, addListItem] = useState(listData)

    const navbarStyles = [styles.navbar]

    if (isExpanded) navbarStyles.push(styles.expanded)
    return (
        <div className={styles.navBar}>
            <NavHeader imageProps={headerData} username="Ejswarrior" />
            <List data={listItem}/>
            <div className={styles.addItemButton}>
                <ListItem href='/newboard' src={fish} alt={'link'}>Add a board</ListItem>
            </div>
            <div className={styles.navFooter}>
                <h1 className={styles.footerTitle}>Planitize</h1>
            </div>
        </div>
    )
} 