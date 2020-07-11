import React from 'react'
import styles from '../commonComponents/Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.hero_img} />
      <article className={styles.article}>
        <h1 className={styles.h1}>Hello, surfer!</h1>
        <p className={styles.p}>
I've built this {' '}
          <a
            className={styles.link}
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.reactjs.org'
          >
            <i>React </i>
          </a>
          app to showcase the best of Portugal's surf scene
        </p>
      </article>
    </section>
  )
}

export default Hero