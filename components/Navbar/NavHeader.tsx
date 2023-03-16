import Image, {StaticImageData} from 'next/image';
import styles from './Navbar.module.scss'

interface HeaderProps {
    username: string;
    imageProps: {
        alt: string;
        src?: StaticImageData;
    }
}

export default function NavHeader(props: HeaderProps) {
    const { 
        username,
        imageProps: {
            alt,
            src= 'profilepic'
        }
    } = props
    return (
        <div className={styles.headerContainer}>
            <div className={styles.profileUser}>
                <Image className={styles.profilePic} src={src} alt={alt} height={5} width={5}/>
                <h4 className={styles.headerTitle}>{username}'s board</h4>
            </div>
            <button> > </button>
            {/* <Image className={styles.headerIcon} src={''} alt={'Expand Icon'} width={20} height={20}/>  */}
        </div>
    )
}