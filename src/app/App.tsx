import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Main content */}
      <main className="relative">
        <Hero />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}