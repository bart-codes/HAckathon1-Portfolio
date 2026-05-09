import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable APIs with Express and MongoDB",
    date: "April 15, 2026",
    excerpt: "Learn how to design and implement RESTful APIs that can handle millions of requests while maintaining clean architecture and optimal performance.",
    tag: "Backend"
  },
  {
    id: 2,
    title: "React Server Components: The Future of React",
    date: "April 10, 2026",
    excerpt: "Dive deep into React Server Components and discover how they're revolutionizing the way we build modern web applications with better performance.",
    tag: "Frontend"
  },
  {
    id: 3,
    title: "Optimizing MongoDB Queries for Production",
    date: "April 5, 2026",
    excerpt: "Practical tips and techniques to improve your MongoDB query performance, reduce load times, and create efficient database indexes.",
    tag: "Database"
  },
  {
    id: 4,
    title: "Full-Stack Authentication with JWT and Refresh Tokens",
    date: "March 28, 2026",
    excerpt: "A comprehensive guide to implementing secure authentication in your MERN applications using JSON Web Tokens and refresh token rotation.",
    tag: "Security"
  }
];

export default function Blog() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            bart-codes <span className="text-blue-400">[Blog]</span>
          </h2>
          <p className="text-gray-400 text-lg">Thoughts, tutorials, and insights on modern web development</p>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 cursor-pointer"
            >
              {/* Tag */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                  {post.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>

              {/* Date */}
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <Calendar className="w-4 h-4" />
                <time>{post.date}</time>
              </div>

              {/* Excerpt */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Read more link */}
              <div className="flex items-center gap-2 text-blue-400 font-medium group-hover:gap-3 transition-all">
                Read more
                <ArrowRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
