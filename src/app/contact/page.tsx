import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <div>
      <Navbar/>
      <main>
        <h1 className="page-title">Contact</h1>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" required />
          <br /><br />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />
          <br /><br />
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            name="comments"
            placeholder="Comments"
            required
          ></textarea>
          <br /><br />
          <input type="submit" value="Submit" />
        </form>
        <p className="social-links">
          <a href="https://github.com/HanYu-Wu04">
            <Image src="/GitHub-logo.png" alt="GitHub" width={60} height={60} />
          </a>
          <a href="https://linkedin.com/in/hanyu-wu04">
            <Image src="/LinkedIn-logo.png" alt="LinkedIn" width={60} height={60} />
          </a>
        </p>
      </main>
      <Footer/>
    </div>
  );
}