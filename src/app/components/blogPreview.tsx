// components/BlogPreview.tsx
import React from 'react';
import Image from 'next/image'; // Import Image from Next.js for optimized image loading
import styles from './blogPreview.module.css';
import Link from 'next/link';

type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
  category: string;
  author: string;
  authorImage: string;
  headerImage: string;
};

interface BlogPreviewProps {
  blog: Blog;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ blog }) => {
  return (
    <div>
    <a href={`/blog/${blog.slug}`}>
    <div className={`${styles.container} ${styles.card}`}>
      <div className={styles.card__header}>
        {/* Use Next.js Image for optimized image loading */}
        <Image src={blog.headerImage} alt="card__image" width={600} height={200} style={{
            maxWidth: '100%',
            maxHeight: '200px',
            objectFit: 'cover',
            marginBottom: '-30px',
          }} />
      </div>
      <div className={styles.card__body}>
        <span className={`${styles.tag} ${styles.tagBlue}`}>{blog.category}</span>
        <h4 className={styles.title}>{blog.title}</h4>
        <p className={styles.content}>{blog.description}</p>
      </div>
      <div className={styles.card__footer}>
        <div className={styles.user}>
          <Image src={blog.authorImage} alt="user__image" className={styles.user__image} height={60} width={60 }/>
          <div className={styles.user__info}>
            <h5>{blog.author}</h5>
            <small className={blog.date}>{blog.date}</small>
          </div>
        </div>
      </div>
    </div>
    </a>
    </div>
  );
};

export default BlogPreview;
