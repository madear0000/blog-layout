import React from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../components/AllPosts/AllPostsList';
import BlogPostLayout from '../components/BlogPostLayout/BlogPostLayout';
import JoinTeam from '../components/JoinTeam/JoinTeam';

export default function BlogPost() {
  const { id } = useParams();
  const post = mockData.find(post => post.id === parseInt(id));

  

  return (
    <>
        <BlogPostLayout post={post} />
        <JoinTeam />
    </>
  );
}
