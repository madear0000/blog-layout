import React, { useState } from 'react';
import styles from './AllPosts.module.scss'; 
import mockData from './AllPostsList'; 
import { useNavigate } from 'react-router-dom';
import postImage from '../../assets/img/two-women.png';
import CategoryButtons from '../CategoryButtons/CategoryButtons';

export default function AllPostsBlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGroup, setSelectedGroup] = useState('all');
  const postsPerPage = 5;
  
  const filteredPosts = selectedGroup === 'all' 
    ? mockData 
    : mockData.filter(post => post.group === selectedGroup);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const navigate = useNavigate();

  const handlePostClick = (id) => {
    navigate(`/blog-post/${id}`);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleGroupChange = (group) => {
    setSelectedGroup(group);
    setCurrentPage(1);
  };

  return (
    <div className={styles.pagePost}>
        <div className="container">
            <div className={styles.mainTitle}>
                <h1>All Posts</h1>
            </div>

            <div className={styles.AllPostsBlogPage}>
            {currentPosts.map((post) => (
                <div
                key={post.id}
                className={styles.post}
                onClick={() => handlePostClick(post.id)}
                >
                    <div className={styles.post__img}>
                        <img src={postImage} className={styles.post__image} alt="" />
                    </div>

                    <div className={styles.post__info}>
                        <p className={styles.post__group}>{post.group}</p>
                        <h5 className={styles.post__title}>{post.title}</h5>
                        <p className={styles.post__text}>{post.text}</p>
                    </div>
                </div>
            ))}
            </div>

            <div className={styles.pagination}>
                <button onClick={handlePreviousPage} className={styles.pagination__button} disabled={currentPage === 1}>
                 Prev
                </button>
                <button onClick={handleNextPage} className={styles.pagination__button} disabled={currentPage === totalPages}>
                Next
                </button>
            </div>

            <CategoryButtons 
              selectedGroup={selectedGroup} 
              onGroupChange={handleGroupChange} 
            />
        
        </div>
    </div>
  );
}
