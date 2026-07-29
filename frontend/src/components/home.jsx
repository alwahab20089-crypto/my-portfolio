import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Code2, Server, Palette } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Frontend Development",
    desc: "Building responsive and interactive UI with React and Tailwind CSS.",
    Icon: Code2,
    color: "#7aa2f7",
  },
  {
    n: "02",
    title: "Backend Development",
    desc: "Creating APIs and server-side logic with Node.js and Express.",
    Icon: Server,
    color: "#e0af68",
  },
  {
    n: "03",
    title: "UI/UX Design",
    desc: "Designing clean, user-friendly interfaces with modern trends.",
    Icon: Palette,
    color: "#c792ea",
  },
];

const Home = () => {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(1100px 550px at 10% 0%, rgba(122,162,247,0.14), transparent 60%), radial-gradient(900px 500px at 95% 100%, rgba(224,175,104,0.10), transparent 60%), #0b0e14",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600&family=Inter:wght@400;500;600;700;800&display=swap');
        .aw-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .aw-ui { font-family: 'Inter', system-ui, sans-serif; }

        @keyframes aw-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes aw-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes aw-ring-spin { to { transform: rotate(360deg); } }
        @keyframes aw-fade-up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .aw-dot { animation: aw-pulse 2s ease-in-out infinite; }
        .aw-float-1 { animation: aw-float 5s ease-in-out infinite; }
        .aw-float-2 { animation: aw-float 6s ease-in-out infinite 0.4s; }
        .aw-ring::before {
          content: ''; position: absolute; inset: -4px; border-radius: 1.5rem; padding: 2px;
          background: conic-gradient(from 0deg, #7aa2f7, #c792ea, #e0af68, #7ec699, #7aa2f7);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          animation: aw-ring-spin 8s linear infinite;
        }
        .aw-enter { animation: aw-fade-up 0.6s ease both; }
        .aw-card:hover .aw-arrow { transform: translate(2px, -2px); }
        .aw-arrow { transition: transform 0.25s ease; }
        .aw-btn-primary { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .aw-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px -8px rgba(122,162,247,0.45); }

        @media (prefers-reduced-motion: reduce) {
          .aw-dot, .aw-float-1, .aw-float-2, .aw-ring::before, .aw-enter { animation: none !important; }
        }
      `}</style>

      {/* subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="aw-enter">
          <div className="aw-mono inline-flex items-center gap-2 text-xs text-[#7ec699] border border-[#1f2a22] bg-[#101812] rounded-full px-3 py-1.5 mb-6">
            <span className="aw-dot w-1.5 h-1.5 rounded-full bg-[#7ec699]" />
            available for work
          </div>

          <h1 className="aw-ui text-4xl sm:text-5xl font-extrabold text-[#e6e9f0] leading-tight mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#7aa2f7] to-[#c792ea] bg-clip-text text-transparent">
              Abdul Wahab
            </span>
            <br />I build modern web experiences
          </h1>

          <p className="aw-ui text-[#8b93a7] text-lg mb-8 leading-relaxed max-w-md">
            I design and develop clean, responsive, and full-stack web
            applications using the MERN stack — from database to UI.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="aw-ui aw-btn-primary group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#0b0e14]"
              style={{ background: "linear-gradient(90deg, #7aa2f7, #c792ea)" }}
            >
              View projects
              <ArrowRight size={16} className="aw-arrow transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="aw-ui inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#c9cedb] border border-[#232838] hover:border-[#7aa2f7] hover:text-[#7aa2f7] transition-colors"
            >
              Contact me
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE / VISUAL) */}
        <div className="aw-enter relative flex justify-center" style={{ animationDelay: "0.1s" }}>
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#7aa2f7] to-[#c792ea] blur-3xl opacity-20 absolute" />

          <div className="aw-ring relative w-72 sm:w-96">
            <img
              src="./image.png"
              alt="Abdul Wahab"
              className="relative w-full rounded-2xl shadow-2xl object-cover"
            />
          </div>

          <div className="aw-float-1 absolute -top-4 -right-2 sm:right-4 aw-ui flex items-center gap-2 bg-[#151822] border border-[#232838] rounded-xl px-3 py-2 shadow-lg text-sm text-[#c9cedb]">
            <span style={{ color: "#7aa2f7" }}>⚛</span> React
          </div>
          <div className="aw-float-2 absolute -bottom-4 -left-2 sm:left-4 aw-ui flex items-center gap-2 bg-[#151822] border border-[#232838] rounded-xl px-3 py-2 shadow-lg text-sm text-[#c9cedb]">
            <span style={{ color: "#e0af68" }}>⬢</span> Node.js
          </div>
        </div>
      </section>

      {/* SKILLS / FEATURES SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-14">
          <p className="aw-mono text-xs text-[#7ec699] mb-3">// services</p>
          <h2 className="aw-ui text-3xl font-bold text-[#e6e9f0]">What I do</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map(({ n, title, desc, Icon, color }) => (
            <div
              key={n}
              className="aw-card group relative bg-[#12141c] border border-[#232838] p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "0 0 0 rgba(0,0,0,0)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 20px 40px -20px ${color}55`)}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)")}
            >
              <span className="aw-mono absolute top-5 right-6 text-xs text-[#3a4152]">{n}</span>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${color}1a`, color }}
              >
                <Icon size={20} />
              </div>
              <h3 className="aw-ui text-lg font-semibold mb-2 text-[#e6e9f0]">{title}</h3>
              <p className="aw-ui text-[#8b93a7] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative max-w-4xl mx-auto px-6 pb-24">
        <div
          className="rounded-3xl p-[1px]"
          style={{ background: "linear-gradient(120deg, #7aa2f7, #c792ea, #e0af68)" }}
        >
          <div className="rounded-3xl bg-[#12141c] px-8 py-14 text-center">
            <h2 className="aw-ui text-3xl font-bold text-[#e6e9f0] mb-3">
              Let's work together
            </h2>
            <p className="aw-ui text-[#8b93a7] mb-8">
              Have a project in mind? Let's bring it to life.
            </p>
            <Link
              to="/contact"
              className="aw-ui aw-btn-primary group inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-[#0b0e14]"
              style={{ background: "linear-gradient(90deg, #7aa2f7, #c792ea)" }}
            >
              Get in touch
              <ArrowUpRight size={16} className="aw-arrow transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;