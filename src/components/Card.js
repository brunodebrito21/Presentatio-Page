import React from "react"
import styles from "../styles/card.module.css"

export default function Card({link,title,src,alt}){

    return(
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <img src={src} alt={alt}/>
            <h3>{title}</h3>
            <div className={styles.backgroundTitle}>
            </div>
        </a>
    )
}