import Header from '../Header/Header'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Header />
            <div className={`container ${styles.footer__line}`}>
                <div className={styles.footer__adress}>
                    Finstreet 118 2561 Fintown <br />
                    Hello@finsweet.com 020 7993 2905
                </div>
                <div className={styles.footer__nets}>
                    <a className={styles.icons} href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a className={styles.icons} href="#">
                        <FontAwesomeIcon icon={faTwitter}  />
                    </a>
                    <a className={styles.icons} href="#">
                        <FontAwesomeIcon icon={faInstagram}  />
                    </a>
                </div>
            </div>   
        </footer>
    )
}