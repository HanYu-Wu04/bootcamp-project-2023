// pages/blog.tsx
import React from 'react';
import BlogPreview from '../components/blogPreview';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../components/blogPreview.module.css';

const Blog: React.FC = () => {
  const blogs = [
    {
      title: 'A Day in My Life at UCSB',
      date: 'Oct 21 2023',
      description: 'Great Scenic Places at UCSB...',
      slug: 'ucsb_Blog',
      category: 'Life',
      author: 'HanYu Wu',
      authorImage: '/HanYu Wu.jpg',
      headerImage: '/UCSB_Selfie.jpg',
    },
    {
      title: 'Cooking with Roommate',
      date: 'Sep 20 2023',
      description: 'Delicious Steak Recipe...',
      slug: 'cooking_Steak',
      category: 'Food',
      author: 'HanYu Wu',
      authorImage: '/HanYu Wu.jpg',
      headerImage: '/steak.jpg',
    },
  ];

  return (
    <div>
    <Navbar/>
    <main >
    <h1 className="blog-title">Blog</h1>
    <div className={styles.container}>
      {blogs.map(blog => (
        <BlogPreview key={blog.slug} blog={blog} />
      ))}
    </div>
  </main>
  <Footer/>
  </div>
  );
};

export default Blog;