import styles from './Taskbar.module.scss';
import Image from 'next/image';
import comment from '../../public/speech-bubble.png'

interface TaskbarProps {
    /**
     * Prop to assign Taskbar
     */
    assignee: string;
    /**
     * Add title to taskbar
     */
    title: string;
    /**
     * Add dueDate to taskbar
     */
    dueDate: string;
    /**
     * Add number of comments to taskbar
     */
    comments: number;
    /**
     * 
     * OnClick event handler
     */
    onClick: () => void;
}

export default function Taskbar(props: TaskbarProps) {

    const {assignee, title, dueDate, comments, onClick} = props
    return (
        <div onClick={onClick} draggable className={styles.classItem}>
            <div className={styles.titleDateGroup}>
                <p className={styles.title}>{title}</p>
                <p className={styles.dueDate}>{dueDate}</p>
            </div>

            <p className={styles.assignee}>{assignee}</p>

            <div className={styles.commentGroup}>
                <div>{comments}</div>
                <Image src={comment} alt='Comment Icon' width={15} height={15}/>
            </div>
        </div>
    )
}