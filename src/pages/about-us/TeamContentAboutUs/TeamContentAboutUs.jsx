import styles from './TeamContentAboutUs.module.scss';
import React from 'react';

export default function TeamContentAboutUs() {
    return (
        <section className={styles.teamContent}>
          <div className={styles.teamContent__main}>
            <h3 className={styles.teamContent__main__title}>ABOUT US</h3>
            <h2 className={styles.teamContent__main__subtitle}>
              We are a team of content writers who share their learnings
            </h2>
          </div>
          <div className={styles.teamContent__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </section>
    )
}