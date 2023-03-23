'use client';
import DetailsPage from "./DetailsPage"
import PasswordCreate from "./PasswordCreate"
import {useState} from 'react';

export default function CreateAccount(){

    const [page, setPage] = useState(false)

    const _onClick = () => {
        setPage(true)
    }
    return (
        <>
            {!page && <DetailsPage onClick={_onClick}/>}
            {page && <PasswordCreate />}
        </>
    )
}