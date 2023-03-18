import styles from './TaskPage.module.scss';
import { useState, useReducer } from 'react'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

interface State {
    titleValue: string;
    dateValue: string;
    assigneeValue: string;
}

interface Action {
    type: string;
    evtTarget: string
}

interface TaskPageProps {
    /**
     * onClick event handler
     */
    onClick: () => void;
}

const reducer = (state: State, action: Action): State => {
const { type, evtTarget } = action;

switch (type) {
    case 'updateValue': 
        return {
            ...state,
            titleValue: evtTarget,
            ...action,
        }

    case 'updateDate':
        return {
            ...state,
            dateValue: evtTarget,
            ...action
        }

        case 'updateAssignee':
            return {
                ...state,
                assigneeValue: evtTarget,
                ...action
            }

        default:
            throw('Error')
    }
}
export default function TaskPage(props: TaskPageProps) {
    const {onClick} = props;

    const [state, dispatch] = useReducer(reducer, {
        titleValue: '', 
        dateValue: '', 
        assigneeValue: ''
    })

    return (
        <div className={styles.container}>
            <form className={styles.formContainer}>
                <div className={styles.titleGroup}>
                    <div className={styles.blocker}></div>
                    <label className={styles.title}>Title</label>
                    <button className={styles.closeButton} onClick={onClick}>X</button>
                </div>
                <input
                    type='text'
                    placeholder='Add Title...'
                    value={state.titleValue}
                    maxLength={40}
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                        dispatch({
                            type: 'updateValue',
                            evtTarget: evt.currentTarget.value
                        })
                    }
                    }
                    className={styles.titleInput}
                />

                <div className={styles.assigneeContainer}>
                    <input
                        type='text'
                        placeholder='Assign a team member...'
                        value={state.assigneeValue}
                        maxLength={40}
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch({
                                type: 'assigneeValue',
                                evtTarget: evt.currentTarget.value
                            })
                        }
                        }
                        className={styles.assigneeInput}
                    />
                </div>

                <div className={styles.dateSelectContainer}>
                    <div className={styles.dateGroup}>
                        <label className={styles.dateTitle}>Due Date:</label>
                        <input 
                        type="date" 
                        value={state.dateValue}
                        placeholder='Set a due date'
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                            dispatch({
                                type: 'updateDate',
                                evtTarget: evt.currentTarget.value,
                            })
                        }}
                        className={styles.dateInput}
                        />
                    </div>
                    <div className={styles.selectGroup}>
                        <h6>Status</h6>
                        <select>
                                <option value="Good">On Time</option>
                                <option value="warning">Close</option>
                                <option value="overDue">Over Due</option>
                        </select>
                    </div>
                </div>

                <div className={styles.commentSection}>
                    <div className={styles.commentContainer}>Comment Section</div>
                    <form className={styles.commentForm}>
                        <input
                            type='text'
                            placeholder='Add a comment'
                            maxLength={100}
                            className={styles.commentInput}
                        />
                    </form>
                </div>
                <ButtonPrimary variation='primary' type='submit'>Submit</ButtonPrimary>
            </form>
        </div>
    )
}