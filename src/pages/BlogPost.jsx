import React from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../components/AllPosts/AllPostsList';
import BlogPostLayout from '../components/BlogPostLayout/BlogPostLayout';
import JoinTeam from '../components/JoinTeam/JoinTeam';
import Footer from '../components/Footer/Footer';
import '../style/pages.scss'

export default function BlogPost() {
  const { id } = useParams();
  const post = mockData.find(post => post.id === parseInt(id));

  

  return (
    <>
      <div className='blogPost'>
        <BlogPostLayout post={post} />
        <JoinTeam />
      </div>
      <Footer />
    </>
  );
}
