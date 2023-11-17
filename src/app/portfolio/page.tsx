import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <main>
        <h1 className="page-title">Portfolio</h1>
        Hello World! This is my website.
        <div className="project">
          <Link href="/"> 
            <Image src="/HomePage.png" alt="Han's Personal Webiste" width={400} height={300}></Image>
          </Link>
              <div className="project-details">
                <div className="project-name">My Personal Website</div>
                <div className="project-description">Personal Website that Implemented CSS and HTML</div>
                <div>
                  <Link href="/">Learn More</Link>
                </div>
              </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}