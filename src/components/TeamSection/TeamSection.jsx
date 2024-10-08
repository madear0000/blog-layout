import styles from './TeamSection.module.scss';
import React from 'react';

export default function TeamSection({ title, subtitle, info, isReverse, image }) {
  return (
    <section className={clsx(styles.uorTeam, { [styles['uorTeam--reverse']]: isReverse })}>
      <div className={styles.uorTeam__text}>
        <h2 className={styles.uorTeam__text__title}>{title}</h2>
        <h4 className={styles.uorTeam__text__subtitle}>{subtitle}</h4>
        <p className={styles.uorTeam__text__info}>{info}</p>
      </div>
      <img className={styles.uorTeam__image} src={image} alt="" />
    </section>
  );
};


