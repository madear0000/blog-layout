import styles from './Form.module.scss'
import BaseButton from '../BaseButton/BaseButton'

export default function Form() {
    return (
        <div className={styles.formSection}>
            <div className="container">
                <div className={styles.formSection__size}>
                    <div className={styles.formSection__text}>
                        <h3 className={styles.formtion__title}>Contact us</h3>
                        <h1 className={styles.formtion__subtitle}>Let’s Start a Conversation</h1>
                        <p className={styles.formSection__info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                    </div>
                    <form action="" className={styles.form}>
                        <input className={styles.form__input} type="text" placeholder='Full Name'/>
                        <input className={styles.form__input}  type="email" placeholder='Email'/>
                        <input className={styles.form__input}  type="text" placeholder='Message'/>
                        <BaseButton textInButton='send a message' color='orange' width='100%'/>
                    </form>
                </div>
            </div>
        </div>
    )
   
}