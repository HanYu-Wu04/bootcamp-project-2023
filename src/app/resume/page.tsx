import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Resume() {
  return (
    <div>
      <Navbar/>
      <main>
        <h1 className="page-title">Han's Resume</h1>
        <a href='/Han_s_Resume.pdf'>Download Resume</a>
        <div className="resume">
            <section className="section">
                <h2 className="section-title">Education</h2>
                <div className="entry">
                    <h3 className="entry-title">California Polytechnic State University</h3>
                    <div className="entry-info">Degree: Bachelor of Science in Computer Science  |   Expected Graduation: May 2026</div>            
                </div>
            </section>
            <section className="section">
                <h2 className="section-title">Experience</h2>
                <div className="entry">
                    <h3 className="entry-title">Club Founder/President  | August 2021 - June 2022</h3>
                    <div className="entry-info">The Matcher</div>
                    <div className="entry-description">
                        <ul>
                            <li>Designed and developed an interactive website for club members</li>
                            <li>Planned and managed club activities, successfully organized and delivered various events</li>
                            <li>Tutored and mentored numerous students, encompassing a broad spectrum of subjects</li>
                            <li>Organized and conducted daily study sessions throughout each week</li>
                            <li>Mentored 100+ club members to enhance their dedication to college and future prospects since its inception</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section">
                <h2 className="section-title">Projects</h2>
                <div className="entry">
                    <h3 className="entry-title">PixelCraft</h3>
                    <div className="entry-info">Java, Git</div>
                    <div className="entry-description">
                        <ul>
                            <li>Developed a Minecraft-themed 2-D pixel world that allows user interactions</li>
                            <li>Designed and implemented an AStarPathingStrategy to perform A* search algorithm for pathfinding</li>
                            <li>Designed and developed interactive UI components, allowing users interactions</li>
                            <li>Contributed to the enhancement of the overall system architecture by identifying and reducing areas of high cohesion</li>
                        </ul>
                    </div>
                    <h3 className="entry-title">Walkie Talkie</h3>
                    <div className="entry-info">C</div>
                    <div className="entry-description">
                        <ul>
                            <li>Developed a program for message transportation using TCP between client and server</li>
                            <li>Designed and implemented functions to handle the client and server roles</li>
                            <li>Ensured compatibility with both IPv4 and IPv6 addresses by using appropriate data structures</li>
                        </ul>
                    </div>
                    <h3 className="entry-title">Personal Webiste</h3>
                    <div className="entry-info">HTML/CSS</div>
                    <div className="entry-description">
                        <ul>
                            <li>Implemented multiple pages using HTML and CSS</li>
                            <li>Focused on semantic HTML design</li>
                            <li>Used best practices for Git and GitHub</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section">
                <h2 className="section-title">Skills</h2>
                <ul className="skill-list">
                    <li>Python</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>Git Version Control</li>
                </ul>
            </section>
            <section className="section">
                <h2 className="section-title">Coursework</h2>
                <ul className="course-list">
                    <li>CSC202: Data Structures</li>
                    <li>CSC203: Project-Based Object-Oriented Programming and Design</li>
                    <li>CSC225: Introduction to Computer Organization</li>
                    <li>CSC248: Discrete Structure</li>
                    <li>CSC357: Systems Programming</li>
                    <li>CSC307: Introduction to Software Engineering</li>
                    <li>CSC349: Design and Analysis of Algorithms</li>
                </ul>
            </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}