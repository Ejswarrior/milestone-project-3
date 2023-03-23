import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import styles from "./list.module.scss"
import fish from '../../public/fishpic.jpg';


export interface ListItemProps {
    /**
     * Href for Link Item
     */
    href: string;
    /**
     * Children inside ListItem
     */
    title?: ReactNode;
    /**
     * onClick Event handler 
     */
    onClick?: (evt: React.MouseEvent) => void
}

export default function ListItem( props: ListItemProps ) {

	const {href, title, onClick} = props;

	const listItemStyles = [styles.listStyles]

	return (
        <>
            <Link className={styles.link} href={href}>
                <li className={listItemStyles.join( " " )} onClick={onClick}>
                    <Image src={fish} alt={"Notebook Icon"} className={styles.listImage} height={20} width={20}/>
                    <p className={styles.listChildren}>{title}</p>
                </li>
            </Link> 
        </>
	)
}