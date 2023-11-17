// pages/blog.tsx
import React from "react";
import BlogPreview from "../../components/blogPreview";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../components/blogPreview.module.css";

const ucsb_Blog: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1 className="styles.title">UCSB Blog</h1>
        <p className="styles.date">Date: 2023-10-21</p>
        <div className="styles.content">
          <p>Walking, Wondering, Taking Pictures</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ucsb_Blog;
