import { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const notice = useRef(null);
  useEffect(() => {
    const dialog = notice.current;
    dialog.showModal();
    return () => dialog.close();
  }, []);
  return (
    <div className="bg-[var(--light)]">
      <dialog ref={notice} className="outdated-notice" aria-labelledby="outdated-title" aria-describedby="outdated-description">
        <div className="outdated-content">
          <p className="outdated-label">YOU’RE VIEWING MY OLD PORTFOLIO</p>
          <h2 id="outdated-title">This site is outdated.</h2>
          <p id="outdated-description">I’ve moved to a new engineering portfolio featuring my latest work in robotics, embedded systems, and chip design.</p>
          <a className="new-portfolio-button" href="https://joelbiswas.github.io/engineering-portfolio/">Visit my new portfolio <span aria-hidden="true">→</span></a>
          <form method="dialog"><button className="stay-on-old-site">Continue to the old site</button></form>
        </div>
      </dialog>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
