'use client'
import styles from './Update.module.scss';
import { useState, useReducer, HTMLAttributes, useEffect } from 'react'
import ButtonPrimary from '../../../../components/ButtonPrimary/ButtonPrimary';
import { useRouter } from 'next/navigation';

interface State {
    titleValue: string;
    dateValue: string;
    assigneeValue: string;
}

interface Action {
    type: string;
    evtTarget: string
}

const reducer = (state: State, action: Action): State => {
    const { type, evtTarget } = action;

    switch (type) {
        case 'update':
            return {
                ...state,
                ...action
            }

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

export default function Home({params} : {params: {id: string}}) {
    const [data, setData] = useState([])
    const router = useRouter();

    useEffect(() => {
        async function getData() {
            const res = await fetch(`http://localhost:8008/home/get-tasks/${params.id}`, {cache: 'no-store'})
            const data = await res.json()
            setData(data)
            dispatch({
                type: 'updateValue',
                evtTarget: data.title
            })
            
            dispatch({
                type: 'updateAssignee',
                evtTarget: data.assignee
            })
            dispatch({
                type: 'updateDate',
                evtTarget: data.dueDate
            })
        }
        getData()
      }, [])

    const [state, dispatch] = useReducer(reducer, {
        titleValue: data.title, 
        dateValue: data.dueDate, 
        assigneeValue: data.assignee,
    })

    const _onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => { 
        evt.preventDefault()
        await fetch('http://localhost:8008/home/clipboard-update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: state.titleValue,
                dueDate: state.dateValue,
                assignee: state.assigneeValue,
                id: params.id,
            })
        })
        router.back()
    } 
    const onClick = async () => {
        await fetch('http://localhost:8008/home/clipboard-delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                id: params.id,
            })
        })
    }

    return (
        <div className={styles.container}>
        <form onSubmit={_onSubmit}  className={styles.formContainer}>
            <div className={styles.titleGroup}>
                <div className={styles.blocker}></div>
                <label className={styles.title}>Title</label>
                <button className={styles.closeButton} onClick={onClick} >Delete</button>
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
                            type: 'updateAssignee',
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