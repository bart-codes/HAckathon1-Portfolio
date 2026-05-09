import { Download } from "lucide-react";

export default function Hero() {
  const handleDownloadResume = () => {
    // Create a mock resume download
    const link = document.createElement('a');
    link.href = '#resume';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated background gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Brand name */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent mb-2">
            bart-codes
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Hero headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Full-Stack Developer
        </h2>

        {/* Bio */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 shadow-2xl">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Passionate MERN stack specialist crafting scalable web applications with{" "}
            <span className="text-green-400 font-semibold">MongoDB</span>,{" "}
            <span className="text-yellow-400 font-semibold">Express</span>,{" "}
            <span className="text-cyan-400 font-semibold">React</span>, and{" "}
            <span className="text-green-500 font-semibold">Node.js</span>.
            Building elegant solutions to complex problems.
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleDownloadResume}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
        >
          <Download className="w-5 h-5 group-hover:animate-bounce" />
          Download Resume
        </button>
      </div>
    </section>
  );
}
