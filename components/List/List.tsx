'use client';

import Image from "next/image"
import Link from "next/link"
import styles from "./list.module.scss"
import ListItem from "./ListItem"
import { ListItemProps } from "./ListItem"

interface ListProps {
    data: ListItemProps[];
    onClick?: (evt: React.MouseEvent) => void;
}

export default function List( props: ListProps ) {
	const {data, onClick} = props

	const listStyles = [styles.list]


	return (
		<ul className={listStyles.join(" ")}>
			{data.map( ( item, index ) => {
				return <ListItem key={index} onClick={onClick} src={item.src} alt={item.alt} href={item.href}>{item.children}</ListItem>
			} )}
		</ul>
	)
}