// pages/blog.tsx
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../components/blogPreview.module.css";

const cooking_Steak: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1 className="styles.title">Cooking Blog</h1>
        <p className="styles.date">Date: 2023-09-20</p>
        <div className="styles.content">
          <p>Make It With Love</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default cooking_Steak;
