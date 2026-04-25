import { Link } from "react-router-dom";

export default function ArticleCards({ article }) {
  return (
    <div className="bg-gray-100/80 rounded-xl py-10 px-8 shadow-md hover:shadow-md transition border border-gray-200">
      
      <h3 className="text-2xl font-semibold text-gray-900 line-clamp-2">
        {article.title}
      </h3>

      <div className="text-sm text-gray-600 mt-2 line-clamp-3">
        {article.description || "A detailed exploration of modern rendering techniques and performance considerations."}
      </div>

      <div className="flex items-center justify-between mt-4">
        
        <Link
          to={`/articles/${article.id}`}
          className="text-sm font-medium text-black hover:underline"
        >
          Read more →
        </Link>

        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
          Web
        </span>

      </div>
      
    </div>
  );
}
