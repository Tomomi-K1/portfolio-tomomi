
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import projectData from './projectData';

export default function Home() {
  return (
    <div className='text-white bg-slate-900'>
    <Header />
    <main>
      <About />
      <Projects projects={projectData} />
      <Contact />
    </main>
    <Footer /> 
    </div>
  )
}
