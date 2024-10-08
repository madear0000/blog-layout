import styles from './InfoBlog.module.scss'
import React from 'react';

export default function InfoBlog() {
    return (
        <section className={styles.infoBlog}>
            <div className="container">
                <div className={styles.infoBlog__size}>
                    <div className={styles.infoBlog__part}>
                        <h3 className={styles.infoBlog__title}>ABOUT US</h3>
                        <h2 className={styles.infoBlog__subtitle}>We are a community of content writers who share their learnings</h2>
                        <p className={styles.infoBlog__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className={styles.infoBlog__part}>
                        <h3 className={styles.infoBlog__title}>Our mision</h3>
                        <h2 className={styles.infoBlog__subtitle}>Creating valuable content for creatives all around the world</h2>
                        <p className={styles.infoBlog__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}