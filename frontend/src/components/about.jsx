import { useState } from "react";
import {
  Globe,
  RefreshCw,
  Code2,
  Server,
  Cloud,
  GitBranch,
  Terminal,
  Database,
} from "lucide-react";

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "REST APIs",
  "JWT",
  "React Query",
  "Redux Toolkit",
  "Tailwind CSS",
  "Git",
  "Docker",
  "GitHub Actions",
  "CI/CD",
  "Linux",
  "AWS EC2",
];

function LinkedinIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={16}
      height={16}
      {...props}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={16}
      height={16}
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.61-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.92-2.35 4.79-4.58 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

const links = [
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/abdul-wahab-13103b371",
    label: "LinkedIn",
    Icon: LinkedinIcon,
    color: "#7aa2f7",
  },
  {
    key: "github",
    href: "https://github.com/alwahab20089-crypto",
    label: "GitHub",
    Icon: GithubIcon,
    color: "#c9cedb",
  },
  {
    key: "portfolio",
    href: "/",
    label: "Portfolio",
    Icon: Globe,
    color: "#f7768e",
  },
];

const skillColor = (i) =>
  [
    "#e0af68",
    "#7ec699",
    "#7aa2f7",
    "#c792ea",
    "#f7768e",
    "#e0af68",
  ][i % 6];

export default function AboutMe() {
  const [hovered, setHovered] = useState(null);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-10 md:px-8"
      style={{
        background:
          "radial-gradient(1100px 550px at 12% 8%, rgba(122,162,247,0.12), transparent 60%), radial-gradient(900px 500px at 92% 95%, rgba(126,199,153,0.08), transparent 60%), #0b0e14",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        .aw-mono {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
        }

        .aw-ui {
          font-family: 'Inter', system-ui, sans-serif;
        }

        @keyframes aw-blink {
          0%, 49% {
            opacity: 1;
          }

          50%, 100% {
            opacity: 0;
          }
        }

        @keyframes aw-type {
          from {
            width: 0;
          }

          to {
            width: 100%;
          }
        }

        @keyframes aw-fade-up {
          from {
            opacity: 0;
            transform: translateY(6px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes aw-ring-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes aw-pulse {
          0%, 100% {
            opacity: 1;
          }

          50% {
            opacity: 0.35;
          }
        }

        .aw-cursor {
          animation: aw-blink 1s step-end infinite;
        }

        .aw-typed {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          width: 11ch;
          animation: aw-type 1.2s steps(11) 0.2s both;
          vertical-align: bottom;
        }

        .aw-line {
          animation: aw-fade-up 0.5s ease both;
        }

        .aw-ring {
          position: relative;
        }

        .aw-ring::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 9999px;
          padding: 3px;
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

          animation: aw-ring-spin 6s linear infinite;
        }

        .aw-dot-pulse {
          animation: aw-pulse 2s ease-in-out infinite;
        }

        .aw-refresh:hover {
          transform: rotate(120deg);
        }

        .aw-refresh {
          transition: transform 0.4s ease;
        }

        .aw-info-card {
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .aw-info-card:hover {
          transform: translateY(-2px);
          border-color: #343c50;
          background: #181c27;
        }

        @media (prefers-reduced-motion: reduce) {
          .aw-typed,
          .aw-cursor,
          .aw-line,
          .aw-ring::before,
          .aw-dot-pulse {
            animation: none !important;
          }

          .aw-refresh:hover {
            transform: none;
          }

          .aw-info-card {
            transition: none !important;
          }
        }
      `}</style>

      <div className="w-full max-w-6xl rounded-2xl overflow-hidden border border-[#232838] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">

        {/* ===================================================== */}
        {/* WINDOW CHROME */}
        {/* ===================================================== */}

        <div className="aw-ui flex items-center gap-3 bg-[#12141c] border-b border-[#232838] px-4 py-3">

          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          <div className="flex items-center gap-1.5 ml-2 bg-[#181c28] border border-[#232838] rounded-md px-3 py-1 text-xs text-[#8b93a7]">
            about-me.jsx

            <span className="aw-dot-pulse w-1.5 h-1.5 rounded-full bg-[#7ec699] ml-1" />
          </div>

        </div>

        <div className="flex flex-col lg:flex-row">

          {/* ===================================================== */}
          {/* CODE PANE */}
          {/* ===================================================== */}

          <div className="aw-mono w-full lg:w-[58%] bg-[#0f1219] px-5 py-6 md:px-6 md:py-8 text-[12px] sm:text-sm leading-7 overflow-x-auto">

            <Line n={1} style={{ animationDelay: "0.02s" }}>
              <C color="#6b9b73">
                {"// about-me.jsx"}
              </C>
            </Line>

            <Line n={2} style={{ animationDelay: "0.05s" }}>
              {"\u00A0"}
            </Line>

            <Line n={3} style={{ animationDelay: "0.08s" }}>
              <C color="#c792ea">import</C>{" "}
              <C color="#e6e9f0">
                {"{ Me }"}
              </C>{" "}
              <C color="#c792ea">from</C>{" "}
              <C color="#e0af68">
                {"'./wahab'"}
              </C>
              <C color="#8b93a7">;</C>
            </Line>

            <Line n={4} style={{ animationDelay: "0.11s" }}>
              {"\u00A0"}
            </Line>

            <Line n={5} style={{ animationDelay: "0.14s" }}>
              <C color="#c792ea">const</C>{" "}
              <C color="#7aa2f7">name</C>{" "}
              <C color="#8b93a7">=</C>{" "}
              <span style={{ color: "#e0af68" }}>
                "
                <span className="aw-typed">
                  Abdul Wahab
                </span>
                <span className="aw-cursor">|</span>"
              </span>
              <C color="#8b93a7">;</C>
            </Line>

            <Line n={6} style={{ animationDelay: "0.17s" }}>
              <C color="#c792ea">const</C>{" "}
              <C color="#7aa2f7">role</C>{" "}
              <C color="#8b93a7">=</C>{" "}
              <C color="#e0af68">
                {'"Full Stack MERN Developer"'}
              </C>
              <C color="#8b93a7">;</C>
            </Line>

            <Line n={7} style={{ animationDelay: "0.2s" }}>
              <C color="#c792ea">const</C>{" "}
              <C color="#7aa2f7">specialization</C>{" "}
              <C color="#8b93a7">=</C>{" "}
              <C color="#e0af68">
                {'"DevOps Engineer"'}
              </C>
              <C color="#8b93a7">;</C>
            </Line>

            <Line n={8} style={{ animationDelay: "0.23s" }}>
              {"\u00A0"}
            </Line>

            <Line n={9} style={{ animationDelay: "0.26s" }}>
              <C color="#c792ea">const</C>{" "}
              <C color="#7aa2f7">bio</C>{" "}
              <C color="#8b93a7">=</C>{" "}
              <C color="#e0af68">
                {"`I build modern full-stack applications"}
              </C>
            </Line>

            <Line n={10} style={{ animationDelay: "0.29s" }}>
              <C color="#e0af68">
                {"  with React, Node.js, Express, and MongoDB,"}
              </C>
            </Line>

            <Line n={11} style={{ animationDelay: "0.32s" }}>
              <C color="#e0af68">
                {"  then containerize and deploy them using"}
              </C>
            </Line>

            <Line n={12} style={{ animationDelay: "0.35s" }}>
              <C color="#e0af68">
                {"  Docker, CI/CD, Linux, and AWS.`"}
              </C>
              <C color="#8b93a7">;</C>
            </Line>

            <Line n={13} style={{ animationDelay: "0.38s" }}>
              {"\u00A0"}
            </Line>

            <Line n={14} style={{ animationDelay: "0.41s" }}>
              <C color="#c792ea">const</C>{" "}
              <C color="#7aa2f7">skills</C>{" "}
              <C color="#8b93a7">=</C>{" "}
              <C color="#c9cedb">[</C>
            </Line>

            <div
              className="aw-line pl-4 py-2 flex flex-wrap gap-x-2 gap-y-2"
              style={{ animationDelay: "0.44s" }}
            >
              {skills.map((s, i) => (
                <span
                  key={s}
                  onMouseEnter={() => setHovered(s)}
                  onMouseLeave={() => setHovered(null)}
                  className="cursor-default transition-all duration-200 rounded px-1"
                  style={{
                    color: skillColor(i),
                    background:
                      hovered === s
                        ? "rgba(255,255,255,0.06)"
                        : "transparent",
                    boxShadow:
                      hovered === s
                        ? `0 0 0 1px ${skillColor(i)}55`
                        : "none",
                    transform:
                      hovered === s
                        ? "translateY(-1px)"
                        : "none",
                  }}
                >
                  "{s}"
                  {i < skills.length - 1 && (
                    <span style={{ color: "#5b6472" }}>,</span>
                  )}
                </span>
              ))}
            </div>

            <Line n={15} style={{ animationDelay: "0.47s" }}>
              <C color="#c9cedb">]</C>
              <C color="#8b93a7">;</C>
            </Line>

            <Line n={16} style={{ animationDelay: "0.5s" }}>
              {"\u00A0"}
            </Line>

            <Line n={17} style={{ animationDelay: "0.53s" }}>
              <C color="#c792ea">const</C>{" "}
              <C color="#7aa2f7">links</C>{" "}
              <C color="#8b93a7">=</C>{" "}
              <C color="#c9cedb">
                {"{ "}
              </C>

              <C color="#7aa2f7">linkedin</C>

              <C color="#8b93a7">, </C>

              <C color="#7aa2f7">github</C>

              <C color="#8b93a7">, </C>

              <C color="#7aa2f7">portfolio</C>

              <C color="#c9cedb">
                {" }"}
              </C>

              <C color="#8b93a7">;</C>
            </Line>

            <Line n={18} style={{ animationDelay: "0.56s" }}>
              {"\u00A0"}
            </Line>

            <Line n={19} style={{ animationDelay: "0.59s" }}>
              <C color="#c792ea">
                export default function
              </C>{" "}
              <C color="#7aa2f7">
                AboutMe
              </C>

              <C color="#c9cedb">
                () {"{"}
              </C>
            </Line>

            <Line n={20} style={{ animationDelay: "0.62s" }}>
              <span className="pl-4">
                <C color="#c792ea">return</C>{" "}
                <C color="#c9cedb">
                  {"<Preview />"}
                </C>
                <C color="#8b93a7">;</C>
              </span>
            </Line>

            <Line n={21} style={{ animationDelay: "0.65s" }}>
              <C color="#c9cedb">
                {"}"}
              </C>
            </Line>

          </div>

          {/* ===================================================== */}
          {/* PREVIEW PANE */}
          {/* ===================================================== */}

          <div className="aw-ui w-full lg:w-[42%] bg-[#151822] border-t lg:border-t-0 lg:border-l border-[#232838] flex flex-col">

            {/* Browser Bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#232838] text-[11px] text-[#6b7280]">

              <span className="flex-1 bg-[#0f1219] rounded px-2 py-1 truncate">
                localhost:3000/about
              </span>

              <RefreshCw
                size={13}
                className="aw-refresh text-[#6b7280]"
              />

            </div>

            {/* Profile */}
            <div className="flex-1 flex flex-col items-center text-center px-6 py-8">

              <div className="aw-ring">

                {!imgError ? (
                  <img
                    src="./image2.png"
                    alt="Abdul Wahab"
                    onError={() => setImgError(true)}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-[#1c2030] flex items-center justify-center text-xl font-semibold text-[#c9cedb]">
                    AW
                  </div>
                )}

              </div>

              <h2 className="mt-5 text-xl font-semibold text-[#e6e9f0]">
                Abdul Wahab
              </h2>

              <p className="mt-1 text-sm text-[#7aa2f7]">
                Full Stack MERN Developer
              </p>

              <p className="mt-1 text-xs text-[#7ec699] aw-mono">
                & DevOps Engineer
              </p>

              <p className="mt-4 text-[13px] leading-relaxed text-[#8b93a7] max-w-sm">
                I build modern full-stack applications with React,
                Node.js, Express, and MongoDB. I also work with
                Docker, CI/CD, Linux, and AWS to take applications
                from development to production.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 w-full max-w-sm mt-6">

                <InfoCard
                  icon={Code2}
                  label="Full Stack"
                  color="#7aa2f7"
                />

                <InfoCard
                  icon={Terminal}
                  label="DevOps"
                  color="#7ec699"
                />

                <InfoCard
                  icon={Cloud}
                  label="AWS"
                  color="#e0af68"
                />

              </div>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">

                {skills.map((s, i) => (
                  <span
                    key={s}
                    onMouseEnter={() => setHovered(s)}
                    onMouseLeave={() => setHovered(null)}
                    className="text-[11px] px-2.5 py-1 rounded-full border transition-all duration-200"
                    style={{
                      color: skillColor(i),
                      borderColor:
                        hovered === s
                          ? skillColor(i)
                          : "#232838",

                      background:
                        hovered === s
                          ? `${skillColor(i)}1a`
                          : "transparent",

                      transform:
                        hovered === s
                          ? "translateY(-2px) scale(1.04)"
                          : "none",
                    }}
                  >
                    {s}
                  </span>
                ))}

              </div>

              {/* Social Links */}
              <div className="mt-7 flex gap-3">

                {links.map(
                  ({ key, href, label, Icon, color }) => (
                    <a
                      key={key}
                      href={href}
                      aria-label={label}
                      className="w-9 h-9 rounded-full border border-[#232838] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        color,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          `${color}1a`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          "transparent";
                      }}
                    >
                      <Icon size={16} />
                    </a>
                  )
                )}

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================= */
/* HELPERS */
/* ============================================================= */

function Line({ n, children, style }) {
  return (
    <div
      className="aw-line flex gap-4"
      style={style}
    >
      <span
        className="select-none text-right w-5 shrink-0"
        style={{
          color: "#3a4152",
        }}
      >
        {n}
      </span>

      <span>{children}</span>
    </div>
  );
}

function C({ color, children }) {
  return (
    <span style={{ color }}>
      {children}
    </span>
  );
}

function InfoCard({ icon: Icon, label, color }) {
  return (
    <div className="aw-info-card rounded-xl border border-[#232838] bg-[#10131b] p-3">

      <Icon
        size={16}
        className="mx-auto mb-2"
        style={{
          color,
        }}
      />

      <p className="aw-mono text-[10px] text-[#8b93a7]">
        {label}
      </p>

    </div>
  );
}
