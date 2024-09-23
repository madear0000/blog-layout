import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AllPosts.module.scss';
import mockData from './AllPostsList'; 

export default function AllPostsMainPage() {
  const navigate = useNavigate();

  const handlePostClick = (id) => {
    navigate(`/blog-post/${id}`);
  };

  return (
    <>
      {mockData.map((post) => (
        <div
          key={post.id}
          className={styles.onePost}
          onClick={() => handlePostClick(post.id)}
        >
          <p className={styles.onePost__namePerson}>{`${post.firstName} ${post.lastName} | ${post.date}`}</p>
          <h4 className={styles.onePost__title}>{post.title}</h4>
        </div>
      ))}
    </>
  );
}
