import React from 'react';

const Blog = ({ title, date, content }) => {
  return (
    <main>
      <h1 className="blog-title">{title}</h1>
      <p className="blog-date">Date: {date}</p>
      <div className="blog-content">
        <p>{content}</p>
      </div>
    </main>
  );
};

export default Blog;
