import styles from './JoinTeam.module.scss';
import Button from '../Button/Button';
import React from 'react';

export default function JoinTeam() {
    return (
        <section className={styles.JoinTeam}>
            <div className="container">
                <div className={styles.JoinTeam__position}>
                    <h2 className={styles.JoinTeam__title}>Join our team to be a part of our story</h2>
                    <p className={styles.JoinTeam__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <Button className={styles.JoinTeam__button} colorScheme='orange'>
                        Join Now
                    </Button>
                </div>
            </div>
        </section>
    )
}