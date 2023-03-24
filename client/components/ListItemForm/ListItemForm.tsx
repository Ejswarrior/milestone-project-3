'use client';

import styles from "./ListItemForm.module.scss"

export interface ListItemFormProps{
    onClick?: (evt: React.MouseEvent) => void;
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
}

export default function ListItemForm( props: ListItemFormProps ) {

	const {onClick, onChange, onSubmit} = props;

	return (
        <>
            <form onSubmit={onSubmit} className={styles.formStyles} onClick={onClick}>
                    <input
                        className={styles.listInput}
                        type='text'
                        max={25}
                        autoFocus
                        onChange={onChange}
                    />
            </form>
        </>
	)
}