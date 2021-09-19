import React,{useRef} from "react"
import links from "./links"
import link_icon from "../assets/navigation/www.png"
import job_icon from "../assets/navigation/suitcase.png"
import article_icon from "../assets/navigation/application.png"
import styles from "../styles/navigation.module.css"

export default function Navigation({handleCaptureArrOfChild}){
    const buttonRef =useRef()
    let old;

    function handleActiveTab(event){
        let target = event.target.innerHTML
        let element = buttonRef.current.childNodes
        let elements = [element[0],element[1],element[2]]
        elements.map(e=>{
            e.classList.contains(styles.active)?old=e:old=old;
        })

        old && old.classList.remove(styles.active);
        old && old.classList.add(styles.tab)
        
        elements.map(e=>{
            if(target === e.innerHTML){
                e.classList.add(styles.active);
                old = e
            }
        })
        handleSetStateCards(event)
    }

    function handleSetStateCards(event){
        let target = event.target.innerText
        if(target === "Links úteis"){
          handleCaptureArrOfChild(links[0].utils_links)
        }else if(target === "Últimos Trabalhos"){
          handleCaptureArrOfChild(links[1].last_jobs)
        }else if(target === "Artigos"){
          handleCaptureArrOfChild(links[2].articles)
        }
      }

    return(
        <nav className={styles.nav}>
            <section ref = {buttonRef}>
                    <button onClick={(event)=>handleActiveTab(event)} className={styles.tab}><img src={link_icon} alt="ícone de links"/>Links úteis</button>
                    <button onClick={(event)=>handleActiveTab(event)} className={styles.tab} className={styles.active} ><img src={job_icon} alt="ícone de trabalho"/>Últimos Trabalhos</button>
                    <button onClick={(event)=>handleActiveTab(event)} className={styles.tab}><img src={article_icon} alt="ícone de artigo"/>Artigos</button>
            </section>
        </nav>
    )
}