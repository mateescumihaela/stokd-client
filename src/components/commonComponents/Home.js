import React from 'react'
import styles from '../commonComponents/Hero.module.css'
import Wave from 'react-wavify'


const Hero = () => {
  return (
    
    <div className={styles.section}>
      <div className={styles.hero_img} />
      <article className={styles.article}>
        <h1 className={styles.h1}>Hello, surfer!</h1>
        <p className={styles.p_home}>
        Introducing <strong>Waver</strong>, the online magazine that focuses exclusively on the Portuguese surf scene.
        </p>
        <p className={styles.p_home}>
      This is the Portugal you wish you could find on the Internet.
        </p>
        <p className={styles.p_home}> 
        From news to guides to scouting for the spots that suit you best.
        </p>

        <Wave fill="url(#gradient)">
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="10%"  stopColor="#40e0d0" />
      <stop offset="90%" stopColor="#48b5e0" />
    </linearGradient>
  </defs>
</Wave>
      </article>
    </div> 
  
  )
}

export default Hero