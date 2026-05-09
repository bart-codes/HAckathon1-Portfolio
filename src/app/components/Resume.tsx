import { Briefcase, GraduationCap, Code2, Database, Server, Layout } from "lucide-react";

const experience = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    period: "2024 - Present",
    description: "Leading development of enterprise-scale MERN applications, mentoring junior developers, and architecting scalable microservices."
  },
  {
    title: "MERN Stack Developer",
    company: "StartupHub Inc.",
    period: "2022 - 2024",
    description: "Built and maintained customer-facing web applications using MongoDB, Express, React, and Node.js, serving 100K+ active users."
  },
  {
    title: "Junior Web Developer",
    company: "Digital Innovations",
    period: "2020 - 2022",
    description: "Developed responsive web interfaces and RESTful APIs, collaborated with design team to implement pixel-perfect UIs."
  }
];

const skills = [
  { name: "MongoDB", icon: Database, color: "text-green-400" },
  { name: "Express.js", icon: Server, color: "text-yellow-400" },
  { name: "React", icon: Layout, color: "text-cyan-400" },
  { name: "Node.js", icon: Code2, color: "text-green-500" },
  { name: "TypeScript", icon: Code2, color: "text-blue-400" },
  { name: "REST APIs", icon: Server, color: "text-purple-400" },
  { name: "GraphQL", icon: Database, color: "text-pink-400" },
  { name: "Docker", icon: Server, color: "text-blue-500" }
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Tech University",
    period: "2016 - 2020",
    honors: "Graduated with Honors, GPA: 3.8/4.0"
  }
];

export default function Resume() {
  return (
    <section id="resume" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            View My <span className="text-purple-400">Resume</span>
          </h2>
          <p className="text-gray-400 text-lg">A comprehensive overview of my professional journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-blue-500/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900" />
                    <h4 className="text-xl font-bold text-white mb-1">{job.title}</h4>
                    <p className="text-blue-400 font-medium mb-1">{job.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{job.period}</p>
                    <p className="text-gray-300">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-purple-400 font-medium mb-1">{edu.school}</p>
                    <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                    <p className="text-gray-300">{edu.honors}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="lg:col-span-1">
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                  <Code2 className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">Skills</h3>
              </div>

              <div className="space-y-4">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 backdrop-blur-sm bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                      <Icon className={`w-5 h-5 ${skill.color}`} />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>

              {/* MERN Stack Highlight */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl">
                <p className="text-center text-sm font-semibold text-blue-300">
                  MERN Stack Specialist
                </p>
                <div className="flex justify-center gap-2 mt-2">
                  <span className="text-green-400 font-bold">M</span>
                  <span className="text-yellow-400 font-bold">E</span>
                  <span className="text-cyan-400 font-bold">R</span>
                  <span className="text-green-500 font-bold">N</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
