"use client"
import Link from "next/link";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <main>
      {/* ---------header------------ */}
     <header className={`header flex justify-end items-center transition-opacity duration-300 ${isSidebarOpen ? "opacity-50" : "opacity-100"}`}>
        <div>
          <Link href={"#home"} className="logo ">
            AsadullahShafique.
          </Link>
        </div>
        <nav className="navbar">
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger className="tablet:hidden">
              <Menu className="menu-icon mr-4" />
            </SheetTrigger>
            <SheetContent className="pt-4 text-3xl">
              <br />
              <br />
              <br />
              <Link href={"#home"} onClick={closeSidebar}>
                Home
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#about"} onClick={closeSidebar}>
                About
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#education"} onClick={closeSidebar}>
                Project
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#skills"} onClick={closeSidebar}>
                Skills
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#contact"} onClick={closeSidebar}>
                Contact
              </Link>
              <br />
            </SheetContent>
          </Sheet>
          <ul className="hidden tablet:flex gap-x-8 text-[1.7rem]">
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#home"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#education"}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#skills"}
              >
                Skills
              </Link>{" "}
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/*-------------- home section-------------- */}

      <section className={`home bg-[url('../../public/fullSizeImge1.jpg')] bg-cover bg-center transition-opacity duration-300 ${isSidebarOpen ? "opacity-50" : "opacity-100"}`} id="home">
        <div className="home-content">
          <h1>
            Hi, I'm<span> Asadullah Shafique</span>{" "}
          </h1>
          <div className="text-animated">
            <h3>Textile Engineer Cum Full-Stack Developer</h3>
          </div>
          <p>
            I'm a passionate Full Stack Developer currently honing my skills at
            GIAIC. On the front-end, I've mastered Next.js and Tailwind CSS,
            creating responsive and dynamic user interfaces. As I continue my
            journey, I’m diving deeper into back-end technologies to build
            comprehensive, full-stack applications. Stay tuned as I continue to
            expand my skill set and bring innovative ideas to life!
          </p>

          <div className="btn-box">
            <Link
              href={
                "https://www.linkedin.com/in/asadullah-shafique-a00679325/"
              }
              className="btn" target="_blank"
            >
              Hire me
            </Link>
            <Link
              href={
                "https://www.youtube.com/@asadullahshafique4261"
              }
              className="btn" target="_blank"
            >
              Lets talk
            </Link>
          </div>
          <div className="flex-space-x-4 home-sci">
            <Link
              href="https://www.facebook.com/asadullah.shafique"
              target="_blank"
              rel="noopener noreferrer"
              className="bx-bx1-linkedin"
            >
              <LinkedInIcon className="icon" sx={{ fontSize: 25 }} />
            </Link>
            <Link
              href={"ttps://github.com/asadullah48"}
              target="_blank"
              className="bx-bx1-github"
            >
              <GitHubIcon className="icon" sx={{ fontSize: 25 }} />
            </Link>
            <Link
              href={"https://www.instagram.com/shafiqueasadullah/"}
              target="_blank"
              className="bx-bx1-x"
            >
              <XIcon className="icon" sx={{ fontSize: 25 }} />
            </Link>
          </div>
        </div>

        <div className="home-imgHover"></div>
      </section>

      {/* --------------About Section------------- */}

      <section className="about" id="about">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
            
        <div className="about-image relative w-[25rem] h-[25rem] rounded-full flex justify-center items-center">
      <Image
        src="/dp.png" 
        alt="Profile Image"
        width={225}
        height={225}
        className="Image rounded-full border-[.2rem] border-[var(--main-color)]"
      />
      <span className="circle-spin absolute"></span>
    </div>

        <div className="about-content">
          <h2>Full Stack Developer</h2>
          <p className="about-para">
          Welcome to my portfolio! I am Asadullah Shafique, Textile Engineer Cum a passionate full-stack developer
          and aspiring <span className="font-bold">CERTIFIED CLOUD APPLIED GENERATIVE AI ENGINEER.</span> My portfolio highlights a diverse array of projects crafted with cutting-edge technologies 
          like Next.js. Through continuous learning and practical experience, 
          I am dedicated to improving user experiences and addressing real-world challenges with innovative web solutions.
        
          </p>

          <div className="btn-box btns">
            <a href="#about" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* -----------------------project section--------------------------- */}

      <section className="education" id="education">
        <h2 className="heading">
          My <span>Projects </span>
        </h2>

        <div className="education-row">
          <div className="education-column">
            {/* <h3 className="title">Education</h3> */}

            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>Resume Builder</h3>
                  </div>
                  <p>
                  A resume builder is an online tool designed to help you create professional resumes quickly and efficiently
                    <Link
                      href="https://hackathon-puce-six.vercel.app/"
                      className="text-blue-500 hover:underline ml-2"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>Dev Unity</h3>
                  </div>
                  <p>
                  The DEV Unity Community is a platform where developers share their knowledge, experiences, and projects. 
                  It's a great place to learn about Next.js and connect with other developers 
                  who are also working with this framework. You can find articles, tutorials, and discussions on various topics related to Next.js, 
                  including best practices, common issues, and innovative uses of the framework
                    <Link
                      href="https://asadullahshafique-devunity.vercel.app/"              className="text-blue-500 
                      hover:underline ml-2"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>Skill Enhancer</h3>
                  </div>
                  <p> A skill enhancement app is designed to help users improve their skills and knowledge in various areas. 
                    Online Onside Courses: Structured learning programs on different topics. Interactive Tutorials: Hands-on exercises and guided lessons. 
                    Quizzes and Assessments: Tools to test your understanding and track progress.
                    Videos and Webinars: Educational videos and live sessions with experts.
                    Practice Exercises: Activities to reinforce learning and build proficiency.
                    <Link
                      href="https://skill-enhancer.vercel.app/"
                      className="text-blue-500 hover:underline ml-2"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --------------2nd column----------- */}

          <div className="education-column">
            {/* <h3 className="title">Experience</h3> */}
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>Simple Calculate</h3>
                  </div>
                  <p>
                  Building a simple calculator in Next.js is a fantastic project for honing your React skills. Here's a brief overview of how such a project might be structured:
Key Features:
Basic Arithmetic Operations: Perform addition, subtraction, multiplication, and division.

Responsive Design: Ensure the calculator works well on both desktop and mobile devices.

State Management: Use React hooks like useState to manage the calculator's current input and results.

Component Structure: Break down the UI into reusable components like Display, Button, and ButtonPanel.
                    <Link
                      href="https://09-calculator-app.vercel.app/"
                      className="text-blue-500 
                      hover:underline ml-2"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>To-Do List</h3>
                  </div>
                  <p>
                  A simple to-do list application.
                  Users are prompted to enter tasks, which are added to a list. The program continues to ask for more tasks until the user confirms they are finished. Finally, the completed to-do list is displayed.
                    <Link
                      href=""
                      className="text-blue-500 
                       hover:underline ml-2"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <h3>Currency Converter</h3>
                  </div>
                  <p>
                  A currency converter with a user-friendly. Users can select the currency they want to convert from and to,
                  as well as enter the amount. The program utilizes a defined exchange rate object to calculate the equivalent amount in the desired currency. Finally, it displays the converted amount with clear formatting.
                    <Link
                      href="https://github.com/Tayyabkhalid993/PIAIC56/tree/main/NodeProjects/Other_Projects/Rock_Paper_sessior"
                      className="text-blue-500 
                       hover:underline ml-2"
                      target="_blank"
                    >
                      Read More
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------skill section--------------------------- */}
      <section className="skills" id="skills">
        <h2 className="heading">
          {" "}
          My <span>Skills</span>
        </h2>
            <h3 className="skill-title">Coding Skills</h3>

        <div className="skills-row">
          <div className="skills-column">

            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                    HTML <span>90%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    CSS <span>80%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    TypeScript <span>92%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Python <span>83%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                  <div className="bar">
                    <span></span>
                  </div>
              </div>
            </div>
          </div>

          {/* ----------------------For another Column--------------------------- */}

          <div className="skills-column">
            {/* <h3 className="title">Professional Skills</h3> */}
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>
                  Next.JS <span>95%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Tailwind CSS <span>85%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                    Express <span>82%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                <div className="progress">
                  <h3>
                  Node Js <span>83%</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
                  <div className="bar">
                    <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <center></center>
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form action="#">
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Full Name" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Address" required />
              <span className="focus"></span>
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input type="string" placeholder="Mobile Number" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Subject" required />
              <span className="focus"></span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Your Message"
              required
            ></textarea>
            <span className="focus"></span>
          </div>

          <div className="btn-box btns">
            <a href="#contact" className="btn">
              Submit
            </a>
          </div>
        </form>
      </section>

      {/* --------------footer-------------- */}

      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2024 by Tayyab | All Right Reserved.</p>
        </div>

        <div className="footer-iconTop">
          <Link href="/" className=" bg-cyan-500 bx-bx1-arrowUpWardIcon">
            <ArrowUpwardIcon className="icon" sx={{ fontSize: 25 }} />
          </Link>
        </div>
      </footer>
    </main>
  );
}