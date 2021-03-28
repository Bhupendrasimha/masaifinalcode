import React from 'react'
import styles from "./Home.module.css";
import {useHistory} from "react-router-dom"
import {Button} from "@material-ui/core"
export const Home = () => {


    const history = useHistory()

    const handleGuest = () => {
        history.push("/cities")
    }

    const handleLogin = () => {
        history.push("/login")
    }

    const handleRegister = () => {
        history.push("/register")
    }

    return (
        <div className={styles.main}>
            <div className = {styles.heading}>
                Election Poll Station Manager
            </div>
            
                <div className = {styles.guest}>
                    <Button variant="outlined"  onClick = {handleGuest} >Guest</Button>
                </div>
                <div className = {styles.admin}>
                    <Button variant="outlined" onClick = {handleLogin} > Login as Admin </Button>
                    <Button variant="outlined"  onClick = {handleRegister} > Register as Admin </Button>
            </div>
        </div>
    )
}

