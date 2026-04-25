'use client'
import { Link } from "react-router-dom";
import useArticles from "../utils/useArticles";
import ArticleCards from "./ArticleCards";

export default function Articles() {
  const { articles, loading, error } = useArticles();

  const articlesdata = articles;
  console.log(articlesdata)

  if (loading) return (
    <div className="h-[80vh] flex items-center justify-center">
      <p className="text-2xl font-semibold">Loading...</p>
    </div>
  );
  if (error) return (
    <div className="h-[80vh] flex items-center justify-center">
      <p>{error}</p>
    </div>
  );
  if (!articlesdata.length) return (
    <div className="h-[80vh] flex items-center justify-center">
      <p>No articles found</p>
    </div>
  )
  
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      
      <h3 className="text-5xl font-semibold mb-10">
        All Articles
      </h3>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {Array.isArray(articlesdata) ?(articlesdata.map((article) =>
        (
          <Link  to={`/articles/${encodeURIComponent(article.title)}`} key={article.title}
          >
            <ArticleCards article={article} />
          </Link>
        ))) : (
            <div className="h-[80vh] flex items-center justify-center">
                <p>No articles found</p>
            </div>
        )}
      </div>

    </section>
  );
}
