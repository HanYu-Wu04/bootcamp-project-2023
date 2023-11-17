import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main>
        <h1 className="page-title">Welcome to My Personal Website</h1>
        <div className="about">
            <div className="about-image">
                <Image src={"/HanYu Wu.jpg"} alt="Selfie" width={300} height={320}/>
            </div>
            <div className="about-text">
                <p>My name is <strong>HanYu Wu</strong></p>
                <p>I am a second year <strong>Computer Science Major</strong> at CPSLO</p>
                <p>My hobbies are hiking and photography</p>
            </div>
        </div>  
    </main>
    <Footer/>
    </div>
  );
}