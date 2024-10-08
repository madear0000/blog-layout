import styles from './FeaturedPosts.module.scss';
import cardPhoto from '../../assets/img/Home.png';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import AllPostsMainPage from '../AllPosts/AllPostsMainPage';
import React from 'react';

export default function FeaturedPosts() {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate('/blog-post'); 
    };

    return (
        <section className={styles.featuredPosts}>
            <div className="container">
                <div className={styles.featuredPosts__position}>
                    <div className={styles.featuredPosts__left}>
                        <h3 className={styles.smallTitle}>Featured Post</h3>
                        <div className={styles.previewPostCard}>
                            <img className={styles.previewPostCard__photo} src={cardPhoto} alt="" />
                            <p className={styles.previewPostCard__name}>By John Doe l May 23, 2022</p>
                            <h4 className={styles.previewPostCard__title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h4>
                            <p className={styles.previewPostCard__text}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            <Button colorScheme='orange' onClick={handleReadMore}>
                                    Read More
                            </Button> 
                        </div>
                    </div>
                    <div className={styles.featuredPosts__right}>
                        <div className={styles.featuredPosts__right__top}>
                            <h3 className={styles.smallTitle}>All Posts</h3>
                            <Link to="/blog" className={styles.link}>View All</Link>
                        </div>
                        <div className={styles.featuredPosts__right__allPosts}>
                            <AllPostsMainPage />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
