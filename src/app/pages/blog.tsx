import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

const BlogPage = () => {
  const blogData = {
    title: "UCSB Blog",
    date: "2023-10-21",
    content: "Walking, Wondering, Taking Pictures",
  };

  return (
    <div>
      <Navbar />
      <Blog {...blogData} />
      <Footer />
    </div>
  );
};

export default BlogPage;
