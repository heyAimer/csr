import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gray-300/30 border-t border-t-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10 flex justify-between">
        
        {/* Brand */}
        <div>
          <h2 className="text-lg font-semibold">RenderLab</h2>
          <div className="text-md text-gray-600 mt-2">
            Exploring modern rendering techniques through real-world examples.
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm text-center font-semibold mb-3">Navigation</h3>
          <ul className="gap-10 text-sm text-gray-600 flex">
            <li>
              <Link to="/" className="hover:text-black">Home</Link>
            </li>
            <li>
              <Link to="/articles" className="hover:text-black">Articles</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-black">About</Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-t-gray-400/40 text-center text-sm text-gray-600 py-4">
        © {new Date().getFullYear()} RenderLab. All rights reserved.
      </div>
    </footer>
  );
}