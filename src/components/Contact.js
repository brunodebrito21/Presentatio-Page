import React from "react"
import whatsapp from "../assets/contact/whatsapp.png"
import github from "../assets/contact/github.png"
import linkedin from "../assets/contact/linkedin.png"
import styles from "../styles/contact.module.css"

export default  function Contact(){
    return(
        <div className={styles.contactContainer}>
            <div className={styles.float}>
                <a target="_blank" href="https://wa.me/21975707560" rel="noopener noreferrer" className={styles.link}>
                    <img src={whatsapp} alt="ícone do whatsapp"/>
                    <span>Whatsapp</span>
                </a>
                <a target="_blank" href="https://github.com/brunodebrito21/" rel="noopener noreferrer"className={styles.link}>
                    <img src={github} alt="ícone do github"/>
                    <span>Github</span>
                </a>
                <a target="_blank" href="https://linkedin.com/in/-brunodebrito" rel="noopener noreferrer" className={styles.link}>
                    <img src={linkedin} alt="ícone do linkedin"/>
                    <span>Linkedin</span>
                </a>
            </div>
        </div>
    )
}