import React from 'react';
import style from "../components/navbar.module.css"
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className={style.navbar} >
      <h1 className={style.logo}> Han's Personal Website </h1>
      <nav className={style['nav-list']}>
        <Link href="/" >Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/portfolio">Portfolio</Link>
				<Link href="/resume" >Resume</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}