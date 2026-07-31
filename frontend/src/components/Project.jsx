import React, { useState } from "react";
import { ExternalLink, CheckSquare, Brain, Clock } from "lucide-react";

const projects = [
  {
    title: "Todo App",
    desc: "A modern Todo application with Local Storage support, allowing users to create, update, complete, and delete tasks with persistent data.",
    tags: ["React.js", "JavaScript ES6+", "Tailwind CSS", "HTML5", "Local Storage API", "Vite"],
    status: "completed",
    link: "https://todo-app-fuyb.vercel.app",
    image: "./Todo thumbnail.PNG",
    
    accent: "#7ec699",
  },
  {
    title: "TRENDCART",
    desc: "A modern MERN Stack eCommerce platform featuring secure authentication, product management, shopping cart, wishlist, reviews, and an intuitive admin dashboard.",
    tags: [
      "React.js", "Vite", "Tailwind CSS", "React Router", "TanStack Query", "Axios",
      "React Hook Form", "React Toastify", "Framer Motion",
      "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Cloudinary", "Multer",
    ],
    status: "completed",
    link: "https://trendcart1.vercel.app",
    image:
      "./Trendcart thumbnail.jpg",
    Icon: null,
    accent: "#7aa2f7",
  },
  {
    title: "studynovaAi",
    desc: "An AI-powered study assistant that helps students learn smarter with intelligent question answering, summaries, and personalized study support.",
    tags: ["React.js", "Vite", "Tailwind CSS", "React Router", "Axios", "Node.js", "Express.js", "AI API Integration", "REST API"],
    status: "in-progress",
    link: null,
    image: null,
    Icon: Brain,
    accent: "#c792ea",
  },
];

const TAG_LIMIT = 6;

function StatusBadge({ status }) {
  const isDone = status === "completed";
  return (
    <span
      className="aw-mono inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border shrink-0"
      style={{
        color: isDone ? "#7ec699" : "#e0af68",
        borderColor: isDone ? "#1f3a29" : "#3a3020",
        background: isDone ? "#101a13" : "#1a150c",
      }}
    >
      {isDone ? (
        <>
          <span className="w-1.5 h-1.5 rounded-full bg-[#7ec699]" />
          Completed
        </>
      ) : (
        <>
          <Clock size={11} />
          In progress
        </>
      )}
    </span>
  );
}

function ProjectVisual({ project }) {
  const { image, Icon, accent, title } = project;

  if (image) {
    return (
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
    );
  }

  return (
    <div
      className="w-full h-48 flex items-center justify-center relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${accent}22, #12141c)` }}
    >
      <div
        className="absolute w-40 h-40 rounded-full blur-3xl opacity-30"
        style={{ background: accent }}
      />
      <Icon size={48} style={{ color: accent }} className="relative" />
    </div>
  );
}

function ProjectCard({ project }) {
  const { title, desc, tags, status, link, accent } = project;
  const [expanded, setExpanded] = useState(false);
  const visibleTags = expanded ? tags : tags.slice(0, TAG_LIMIT);
  const extra = tags.length - TAG_LIMIT;

  return (
    <div
      className="aw-card group relative rounded-2xl border border-[#232838] bg-[#12141c] overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 20px 45px -22px ${accent}66`)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <ProjectVisual project={project} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-3">
          <h3 className="aw-ui text-lg font-semibold text-[#e6e9f0]">{title}</h3>
          <StatusBadge status={status} />
        </div>

        <p className="aw-ui text-sm text-[#8b93a7] leading-relaxed mb-5">{desc}</p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="aw-mono text-[11px] px-2 py-1 rounded-md border border-[#232838] text-[#8b93a7]"
            >
              {tag}
            </span>
          ))}
          {extra > 0 && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="aw-mono text-[11px] px-2 py-1 rounded-md border border-[#232838] text-[#5b6472] hover:text-[#e6e9f0] hover:border-[#7aa2f7] transition-colors"
            >
              {expanded ? "Show less" : `+${extra} more`}
            </button>
          )}
        </div>

        <div className="mt-auto">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="aw-ui group/btn inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg text-[#0b0e14] transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: `linear-gradient(90deg, ${accent}, #7aa2f7)` }}
            >
              Live demo
              <ExternalLink size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          ) : (
            <span className="aw-ui inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg text-[#5b6472] border border-[#232838] cursor-not-allowed">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#0b0e14] text-white px-6 py-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600&family=Inter:wght@400;500;600;700;800&display=swap');
        .aw-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .aw-ui { font-family: 'Inter', system-ui, sans-serif; }
        @keyframes aw-fade-up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .aw-enter { animation: aw-fade-up 0.5s ease both; }
        @media (prefers-reduced-motion: reduce) { .aw-enter { animation: none !important; } }
      `}</style>

      <div className="text-center mb-16">
        <p className="aw-mono text-sm uppercase tracking-[0.3em] text-[#7aa2f7] mb-3">
          Portfolio
        </p>

        <h1 className="aw-ui text-5xl md:text-6xl font-bold mb-4">Projects</h1>

        <div className="w-20 h-1 bg-[#7aa2f7] mx-auto rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div key={project.title} className="aw-enter" style={{ animationDelay: `${i * 0.08}s` }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}