import styles from './Banner.module.scss';
import Button from '../Button/Button';
import React from 'react';
import PropTypes from 'prop-types';

export default function Banner({ useBanner = true }) {
    const currentStyle = useBanner ? styles.banner : styles.blogBanner;

    return (
        <section className={currentStyle}>
            <div className="container">
                <div className={useBanner ? styles.banner__size : styles.blogBanner__size}>
                    <h5 className={useBanner ? styles.banner__slogan : styles.blogBanner__slogan}>Posted on startup</h5>
                    <h1 className={useBanner ? styles.banner__title : styles.blogBanner__title}>Step-by-step guide to choosing great font pairs</h1>
                    <h5 className={useBanner ? styles.banner__name : styles.blogBanner__name}>
                        By <span className={useBanner ? styles['banner__name--orange'] : styles['blogBanner__name--purple']}>James West</span> | May 23, 2022
                    </h5>
                    <p className={useBanner ? styles.banner__text : styles.blogBanner__text}>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                    <Button  colorScheme='orange'>
                        Read More 
                    </Button>
                </div>
            </div>
        </section>
    );
}

Banner.propTypes = {
    useBanner: PropTypes.bool.isRequired
};