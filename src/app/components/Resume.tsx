import {
  Briefcase,
  GraduationCap,
  Code2,
  Award,
  Languages,
  FileText,
  Lightbulb,
  GitBranch,
  Users,
  Download,
  Github,
} from "lucide-react";
import resumeUrl from "../../../Resume.pdf?no-inline";

const projects = [
  {
    label: "SkillSwap",
    description:
      "MERN skill-exchange platform with user matching, real-time chat and session scheduling.",
    stack: "React, Bootstrap, Node.js, Express, MongoDB, JWT, Socket.io",
    href: "https://github.com/bart-codes/skilswap-final-capstone",
  },
  {
    label: "SmartSeason",
    description:
      "Role-based farm monitoring app for field assignments, crop updates, notes and dashboards.",
    stack: "React, Vite, Node.js, Express, SQLite, JWT",
    href: "https://github.com/bart-codes/SmartSeason_Field_Monitorig_System",
  },
  {
    label: "Student Records Management System",
    description:
      "Student and admin dashboards for managing records, courses, grades and reports, with security controls.",
    stack: "PHP, MySQL, HTML, CSS; prepared statements, password hashing, CSRF protection",
    href: "https://github.com/bart-codes/Student-records-management-systems",
  },
  {
    label: "Lumina | Privacy-first support platform",
    description:
      "Architecture design only, not a shipped product. Covers anonymous profiles, encrypted journals, a quick-exit flow and strict access control.",
    stack: "Design concept: Next.js, Node.js, PostgreSQL, AES-256-GCM",
  },
];

const experience = [
  {
    title: "IT Technician",
    company: "Phentak Construction, Nakuru",
    period: "Sept 2023 - Aug 2024 | On-site",
    responsibilities: [
      "Installed and updated Windows, Ubuntu, SDP3 and Archicad architectural design software.",
    ],
  },
  {
    title: "Freelance IT Technician",
    company: "On-call support for students at homes and schools",
    period: "Freelance",
    responsibilities: [
      "Diagnosed hardware and software issues, troubleshot faults, repaired devices and replaced faulty parts.",
      "Backed up and restored systems with Acronis and managed backup storage.",
    ],
  },
];

const education = [
  {
    degree: "Certificate in MERN",
    school: "PLP Academy, Nairobi",
    period: "July 2025 - Present",
    note: "Enrolled in the July 2025 cohort.",
  },
  {
    degree: "Diploma in Software Engineering",
    school: "K.I.S.E (Kenya Institute of Software Engineering), Thika",
    period: "Jan 2025 - 2026",
    note: "Studying on site.",
  },
];

const skills = [
  { name: "MongoDB, Express, React & Node.js", icon: Code2, color: "text-cyan-400" },
  { name: "PHP, MySQL & SQLite", icon: Code2, color: "text-purple-400" },
  { name: "JavaScript, TypeScript, HTML & CSS", icon: Code2, color: "text-yellow-400" },
  { name: "JWT, REST APIs & Socket.io", icon: Code2, color: "text-green-400" },
  { name: "Vite, Bootstrap & Git/GitHub", icon: GitBranch, color: "text-orange-400" },
  { name: "Acronis backup & restore; backup storage management", icon: Briefcase, color: "text-blue-400" },
  { name: "Hardware/software diagnostics, troubleshooting, repair & part replacement", icon: Briefcase, color: "text-cyan-400" },
  { name: "Windows, Ubuntu, SDP3 & Archicad installation and updates", icon: Briefcase, color: "text-indigo-400" },
  { name: "MS Office", icon: FileText, color: "text-blue-400" },
  { name: "Problem solving", icon: Lightbulb, color: "text-yellow-400" },
  { name: "Teamwork", icon: Users, color: "text-green-400" },
];

const awards = [
  {
    title: "Cisco IT Support Basics",
    issuer: "Cisco Networking Academy",
  },
  {
    title: "Google Analytics Certification",
    issuer: "Google Skillshop",
  },
  {
    title: "Certificate in Software",
    issuer: "Issued by the A.E.T.E.B board of examiners",
  },
  {
    title: "Certificate in MERN",
    issuer: "PLP Academy, Nairobi",
  },
  {
    title: "Diploma in Software Engineering",
    issuer: "K.I.S.E (Kenya Institute of Software Engineering), Thika",
  },
];

const languages = ["Swahili", "English", "Kikuyu"];

export default function Resume() {
  return (
    <section id="resume" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            View My <span className="text-purple-400">Resume</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Full-stack development, IT support, projects and certifications
          </p>
          <a
            href={resumeUrl}
            download="Brian-Muturi-Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Experience */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-blue-500/30"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900" />
                    <h4 className="text-xl font-bold text-white mb-1">
                      {job.title}
                    </h4>
                    <p className="text-blue-400 font-medium mb-1">
                      {job.company}
                    </p>
                    <p className="text-gray-400 text-sm mb-3">{job.period}</p>
                    {job.responsibilities.length > 0 && (
                      <ul className="list-disc space-y-1 pl-5 text-gray-300">
                        {job.responsibilities.map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                  <Code2 className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">Projects</h3>
              </div>

              <div className="space-y-6">
                {projects.map((project) => (
                  <div
                    key={project.label}
                    className="relative pl-6 border-l-2 border-cyan-500/30"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full border-2 border-gray-900" />
                    <h4 className="text-xl font-bold text-white mb-1">
                      {project.label}
                    </h4>
                    <p className="text-gray-300 mb-2">{project.description}</p>
                    <p className="text-gray-400 text-sm mb-2">
                      {project.stack}
                    </p>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-6 border-l-2 border-purple-500/30"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full border-2 border-gray-900" />
                    <h4 className="text-xl font-bold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-purple-400 font-medium mb-1">
                      {edu.school}
                    </p>
                    <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                    <p className="text-gray-300">{edu.note}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Side column */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Skills */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
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
                        <span className="text-white font-medium">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Awards */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    Certifications &amp; Badges
                  </h3>
                </div>

                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4"
                    >
                      <Award className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                      <div>
                        <h4 className="text-base font-bold text-white">
                          {award.title}
                        </h4>
                        <p className="text-gray-300 text-sm">{award.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-pink-500/20 rounded-lg border border-pink-500/30">
                    <Languages className="w-6 h-6 text-pink-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Languages</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {languages.map((language) => (
                    <span
                      key={language}
                      className="px-4 py-2 backdrop-blur-sm bg-white/5 rounded-full border border-white/10 text-white font-medium"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
