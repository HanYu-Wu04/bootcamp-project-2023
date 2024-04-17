"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../components/blogPreview.module.css';
import { IBlog } from '@/database/blogSchema';  // Ensure this path matches your project structure
import BlogPreview from '../components/blogPreview';

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        const data = await response.json();
        setBlogs(data);
        console.log("success");
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <h1 className={styles.title}>Blogs</h1> 
        <div className={styles.container}>
          {blogs.map((blog) => (
            <BlogPreview key={blog.slug} blog={blog} />  // Correctly pass the blog prop
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;