import React, { useState, useEffect } from 'react';
import styles from './AboutUsSections.module.scss';
import ourVisionsImg from '../../assets/img/aboutUs.png';
import TeamSection from '../TeamSection/TeamSection';
import firstImg from '../../assets/img/arms.png';
import secondImg from '../../assets/img/three-people.png';
import dataOdAuthor  from '../Authors/AuthorsList';
import Authors from '../Authors/Authors';
import JoinTeam from '../JoinTeam/JoinTeam';

export default function AboutUsSections() {
  const useAnimatedNumber = (targetNumber, duration = 2000) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = targetNumber / (duration / 16); 

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCurrentNumber(targetNumber);
          clearInterval(timer);
        } else {
          setCurrentNumber(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer); 
    }, [targetNumber, duration]);

    return currentNumber;
  };

  const blogsPublished = useAnimatedNumber(12, 2000);
  const viewsOnFinsweet = useAnimatedNumber(18000, 2500);
  const totalActiveUsers = useAnimatedNumber(30000, 3000);

  return (
    <div className={styles.AboutUsSections}>
      <div className="container">
        <section className={styles.teamContent}>
          <div className={styles.teamContent__main}>
            <h3 className={styles.teamContent__main__title}>
              ABOUT US
            </h3>
            <h2 className={styles.teamContent__main__subtitle}>
              We are a team of content writers who share their learnings
            </h2>
          </div>
          <div className={styles.teamContent__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </section>
        <section className={styles.ourVisions}>
          <img src={ourVisionsImg} className={styles.ourVisions__image} alt="" />
          <div className={styles.ourVisions__numberUsers}>
            <div className={styles.ourVisions__info}>
              <h4 className={styles.ourVisions__info__title}>{blogsPublished}+</h4>
              <p className={styles.ourVisions__info__subtitle}>Blogs Published</p>
            </div>
            <div className={styles.ourVisions__info}>
              <h4 className={styles.ourVisions__info__title}>{viewsOnFinsweet.toLocaleString()}+</h4>
              <p className={styles.ourVisions__info__subtitle}>Views on Finsweet</p>
            </div>
            <div className={styles.ourVisions__info}>
              <h4 className={styles.ourVisions__info__title}>{totalActiveUsers.toLocaleString()}+</h4>
              <p className={styles.ourVisions__info__subtitle}>Total active Users</p>
            </div>
          </div>
        </section>
        <TeamSection
        title="Our team of creatives"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
        isReverse={false}
        image={firstImg}
      />

        <TeamSection
        title="Why we started this Blog"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
        isReverse={true} 
        image={secondImg}
      />

      <section className={styles.someAuthors}>
        <h2 className={styles.someAuthors__title}>List of Authors</h2>
        <div className={styles.someAuthors__area}>
          {dataOdAuthor.map((authorName, index) => (
              <Authors key={index} nameAuthor={authorName} />
          ))}
        </div>
      </section>

      <JoinTeam />
      </div>
    </div>
  );
}
