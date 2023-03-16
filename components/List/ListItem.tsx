import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import styles from "./list.module.scss"

export interface ListItemProps {
    href?: string;
    src: StaticImageData;
    alt: string;
    children?: ReactNode;
    onClick?: (evt: React.MouseEvent) => void
}

export default function ListItem( props: ListItemProps ) {

	const {href, src, alt, children, onClick} = props;

	const listItemStyles = [styles.listStyles]

	return (
        <>
		{href && (
            <Link className={styles.link} href={href}>
                <li className={listItemStyles.join( " " )} onClick={onClick}>
                    <Image src={src} alt={alt} className={styles.listImage} height={20} width={20}/>
                    <p className={styles.listChildren}>{children}</p>
                </li>
            </Link> 
            )}
        </>
	)
}