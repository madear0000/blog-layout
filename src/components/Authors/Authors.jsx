import React from "react";
import PropTypes from "prop-types";
import styles from "./Authors.module.scss";
import author from "../../assets/img/man.png"; // опять же должно импортироваться из БД
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Authors({ nameAuthor }) {
    return (
        <div className={styles.author}>
            <img className={styles.author__image} src={author} alt="" />
            <h3 className={styles.author__title}>{nameAuthor}</h3>
            <p className={styles.author__text}>Content Writer @Company</p>
            <div className={styles.author__socialNets}>
                <a href="" className={styles.author__socialNets__link}>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="" className={styles.author__socialNets__link}>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="" className={styles.author__socialNets__link}>
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </div>
        </div>
    );
}

Authors.propTypes = {
    nameAuthor: PropTypes.string.isRequired,
};
