import React, {useState } from "react"
import links from "./links"
import Header from "./Header"
import Contact from "./Contact";
import Navigation from "./Navigation"
import Card from "./Card"
import styles from '../styles/app.module.css';
import "../styles/global.css"

function App() {
  const [cards,setCards]=useState(links[1].last_jobs)
  
  function handleCaptureArrOfChild(array){
    setCards(array)
  }
  function handleRenderCards(){
      let render = cards.map((card,i)=><Card key={i}src={card.src} link={card.link} alt={card.alt} title={card.title}/>)
      return render
  }

  return (
    <div className={styles.container}>
        <Header/>
        <Contact/>
        <Navigation handleCaptureArrOfChild={handleCaptureArrOfChild}/>
        <section className={styles.posts}>
          {handleRenderCards()}
        </section>
    </div>
  );
}

export default App;
