export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      
      <div className="text-center space-y-4">
        <h3 className="text-4xl font-bold">
          About This Project
        </h3>
        <p className="text-gray-600 px-10 text-lg">
          A practical demonstration of modern web rendering techniques using
          real-world examples.
        </p>
      </div>

      <div className="bg-gray-100/96 rounded-xl p-8 shadow-sm space-y-4">
        <h3 className="text-2xl font-semibold">
          What is RenderLab?
        </h3>
        <p>
          RenderLab is a web application built to explore and compare different
          rendering strategies used in modern web development, specifically
          Client-Side Rendering (CSR) and Server-Side Rendering (SSR).
        </p>
        <p>
          The goal of this project is to demonstrate how these approaches impact
          performance, user experience, and search engine optimization.
        </p>
      </div>

      <div className="bg-gray-100/96 rounded-xl p-8 shadow-sm space-y-4">
        <h3 className="text-2xl font-semibold">
          Why Compare CSR and SSR?
        </h3>
        <p>
          Modern web applications rely on different rendering techniques based
          on their use case. This project highlights the key differences between
          CSR and SSR by implementing the same interface using both approaches.
        </p>

        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>CSR handles rendering in the browser using JavaScript.</li>
          <li>SSR generates HTML on the server before sending it to the client.</li>
          <li>Each approach has trade-offs in performance and SEO.</li>
        </ul>
      </div>

      <div className="bg-gray-100/96 rounded-xl p-8 shadow-sm space-y-4">
        <h3 className="text-2xl font-semibold">
          About the Developer
        </h3>
        <p>
          This project is developed as part of a final year BCA project to gain
          hands-on experience with modern frontend technologies and rendering
          techniques.
        </p>
        <p>
          Built using React (Vite) for CSR and Next.js for SSR, along with
          Tailwind CSS for UI design.
        </p>
      </div>

    </section>
  );
}