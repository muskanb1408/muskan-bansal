import React, { useState, useEffect, Component } from 'react';
import Posts from './Posts';
import axios from 'axios';
import './Net1.css';
import Pagination from './Pagination';
import Logout from './Logout';
const Net = () => {
  const [posts,setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
   
  useEffect(() => { 
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://coronavirus-19-api.herokuapp.com/countries');
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const indexofLastPost = currentPage * postsPerPage;
  const indexofFirstPost = indexofLastPost - postsPerPage;
  const currentPosts = posts.slice(indexofFirstPost,indexofLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  
     return (
      
      <div className="container mt-5">
      <h1 className="text-warning ">Covid-19 Table</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      <Logout />
    </div> 

     )
   

  
};

export default Net;