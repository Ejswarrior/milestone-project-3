'use client';

import styles from "./ListItemForm.module.scss"

export interface ListItemFormProps extends React.HTMLAttributes<HTMLFormElement>{
    onClick?: (evt: React.MouseEvent) => void
}

export default function ListItemForm( props: ListItemFormProps ) {

	const {onClick} = props;

    const _onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {


        if(props.onSubmit) props.onSubmit(evt)
    }

	return (
        <>
            <form onSubmit={_onSubmit} className={styles.formStyles} onClick={onClick}>
                    <input
                        className={styles.listInput}
                        type='text'
                        max={25}
                        autoFocus
                    />
            </form>
        </>
	)
}