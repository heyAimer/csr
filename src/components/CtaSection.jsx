
import { Link } from "react-router-dom";
const CtaSection = () => {
  return (
    <section className="flex items-center justify-center px-6 h-screen pt-10">
      <div className=" text-center space-y-6 border border-gray-400 bg-gray-300 rounded-2xl px-20 py-30">
        
        <h2 className="text-3xl font-semibold">
          Ready to Explore More?
        </h2>

        <p className="text-gray-500 pb-10 pt-6 px-10">
          Dive deeper into articles comparing client-side and server-side rendering, and understand how modern web apps deliver performance.
        </p>

        <Link
          to="/articles"
          className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:opacity-90 transition"
        >
          View All Articles
        </Link>

      </div>
    </section>
  )
}

export default CtaSection
