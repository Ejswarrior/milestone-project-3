import Image, {StaticImageData} from 'next/image';
import styles from './Navbar.module.scss'

interface HeaderProps {
    /**
     * Username Displayed in NavHeader
     */
    username: string;
    /**
     * Profile Picture in NavHeader
     */
    imageProps: {
        alt: string;
        src?: StaticImageData;
    }
    /**
     * onClick Event Handler for NavHeader
     */
    onClick: (evt: React.MouseEvent) => void;
}

export default function NavHeader(props: HeaderProps) {
    const { 
        username,
        imageProps: {
            alt,
            src=''
        },
        onClick
    } = props
    return (
        <div className={styles.headerContainer}>
            <div className={styles.profileUser}>
                <Image className={styles.profilePic} src={src} alt={alt} height={5} width={5}/>
                <h4 className={styles.headerTitle}>{username}'s board</h4>
            </div>
            <button onClick={onClick}> > </button>
            {/* <Image className={styles.headerIcon} src={''} alt={'Expand Icon'} width={20} height={20}/>  */}
        </div>
    )
}