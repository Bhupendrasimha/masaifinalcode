import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from "./Nav.module.css"

export const Nav = () => {

    const history = useHistory()

    const handleClick = () => {
        history.push("/polling")
    }

    return (
        <div className = {styles.bar}>
            <div onClick = {handleClick} > Add a station </div>
        </div>
    )
}

