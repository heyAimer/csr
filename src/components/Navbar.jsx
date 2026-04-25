import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const navLink = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      pathname === path
        ? "bg-gray-100/60 text-black shadow-md hover:shadow-sm border-gray-300/60 border"
        : "text-gray-600 hover:text-black hover:bg-gray-100/60 hover:shadow-md hover:border-gray-300/60"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-gray-200/70 border-b border-b-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-lg font-semibold tracking-tight">
          RenderLab
        </Link>

        {/* Links */}
        <nav className="flex items-center gap-2">
          <Link to="/" className={navLink("/")}>
            Home
          </Link>
          <Link to="/articles" className={navLink("/articles")}>
            Articles
          </Link>
          <Link to="/about" className={navLink("/about")}>
            About
          </Link>
        </nav>

      </div>
    </header>
  );
}
