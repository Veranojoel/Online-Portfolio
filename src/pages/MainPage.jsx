import NavComponent from "../components/NavComponent";
import { titleStyle } from "../components/ComponentsCSS";
import { Link } from "react-router-dom";

function MainPage({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-neutral-100 to-neutral-300">
      <NavComponent />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-800 text-neutral-300 py-8 mt-auto">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Branding */}
            <div className="text-center md:text-left">
              <Link to="/" className={titleStyle}>
                Joel Verano
              </Link>
              <p className="text-sm text-neutral-400">
                Building digital experiences
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="mailto:email@example.com"
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                Email
              </a>
            </div>
          </div>

          {/* Divider & Copyright */}
          <div className="border-t border-neutral-700 mt-6 pt-6 text-center text-sm text-neutral-400">
            <p>
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
