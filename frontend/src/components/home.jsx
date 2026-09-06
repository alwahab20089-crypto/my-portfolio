import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Server,
  Cloud,
  Terminal,
  GitBranch,
} from "lucide-react";

const services = [
  {
    n: "01",
    title: "Frontend Development",
    desc: "Building fast, responsive, and interactive interfaces with React, Tailwind CSS, and modern frontend practices.",
    Icon: Code2,
    color: "#7aa2f7",
  },
  {
    n: "02",
    title: "Backend Development",
    desc: "Developing scalable REST APIs, authentication systems, databases, and server-side applications with Node.js and Express.",
    Icon: Server,
    color: "#e0af68",
  },
  {
    n: "03",
    title: "DevOps & Cloud",
    desc: "Containerizing applications with Docker and automating CI/CD pipelines with GitHub Actions for cloud deployments.",
    Icon: Cloud,
    color: "#7ec699",
  },
];

const technologies = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "javascript",
  "PostgreSQL",
  "TypeScript",
  "Docker",
  "GitHub Actions",
  "Linux",
  "AWS EC2",
];

const Home = () => {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(1100px 550px at 10% 0%, rgba(122,162,247,0.14), transparent 60%), radial-gradient(900px 500px at 95% 100%, rgba(126,199,153,0.08), transparent 60%), #0b0e14",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');

        .aw-mono {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        .aw-ui {
          font-family: 'Inter', system-ui, sans-serif;
        }

        @keyframes aw-pulse {
          0%, 100% {
            opacity: 1;
          }

          50% {
            opacity: 0.3;
          }
        }

        @keyframes aw-float {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes aw-ring-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes aw-fade-up {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes aw-glow {
          0%, 100% {
            opacity: 0.16;
          }

          50% {
            opacity: 0.28;
          }
        }

        .aw-dot {
          animation: aw-pulse 2s ease-in-out infinite;
        }

        .aw-float-1 {
          animation: aw-float 5s ease-in-out infinite;
        }

        .aw-float-2 {
          animation: aw-float 6s ease-in-out infinite 0.4s;
        }

        .aw-glow {
          animation: aw-glow 4s ease-in-out infinite;
        }

        .aw-ring::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 1.5rem;
          padding: 2px;
          background: conic-gradient(
            from 0deg,
            #7aa2f7,
            #c792ea,
            #e0af68,
            #7ec699,
            #7aa2f7
          );

          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);

          -webkit-mask-composite: xor;
          mask-composite: exclude;

          animation: aw-ring-spin 8s linear infinite;
        }

        .aw-enter {
          animation: aw-fade-up 0.6s ease both;
        }

        .aw-card {
          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .aw-card:hover {
          transform: translateY(-5px);
        }

        .aw-card:hover .aw-arrow {
          transform: translate(2px, -2px);
        }

        .aw-arrow {
          transition: transform 0.25s ease;
        }

        .aw-btn-primary {
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .aw-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px -8px rgba(122, 162, 247, 0.45);
        }

        .aw-tech {
          transition:
            border-color 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .aw-tech:hover {
          transform: translateY(-2px);
          border-color: #3a4358;
          color: #e6e9f0;
        }

        @media (prefers-reduced-motion: reduce) {
          .aw-dot,
          .aw-float-1,
          .aw-float-2,
          .aw-ring::before,
          .aw-enter,
          .aw-glow {
            animation: none !important;
          }

          .aw-card,
          .aw-tech,
          .aw-btn-primary {
            transition: none !important;
          }
        }
      `}</style>

      {/* Background Dot Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.32]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Background Glow */}
      <div className="aw-glow pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-[#7aa2f7] blur-[140px]" />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative max-w-7xl mx-auto px-6 pt-28 md:pt-32 pb-20 md:pb-28 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* LEFT */}
        <div className="aw-enter">

          {/* Availability */}
          <div className="aw-mono inline-flex items-center gap-2 text-xs text-[#7ec699] border border-[#1f2a22] bg-[#101812] rounded-full px-3 py-1.5 mb-7">
            <span className="aw-dot w-1.5 h-1.5 rounded-full bg-[#7ec699]" />
            Available for work
          </div>

          {/* Heading */}
          <h1 className="aw-ui text-xl sm:text-5xl lg:text-[4.25rem] font-extrabold text-[#e6e9f0] leading-[1.08] tracking-tight mb-7">

            Hi, I'm{" "}

            <span className="bg-gradient-to-r from-[#7aa2f7] via-[#9b8cf5] to-[#c792ea] bg-clip-text text-transparent">
              Abdul Wahab
            </span>

            <br />

            <span className="text-[#e6e9f0]">
              Full Stack Developer
            </span>

            <br />

            <span className="text-[#8b93a7]">
              & DevOps Engineer.
            </span>

          </h1>

          {/* Description */}
          <p className="aw-ui text-[#8b93a7] text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            I build modern full-stack web applications with the MERN stack
            and deploy them using Docker, CI/CD, Linux, and AWS. From
            frontend interfaces to backend APIs and cloud infrastructure,
            I enjoy building the complete system.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-9">

            <Link
              to="/projects"
              className="aw-ui aw-btn-primary group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#0b0e14]"
              style={{
                background:
                  "linear-gradient(90deg, #7aa2f7, #c792ea)",
              }}
            >
              View projects

              <ArrowRight
                size={16}
                className="aw-arrow transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/contact"
              className="aw-ui inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-[#c9cedb] border border-[#232838] hover:border-[#7aa2f7] hover:text-[#7aa2f7] transition-colors"
            >
              Contact me

              <ArrowUpRight size={15} />
            </Link>

          </div>

          {/* Quick Stack */}
          <div className="flex flex-wrap items-center gap-3 text-xs aw-mono text-[#5b6472]">

            <span className="text-[#3f4655]">
              STACK:
            </span>

            <span>React</span>
            <span className="text-[#303645]">•</span>

            <span>Node.js</span>
            <span className="text-[#303645]">•</span>

            <span>MongoDB</span>
            <span className="text-[#303645]">•</span>

            <span>Docker</span>
            <span className="text-[#303645]">•</span>

            <span>AWS</span>

          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT VISUAL */}
        {/* ========================================================= */}

        <div
          className="aw-enter relative flex justify-center"
          style={{
            animationDelay: "0.1s",
          }}
        >

          {/* Glow */}
          <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#7aa2f7] to-[#c792ea] blur-3xl opacity-20 absolute" />

          {/* Image */}
          <div className="aw-ring relative w-72 sm:w-96">

            <img
              src="./image.png"
              alt="Abdul Wahab"
              className="relative w-full rounded-2xl shadow-2xl object-cover"
            />

          </div>

          {/* React Badge */}
          <div className="aw-float-1 absolute -top-4 -right-2 sm:right-0 aw-ui flex items-center gap-2 bg-[#151822] border border-[#232838] rounded-xl px-3 py-2 shadow-lg text-sm text-[#c9cedb]">
            <span className="text-[#7aa2f7] text-lg">
              ⚛
            </span>

            React
          </div>

          {/* Node Badge */}
          <div className="aw-float-2 absolute -bottom-4 -left-2 sm:left-0 aw-ui flex items-center gap-2 bg-[#151822] border border-[#232838] rounded-xl px-3 py-2 shadow-lg text-sm text-[#c9cedb]">
            <span className="text-[#7ec699] text-lg">
              ⬢
            </span>

            Node.js
          </div>

          {/* Docker Badge */}
          <div className="absolute top-1/2 -right-8 hidden lg:flex aw-ui items-center gap-2 bg-[#151822] border border-[#232838] rounded-xl px-3 py-2 shadow-lg text-sm text-[#c9cedb]">
            <span className="text-[#7aa2f7]">
              ◈
            </span>

            Docker
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* TECH STACK */}
      {/* ========================================================= */}

      <section className="relative max-w-6xl mx-auto px-6 pb-24">

        <div className="border-y border-[#1b1f2a] py-8">

          <div className="flex flex-col md:flex-row md:items-center gap-5">

            <div className="flex items-center gap-2 shrink-0">
              <Terminal
                size={16}
                className="text-[#7aa2f7]"
              />

              <span className="aw-mono text-xs uppercase tracking-[0.2em] text-[#5b6472]">
                Technologies
              </span>
            </div>

            <div className="hidden md:block w-px h-5 bg-[#232838]" />

            <div className="flex flex-wrap gap-2">

              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="aw-tech aw-mono text-[11px] px-2.5 py-1.5 rounded-md border border-[#202532] text-[#7d8597]"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* WHAT I DO */}
      {/* ========================================================= */}

      <section className="relative max-w-6xl mx-auto px-6 pb-28">

        <div className="text-center mb-14">

          <p className="aw-mono text-xs text-[#7ec699] mb-3">
            // expertise
          </p>

          <h2 className="aw-ui text-3xl md:text-4xl font-bold text-[#e6e9f0] mb-4">
            What I do
          </h2>

          <p className="aw-ui text-[#6f7789] max-w-xl mx-auto text-sm leading-relaxed">
            I focus on building complete web applications and the
            infrastructure required to run them reliably.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map(({ n, title, desc, Icon, color }) => (

            <div
              key={n}
              className="aw-card group relative bg-[#12141c] border border-[#232838] p-7 rounded-2xl"
              style={{
                boxShadow: "0 0 0 rgba(0,0,0,0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  `0 20px 45px -20px ${color}55`;

                e.currentTarget.style.borderColor =
                  `${color}44`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 0 rgba(0,0,0,0)";

                e.currentTarget.style.borderColor =
                  "#232838";
              }}
            >

              <span className="aw-mono absolute top-6 right-6 text-xs text-[#3a4152]">
                {n}
              </span>

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: `${color}1a`,
                  color,
                }}
              >
                <Icon size={21} />
              </div>

              <h3 className="aw-ui text-lg font-semibold mb-3 text-[#e6e9f0]">
                {title}
              </h3>

              <p className="aw-ui text-[#8b93a7] text-sm leading-relaxed">
                {desc}
              </p>

              <div
                className="mt-6 h-px w-10 transition-all duration-300 group-hover:w-16"
                style={{
                  background: color,
                }}
              />

            </div>

          ))}

        </div>
      </section>

      {/* ========================================================= */}
      {/* DEVOPS HIGHLIGHT */}
      {/* ========================================================= */}

      <section className="relative max-w-6xl mx-auto px-6 pb-28">

        <div className="rounded-3xl border border-[#232838] bg-[#10131b] overflow-hidden">

          <div className="grid md:grid-cols-2">

            {/* Left */}
            <div className="p-8 md:p-10">

              <div className="inline-flex items-center gap-2 aw-mono text-xs text-[#7ec699] mb-5">
                <GitBranch size={14} />
                <span>
                  devops.workflow
                </span>
              </div>

              <h2 className="aw-ui text-2xl md:text-3xl font-bold text-[#e6e9f0] mb-4">
                From code to production.
              </h2>

              <p className="aw-ui text-[#8b93a7] text-sm leading-relaxed max-w-lg mb-7">
                I don't stop at writing application code. I use Linux,
                Docker, GitHub Actions, CI/CD, and AWS EC2 to build
                repeatable deployment workflows and move applications
                from development to production.
              </p>

              <Link
                to="/projects"
                className="aw-ui inline-flex items-center gap-2 text-sm font-semibold text-[#7aa2f7] hover:text-[#c792ea] transition-colors"
              >
                Explore my projects

                <ArrowUpRight
                  size={15}
                  className="aw-arrow"
                />
              </Link>

            </div>

            {/* Right */}
            <div className="border-t md:border-t-0 md:border-l border-[#232838] p-8 md:p-10">

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-xl border border-[#202532] bg-[#0c0f16] p-5">
                  <Terminal
                    size={19}
                    className="text-[#7ec699] mb-4"
                  />

                  <p className="aw-mono text-xs text-[#e6e9f0]">
                    Linux
                  </p>

                  <p className="aw-ui text-xs text-[#5f6879] mt-1">
                    Server environment
                  </p>
                </div>

                <div className="rounded-xl border border-[#202532] bg-[#0c0f16] p-5">
                  <Code2
                    size={19}
                    className="text-[#7aa2f7] mb-4"
                  />

                  <p className="aw-mono text-xs text-[#e6e9f0]">
                    Docker
                  </p>

                  <p className="aw-ui text-xs text-[#5f6879] mt-1">
                    Containerization
                  </p>
                </div>

                <div className="rounded-xl border border-[#202532] bg-[#0c0f16] p-5">
                  <GitBranch
                    size={19}
                    className="text-[#c792ea] mb-4"
                  />

                  <p className="aw-mono text-xs text-[#e6e9f0]">
                    CI/CD
                  </p>

                  <p className="aw-ui text-xs text-[#5f6879] mt-1">
                    GitHub Actions
                  </p>
                </div>

                <div className="rounded-xl border border-[#202532] bg-[#0c0f16] p-5">
                  <Cloud
                    size={19}
                    className="text-[#e0af68] mb-4"
                  />

                  <p className="aw-mono text-xs text-[#e6e9f0]">
                    AWS EC2
                  </p>

                  <p className="aw-ui text-xs text-[#5f6879] mt-1">
                    Cloud deployment
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="relative max-w-4xl mx-auto px-6 pb-28">

        <div
          className="rounded-3xl p-[1px]"
          style={{
            background:
              "linear-gradient(120deg, #7aa2f7, #c792ea, #e0af68, #7ec699)",
          }}
        >

          <div className="rounded-3xl bg-[#12141c] px-8 py-14 md:py-16 text-center">

            <p className="aw-mono text-xs text-[#7aa2f7] mb-4">
              // have a project?
            </p>

            <h2 className="aw-ui text-3xl md:text-4xl font-bold text-[#e6e9f0] mb-4">
              Let's build something great.
            </h2>

            <p className="aw-ui text-[#8b93a7] max-w-lg mx-auto mb-8 leading-relaxed">
              Whether you need a full-stack application or a reliable
              deployment workflow, let's turn your idea into a
              production-ready project.
            </p>

            <div className="flex justify-center flex-wrap gap-4">

              <Link
                to="/contact"
                className="aw-ui aw-btn-primary group inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-[#0b0e14]"
                style={{
                  background:
                    "linear-gradient(90deg, #7aa2f7, #c792ea)",
                }}
              >
                Get in touch

                <ArrowUpRight
                  size={16}
                  className="aw-arrow transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/projects"
                className="aw-ui inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-[#c9cedb] border border-[#232838] hover:border-[#7aa2f7] hover:text-[#7aa2f7] transition-colors"
              >
                View projects

                <ArrowRight size={15} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;
