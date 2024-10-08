import styles from "./OurVisionsAboutUs.jsx";
import useAnimatedNumber from '../../../hooks/UseAnimatedNumberHook.jsx';
import ourVisionsImg from "../../../assets/img/aboutUs.png";
import React from 'react';

export default function OurVisionsAboutUs() {
    const blogsPublished = useAnimatedNumber(12, 2000);
    const viewsOnFinsweet = useAnimatedNumber(18000, 2500);
    const totalActiveUsers = useAnimatedNumber(30000, 3000);

    <section className={styles.ourVisions}>
        <img
            src={ourVisionsImg}
            className={styles.ourVisions__image}
            alt="Our Visions"
        />
        <div className={styles.ourVisions__numberUsers}>
            <div className={styles.ourVisions__info}>
                <h4 className={styles.ourVisions__info__title}>
                    {blogsPublished}+
                </h4>
                <p className={styles.ourVisions__info__subtitle}>
                    Blogs Published
                </p>
            </div>
            <div className={styles.ourVisions__info}>
                <h4 className={styles.ourVisions__info__title}>
                    {viewsOnFinsweet.toLocaleString()}+
                </h4>
                <p className={styles.ourVisions__info__subtitle}>
                    Views on Finsweet
                </p>
            </div>
            <div className={styles.ourVisions__info}>
                <h4 className={styles.ourVisions__info__title}>
                    {totalActiveUsers.toLocaleString()}+
                </h4>
                <p className={styles.ourVisions__info__subtitle}>
                    Total active Users
                </p>
            </div>
        </div>
    </section>;
}
