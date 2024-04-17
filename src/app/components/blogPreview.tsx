// components/BlogPreview.tsx
import React from 'react';
import Image from 'next/image'; // Import Image from Next.js for optimized image loading
import styles from './blogPreview.module.css';
import Link from 'next/link';

type Blog = {
  title: string;
  date: Date;
  description: string;
  slug: string;
  content: string; // for individual blog page
  comments: Comment[];
  category: 'Trip' | 'Food' | 'Project';
  //author: string;
  //authorImage: string;
  //headerImage: string;
};

interface BlogPreviewProps {
  blog: Blog;
}

const categoryStyles = {
  Trip: styles.tagBlue,
  Food: styles.tagBrown,
  Project: styles.tagRed
};

const BlogPreview: React.FC<BlogPreviewProps> = ({ blog }) => {
  const dateObj = new Date(blog.date);

  // Ensure the date is valid before calling toLocaleDateString
  const dateString = !isNaN(dateObj.getTime()) ? dateObj.toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  }) : "Invalid date";

  const categoryClass = categoryStyles[blog.category as keyof typeof categoryStyles];
  console.log(categoryClass)

  return (
    <div>
    <a href={`/blog/${blog.slug}`}>
    <div className={`${styles.container} ${styles.card}`}>
      <div className={styles.card__header}>
        {/* Use Next.js Image for optimized image loading */}
        <Image src={`/${blog.slug}.jpg`}  alt="card__image" width={600} height={200} style={{
            maxWidth: '100%',
            maxHeight: '200px',
            objectFit: 'cover',
            marginBottom: '-30px',
          }} />
      </div>
      <div className={styles.card__body}>
        <span className={`${styles.tag} ${categoryClass}`}>{blog.category}</span>
        <h4 className={styles.title}>{blog.title}</h4>
        <p className={styles.content}>{blog.description}</p>
      </div>
      <div className={styles.card__footer}>
        <div className={styles.user}>
          <Image src="/HanYu Wu.jpg" alt="user__image" className={styles.user__image} height={60} width={60 }/>
          <div className={styles.user__info}>
            <h5>HanYu Wu</h5>
            <small className={styles.date}>{dateString}</small>
          </div>
        </div>
      </div>
    </div>
    </a>
    </div>
  );
};

export default BlogPreview;
