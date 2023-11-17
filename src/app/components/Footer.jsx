import React from 'react';
import style from './footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      © {new Date().getFullYear()} Han's Personal Website | All Rights Reserved
    </footer>
  );
};

export default Footer;
