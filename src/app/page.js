"use client";

import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import projectData from "./projectData";

export default function Home() {
  console.log(
    "%c Thank you for visiting my portfolio!! ",
    "color: white; font-size: 24px;background-color:green"
  );
  console.log(
    "%c You must be a developer checking on my code! Please feel free to give me any feedback through the contact form😊",
    "color:yellow"
  );
  console.log(
    "%c When I am not coding, I love to sing, swim, and hike😆",
    "color:yellow"
  );

  return (
    <div className="text-white bg-slate-900">
      {/* <div className='text-brown bg-yellow-100'> */}
      <Header />
      <main>
        <About />
        <Projects projects={projectData} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
