import { Container } from './Container';
import { Navbar } from '../navigation/Navbar';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border-subtle">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md focus:shadow-lg focus:outline-2 focus:outline-focus font-medium text-sm"
      >
        Skip to main content
      </a>

      <Container>
        <Navbar />
      </Container>
    </header>
  );
}

export default Header;
