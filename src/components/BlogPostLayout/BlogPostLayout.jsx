import styles from './BlogPostLayout.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import postImg from '../../assets/img/post.png'; // это должбыть в mockData но мне лень было искать столько фоток и переписать

export default function BlogPostLayout({ post }) {
    return (
        <div className={styles.blogPostLayout}>
            <div className={`container ${styles.blogPostLayout__preview}`}>
                <div className={styles.blogPostLayout__container}>
                    <h5 className={styles.blogPostLayout__name}>{`${post.firstName} ${post.lastName}`}</h5>
                    <p className={styles.blogPostLayout__date}>{post.date}</p>
                    <h2 className={styles.blogPostLayout__title}>{post.title}</h2>
                    <p className={styles.blogPostLayout__group}>{post.group}</p>
                </div>
                <img className={styles.blogPostLayout__img} src={postImg} alt="" />
                <div className={styles.blogPostLayout__container}>
                    <p className={styles.blogPostLayout__text}>{post.text}</p>
                </div>
            </div>
        </div>
    )
}

BlogPostLayout.PropTypes = {
    post: PropTypes.object.isRequired
}