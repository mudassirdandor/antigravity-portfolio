import { AppShell } from './components/layout/AppShell';
import { SectionFrame } from './components/layout/SectionFrame';
import { Container } from './components/layout/Container';

export function App() {
  return (
    <AppShell>
      {/* Structural frame for planned single-page portfolio sections */}
      <SectionFrame id="home" className="py-8 md:py-12">
        <Container>
          {/* Milestone 3 will establish the Hero section here */}
        </Container>
      </SectionFrame>

      {/* Target anchor nodes for planned milestone sections */}
      <div id="about" tabIndex={-1} aria-hidden="true" />
      <div id="work" tabIndex={-1} aria-hidden="true" />
      <div id="experience" tabIndex={-1} aria-hidden="true" />
      <div id="education" tabIndex={-1} aria-hidden="true" />
      <div id="credentials" tabIndex={-1} aria-hidden="true" />
      <div id="contact" tabIndex={-1} aria-hidden="true" />
    </AppShell>
  );
}

export default App;
