import { AppShell } from './components/layout/AppShell';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Expertise } from './components/sections/Expertise';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { ProfessionalPhilosophy } from './components/sections/ProfessionalPhilosophy';
import { Contact } from './components/sections/Contact';

export function App() {
  return (
    <AppShell>
      <Hero />
      <About />
      <Expertise />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <ProfessionalPhilosophy />
      <Contact />
    </AppShell>
  );
}

export default App;

