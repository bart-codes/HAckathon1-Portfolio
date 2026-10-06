import { useRef, useState } from "react";
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react";

type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type BlogPost = {
  id: number;
  title: string;
  date?: string; // add a real date, e.g. "April 15, 2026". It only shows when set.
  excerpt: string;
  tag: string;
  readTime: string;
  content: Section[];
  links?: { label: string; href: string }[]; // add live demo / repo links when ready
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building SkillSwap: a MERN platform where people trade skills",
    excerpt:
      "How I put together matching, real-time chat and session scheduling with React, Express, MongoDB, JWT and Socket.io.",
    tag: "Full-Stack",
    readTime: "4 min read",
    // TODO: add date and links
    content: [
      {
        heading: "The idea",
        paragraphs: [
          "SkillSwap is a platform for skill exchange. People sign up, list what they can teach and what they want to learn, match with others, chat, and schedule sessions to teach each other.",
        ],
      },
      {
        heading: "The stack",
        bullets: [
          "Front end: React with Bootstrap",
          "Back end: Node.js and Express",
          "Database: MongoDB (local or Atlas)",
          "Authentication: JSON Web Tokens (JWT)",
          "Real-time messaging: Socket.io",
        ],
      },
      {
        heading: "How the API is organized",
        paragraphs: [
          "I planned the API around resources before building screens. Each one has its own routes: authentication, users, matches, connections, messages and sessions. Protected routes expect a bearer token in the Authorization header.",
        ],
        bullets: [
          "Users keep a bio plus two tag lists, teach_tags and learn_tags, which drive matching.",
          "A connection links two users around one specific skill.",
          "Messages belong to a connection, so every conversation stays tied to the skill being exchanged.",
          "Sessions record the teacher, the learner, the skill, the date and the duration, and their status can be updated, for example to Completed.",
        ],
      },
      {
        heading: "Running it locally",
        paragraphs: [
          "You need Node.js 14 or higher, MongoDB and npm or yarn. The server reads its settings from an environment file (the database address, a JWT secret and the port), so no secrets live in the code. The API runs on port 5000 and the React client on port 3000.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "SmartSeason: role-based field monitoring for farms",
    excerpt:
      "A React and Express app where admins coordinate fields and agents record crop progress, with field status computed automatically.",
    tag: "Full-Stack",
    readTime: "5 min read",
    // TODO: add date and links
    content: [
      {
        heading: "The problem",
        paragraphs: [
          "Farm operations that span several fields need one place to see which crops are where, who is responsible for each field, and which fields need attention. SmartSeason gives coordinators and field agents a shared view with the right level of access for each.",
        ],
      },
      {
        heading: "Two roles, two views",
        bullets: [
          "Admins (coordinators) create, edit and assign fields, read every agent's notes, manage agent accounts, and see dashboard totals for the whole farm.",
          "Field agents see only the fields assigned to them. They update the crop stage, add observation notes, and see dashboard numbers for their own workload.",
        ],
      },
      {
        heading: "The data model",
        paragraphs: [
          "Three entities carry the whole system: users (with an ADMIN or AGENT role), fields (name, crop type, planting date, current stage, status and assigned agent) and notes (written by an agent and tied to a field).",
          "Fields move through four stages: Planted, Growing, Ready and Harvested.",
        ],
      },
      {
        heading: "Status is computed, not typed in",
        paragraphs: [
          "I didn't want status to depend on someone remembering to set it, so it is calculated from the field's data:",
        ],
        bullets: [
          "Active: the field is in an active growing phase.",
          "At risk: updates are delayed, observations are missing, or the field has stayed in one stage for an unusually long time.",
          "Completed: the field has reached Harvested.",
        ],
      },
      {
        heading: "API and access control",
        paragraphs: [
          "The REST API checks the user's role on every request. Listing fields is filtered by role, creating fields, assigning them and managing agents are admin-only, and agents can update stages and add notes on their assigned fields. A dashboard endpoint returns role-aware summaries.",
        ],
      },
      {
        heading: "Stack and interface",
        paragraphs: [
          "The back end is Node.js and Express with SQLite, secured with JWT. The front end is React built with Vite. The interface uses a green agricultural theme, Crimson Pro and DM Sans for type, color-coded status badges, and a responsive layout. The demo data uses Kenyan names and farming regions, with maize, wheat, potatoes and barley.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "A secure student records system in PHP and MySQL",
    excerpt:
      "My capstone for the JP International examination: separate admin and student dashboards with prepared statements, hashed passwords, CSRF tokens and session timeouts.",
    tag: "Security",
    readTime: "4 min read",
    // TODO: add date and links
    content: [
      {
        heading: "The problem",
        paragraphs: [
          "Schools that keep records on paper or across scattered files struggle to retrieve data, track enrollment and progress, find course information in one place, produce reports, and protect sensitive student details. This capstone project replaces that with one centralized web application.",
        ],
      },
      {
        heading: "What each user can do",
        bullets: [
          "Admins manage students and courses (view, add, edit and delete), view reports and change system settings.",
          "Students see their enrolled courses, check their grades and open their profile settings.",
        ],
      },
      {
        heading: "Security was a core requirement",
        paragraphs: [
          "Because the system holds student data, I built these protections in from the start:",
        ],
        bullets: [
          "Prepared statements with mysqli, to prevent SQL injection.",
          "Hashed passwords (bcrypt) checked with password_verify().",
          "Session regeneration after login and a 30-minute inactivity timeout.",
          "CSRF token validation on the login form.",
          "Role-based access, so admin pages are never open to students.",
        ],
      },
      {
        heading: "Stack and setup",
        paragraphs: [
          "The project uses PHP 7.4+, MySQL 5.7+ or MariaDB, and HTML5 and CSS3 for the interface. It runs on XAMPP or Apache, or you can try it quickly with PHP's built-in server. The database is called student_project and starts with a single user table holding the username, a hashed password and a user type of student or admin.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Designing Lumina: privacy-first architecture for survivor support",
    excerpt:
      "A design blueprint for a trauma-informed platform: anonymous profiles, client-side encrypted journals, a quick-exit button and strict access control.",
    tag: "Architecture",
    readTime: "5 min read",
    // TODO: add date. Keep this post at concept level: no schema, keys or endpoint details.
    content: [
      {
        heading: "A design, not a shipped product",
        paragraphs: [
          "Lumina is a platform I have designed on paper: a safe place for sexual trauma survivors to find mental health support, share their stories and take part in activism. This post covers the architecture decisions, which came from one question: what does a platform need to do differently when its users may be at risk?",
        ],
      },
      {
        heading: "Principles first",
        bullets: [
          "Privacy by design: no data is collected without explicit consent.",
          "Survivor-centric: every feature follows trauma-informed care principles.",
          "Zero-knowledge where it matters: even administrators cannot read private content.",
        ],
      },
      {
        heading: "Ghost mode",
        paragraphs: [
          "Users can switch from a public activist profile to an anonymous one. In ghost mode, posts are tied to a random identifier instead of the account, identifying metadata is stripped, and addresses never use sequential numbers, which makes scraping harder.",
        ],
      },
      {
        heading: "Safe harbor: a quick exit",
        paragraphs: [
          "A visible quick-exit button, with a keyboard shortcut, clears the data kept in the browser and sends the user to a neutral website. It exists because someone may need to leave the page immediately.",
        ],
      },
      {
        heading: "Private journals",
        paragraphs: [
          "Journal entries are encrypted in the browser with AES-256-GCM before they reach the server, so the server only ever stores ciphertext.",
        ],
      },
      {
        heading: "Real-time and hardening",
        bullets: [
          "Story comments use WebSockets (Supabase Realtime or Socket.io) for a chat-style feel.",
          "A strict content security policy and extra security headers reduce the risk of XSS and data leaks.",
          "Role-based access control separates users, moderators and admins, and an audit log keeps actions accountable without exposing private content.",
        ],
      },
      {
        heading: "The stack",
        paragraphs: [
          "The plan uses Next.js (React) on the front end, Node.js on the back end and PostgreSQL for data.",
        ],
      },
    ],
  },
];

export default function Blog() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const activePost = blogPosts.find((post) => post.id === activeId) ?? null;

  const showPost = (id: number | null) => {
    setActiveId(id);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={sectionRef} id="blog" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            bart-codes <span className="text-blue-400">[Blog]</span>
          </h2>
          <p className="text-gray-400 text-lg">Notes from the projects I've built</p>
        </div>

        {activePost ? (
          /* Single post view */
          <article className="max-w-3xl mx-auto">
            <button
              type="button"
              onClick={() => showPost(null)}
              className="group flex items-center gap-2 text-blue-400 font-medium mb-8 hover:gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
            >
              <ArrowLeft className="w-4 h-4" />
              All posts
            </button>

            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                {activePost.tag}
              </span>
            </div>

            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {activePost.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-10">
              {activePost.date && (
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time>{activePost.date}</time>
                </span>
              )}
              <span>{activePost.readTime}</span>
            </div>

            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 space-y-8">
              {activePost.content.map((section) => (
                <div key={section.heading}>
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {section.heading}
                  </h4>
                  {section.paragraphs?.map((text, i) => (
                    <p key={i} className="text-gray-300 leading-relaxed mb-3">
                      {text}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="list-disc pl-6 space-y-2 text-gray-300 leading-relaxed marker:text-blue-400">
                      {section.bullets.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {activePost.links && activePost.links.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-8">
                {activePost.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-blue-300 font-medium transition-all hover:bg-white/10 hover:border-blue-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => showPost(null)}
              className="group flex items-center gap-2 text-blue-400 font-medium mt-10 hover:gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all posts
            </button>
          </article>
        ) : (
          /* Blog grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => showPost(post.id)}
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

                {/* Date and read time */}
                <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-4">
                  {post.date && (
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <time>{post.date}</time>
                    </span>
                  )}
                  <span>{post.readTime}</span>
                </div>

                {/* Excerpt */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Read more link (a real button, so keyboard users can open posts) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPost(post.id);
                  }}
                  aria-label={`Read more: ${post.title}`}
                  className="flex items-center gap-2 text-blue-400 font-medium group-hover:gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
