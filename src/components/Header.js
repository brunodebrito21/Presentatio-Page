import React from "react"
import profile from "../assets/header/profile.jpg"
import styles from "../styles/header.module.css"

export default function Header(){
    return(
        <header>
            <div className={styles.background}>
            </div>
            <img src={profile}  alt="Bruno Pereira profile"/>
            <h1 className={styles.name}>Bruno de Brito</h1>
            <h2 className={styles.description}>Front-end Developer</h2>

        </header>
    )
}