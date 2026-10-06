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
} from "lucide-react";

const resumeUrl = "/Resume.pdf";

const experience = [
  {
    title: "IT Technician",
    company: "Phentak Construction, Nakuru",
    period: "Sept 2023 - Aug 2024",
    // TODO: describe what you actually did here (support, networks, hardware, systems).
    // The description only shows when it is set.
    description: "",
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
  { name: "MS Office", icon: FileText, color: "text-blue-400" },
  { name: "Problem solving", icon: Lightbulb, color: "text-yellow-400" },
  { name: "Git & GitHub", icon: GitBranch, color: "text-orange-400" },
  { name: "Teamwork", icon: Users, color: "text-green-400" },
];

const awards = [
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
            Where I've worked, what I'm studying and what I'm building
          </p>
          <a
            href={resumeUrl}
            download
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
                    {job.description && (
                      <p className="text-gray-300">{job.description}</p>
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
                  <h3 className="text-3xl font-bold text-white">Awards</h3>
                </div>

                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-bold text-white mb-1">
                        {award.title}
                      </h4>
                      <p className="text-gray-300 text-sm">{award.issuer}</p>
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
