import { useParams } from "react-router-dom";
import useArticles from "../utils/useArticles";

export default function ArticleDetail() {
  const { id } = useParams();
  const { articles, loading, error } = useArticles();
  const decodedId = decodeURIComponent(id);

  const article = articles.find(
    (item) => item.title === decodedId
  );

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
  if (!article) return (
      <div className="h-[80vh] flex items-center justify-center">
      <p>No articles found</p>
      </div>
  )
  
  console.log("hllow articles: ", articles)

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {article.title}
      </h1>

      <div className="relative w-full h-64 rounded-xl overflow-hidden">
        <img
          src={article.image || '/image.jpg'}
          alt={article.title}
          className="w-full h-full object-cover"
            
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/image.jpg";
          }}
          />
      </div>

      <p className="text-gray-600 text-center px-4 md:px-10 text-lg pt-3 pb-10">
        {article.description}
      </p>

      <div className="bg-gray-100/90 rounded-xl p-8 shadow-sm text-gray-700 leading-relaxed text-justify">
          <p>
          This is a placeholder for the full article content. In a real
          application, this section would display detailed information fetched
          from a backend API.
          </p>

          <p className="py-4">
          The purpose of this project is to demonstrate how different rendering
          techniques affect performance and user experience in modern web
          applications.
          </p>

          <p>
          You can extend this by adding real content, images, and code examples
          when your backend API is ready.
          </p>
      </div>
    </section>
  )
}