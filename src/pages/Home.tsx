import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import HeaderMoving from '../components/HeaderMoving';
import HomeContents from '../components/HomeContents';
import { post } from '../contexts/types';

function Home() {
  const tempPosts: post[] = [];
  const [posts, setPosts] = useState(tempPosts);

  const getVelog = async () => {
    try {
      const response = await axios.get('/api/v1/velog');
      setPosts(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVelog();
  }, []);

  return <HomeContents posts={posts} />;
}

export default Home;
