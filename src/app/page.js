
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className='text-white bg-slate-900'>
    <Header />
    <main>
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer /> 
    </div>
  )
}
