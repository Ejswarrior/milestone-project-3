import styles from './Taskbar.module.scss'

interface TaskbarProps {
    assignee: string;

}

export default function Taskbar() {
    return (
        <div>
            <p className={styles.title}></p>

            <p className={styles.assignee}></p>

            <p className={styles.dueDate}></p>
            <div className={styles.commentIcon}></div>
        </div>
    )
}