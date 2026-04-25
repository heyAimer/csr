import { Link } from "react-router-dom";

export default function Herosection() {
  return (
    <section className=" flex items-center justify-center px-6 h-screen -mt-10">
      <div className="text-center">
        
        <h1 className="leading-tight">
          Discover Insights That Matter
        </h1>

        <p className="text-gray-600 pb-10 pt-4 px-10">
          Explore a curated collection of articles designed to inform, inspire, and demonstrate modern web performance across different rendering techniques.
        </p>

        <div className="flex justify-center gap-4 ">
          <Link
            to="/articles"
            className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-90 transition"
          >
            Explore Articles
          </Link>

          <Link
            to="/about"
            className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}