"use client";
export default function PortfolioWebsite() {
  const skills = [
    "Python",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "AI Chatbots",
    "Automation",
    "Arduino",
    "API Integration",
  ];

  const projects = [
    {
      title: "AI Study Assistant",
      description:
        "An AI-powered study assistant designed to help students learn concepts, organize notes, and simplify technical subjects.",
      tech: ["React", "AI APIs", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      github: "https://github.com/yourusername/project1",
      live: "https://yourprojectlink.com",
    },
    {
      title: "Arduino Mood Lighting System",
      description:
        "Built a customizable Arduino-based lighting system with sensor logic, automation, and Tinkercad simulation support.",
      tech: ["Arduino", "C++", "Tinkercad"],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      github: "https://github.com/yourusername/project2",
      live: "https://yourprojectlink.com",
    },
    {
      title: "AI/ML Mini Projects",
      description:
        "Worked on beginner-friendly machine learning systems using prediction models and automation concepts.",
      tech: ["Python", "Machine Learning", "Scikit-learn"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      github: "https://github.com/yourusername/project3",
      live: "https://yourprojectlink.com",
    },
    {
      title: "Frontend Landing Pages",
      description:
        "Designed responsive modern landing pages with clean UI/UX and smooth layouts for digital products.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
      github: "https://github.com/yourusername/project4",
      live: "https://yourprojectlink.com",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-4">
              AI Developer • Web Developer • Freelancer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Ayaman
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Shaikh
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              I build modern websites, AI-powered tools, automation systems,
              and responsive digital experiences focused on performance,
              creativity, and clean user experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition">
                View Projects
              </button>

              <button className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition">
                Contact Me
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full" />

              <img
                src="/portfolio.png"
                alt="Profile"
                className="relative w-80 h-80 object-cover rounded-3xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>

            <p className="text-gray-300 leading-relaxed text-lg">
              I'm an aspiring AI and web developer passionate about building
              futuristic digital experiences. I enjoy working on AI tools,
              responsive frontend interfaces, automation systems, and modern web
              technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white/[0.03] border-y border-white/10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-2">
                Portfolio
              </p>
              <h2 className="text-4xl font-bold">Featured Projects</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group p-8 rounded-3xl bg-black border border-white/10 hover:border-cyan-400/40 hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover rounded-2xl mb-6 border border-white/10"
                />

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-cyan-400 text-black font-medium hover:scale-105 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-2">
            Services
          </p>

          <h2 className="text-4xl font-bold">What I Offer</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "AI Chatbot Development",
            "Frontend Website Design",
            "Automation Solutions",
            "Responsive Landing Pages",
            "Python Development",
            "Portfolio Websites",
          ].map((service) => (
            <div
              key={service}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-12 text-center">
          <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm mb-3">
            Contact
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Amazing
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Available for freelance work, AI projects, frontend development,
            and automation solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition">
              Email Me
            </button>

            <button className="px-6 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition">
              Fiverr Profile
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
