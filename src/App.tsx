import { AppShell } from './components/layout/AppShell';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';

export function App() {
  return (
    <AppShell>
      <Hero />
      <About />
      <Projects />
    </AppShell>
  );
}

export default App;

