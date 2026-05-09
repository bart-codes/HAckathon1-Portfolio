import { useState } from "react";
import { Github, Linkedin, Instagram, Facebook, MessageCircle, Send, Mail } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/bart-codes", color: "hover:text-gray-400" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/bart-codes", color: "hover:text-blue-400" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/bart.codes", color: "hover:text-pink-400" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/bart.codes", color: "hover:text-blue-500" },
  { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/1234567890", color: "hover:text-green-400" }
];

export default function Contact() {
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSendEmail = () => {
    if (!message.trim()) return;

    // Create mailto link with the message
    const subject = "Message from bart-codes Portfolio";
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:bart@bartcodes.dev?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;

    // Show success message
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setMessage("");
    }, 3000);
  };

  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg">Get in touch for collaborations or just a friendly chat</p>
        </div>

        {/* Main contact card */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Social Links */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-blue-400" />
              Connect on Social
            </h3>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 px-6 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-full text-gray-300 font-medium transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-white/30 ${social.color}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-gray-900/50 text-gray-400 text-sm font-medium">OR</span>
            </div>
          </div>

          {/* Direct Message Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Mail className="w-6 h-6 text-purple-400" />
              Send a Quick Message
            </h3>
            <p className="text-gray-400 mb-6">Email me directly - I'll get back to you as soon as possible!</p>

            <div className="space-y-4">
              <div className="relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  rows={5}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                />
              </div>

              <button
                onClick={handleSendEmail}
                disabled={!message.trim()}
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                Send via Gmail
              </button>

              {showSuccess && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <p className="text-green-400 text-center font-medium">
                    Opening your email client... 📧
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">
              © 2026 <span className="text-blue-400 font-semibold">bart-codes</span>. Built with passion using the MERN stack.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Designed for developers, by a developer.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
