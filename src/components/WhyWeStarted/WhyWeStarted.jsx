import styles from './WhyWeStarted.module.scss';
import BaseButton from '../BaseButton/BaseButton';
import friendImg from '../../assets/img/friends.png';

export default function WhyWeStarted() {
    return (
        <section className={styles.whyWeStarted}>
            <div className="container">
                <div className={styles.whyWeStarted__size}>
                    <div className={styles.whyWeStarted__image}>
                        <img src={friendImg} alt="" className={styles.whyWeStarted__image__friends}/>
                    </div>
                    <div className={styles.whyWeStarted__block}>
                        <h3 className={styles.whyWeStarted__title}>Why we started</h3>
                        <h2 className={styles.whyWeStarted__subtitle}>It started out as a simple idea and evolved into our passion</h2>
                        <p className={styles.whyWeStarted__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        <BaseButton textInButton='Read More >' color='orange' />
                    </div>
                </div>
            </div>
        </section>
    )
}