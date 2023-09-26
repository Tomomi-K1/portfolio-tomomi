import Image from 'next/image';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <About />
      <Projects />
      <Contact />

    </main>
    </>
  )
}
