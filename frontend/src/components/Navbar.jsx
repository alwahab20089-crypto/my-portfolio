import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    `aw-link relative font-medium text-sm transition-colors duration-300 ${
      isActive ? "text-[#e6e9f0] aw-active" : "text-[#8b93a7] hover:text-[#e6e9f0]"
    }`;

  const getMobileLinkClass = ({ isActive }) =>
    `block py-2.5 px-1 text-sm font-medium border-l-2 pl-4 transition-colors duration-200 ${
      isActive
        ? "text-[#e6e9f0] border-[#7aa2f7]"
        : "text-[#8b93a7] border-transparent hover:text-[#e6e9f0] hover:border-[#232838]"
    }`;

  return (
    <nav className="aw-ui fixed w-full top-0 z-50 bg-[#0b0e14]/80 backdrop-blur-md border-b border-[#1c2030]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@600;700&family=Inter:wght@400;500;600&display=swap');
        .aw-ui { font-family: 'Inter', system-ui, sans-serif; }
        .aw-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }

        .aw-link::after {
          content: ''; position: absolute; left: 0; bottom: -6px; height: 2px; width: 0;
          background: linear-gradient(90deg, #7aa2f7, #c792ea);
          transition: width 0.3s ease;
        }
        .aw-link:hover::after, .aw-active::after { width: 100%; }

        @keyframes aw-slide-down {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .aw-mobile-menu { animation: aw-slide-down 0.25s ease both; }

        @media (prefers-reduced-motion: reduce) {
          .aw-link::after { transition: none; }
          .aw-mobile-menu { animation: none; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="aw-mono flex items-center gap-2 text-lg font-bold text-[#e6e9f0]">
            <span style={{ color: "#7aa2f7" }}>{"<"}</span>
            AW
            <span style={{ color: "#7aa2f7" }}>{"/>"}</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={getLinkClass}>
                {l.label}
              </NavLink>
            ))}
            <a
              href="/resume.pdf"
              download
              className="aw-mono flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg text-[#8b93a7] border border-[#232838] hover:border-[#7aa2f7] hover:text-[#7aa2f7] transition-colors"
            >
              <Download size={14} />
              Resume
            </a>
            <NavLink
              to="/contact"
              className="text-sm font-semibold px-4 py-2 rounded-lg text-[#0b0e14] transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(90deg, #7aa2f7, #c792ea)" }}
            >
              Hire me
            </NavLink>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-[#8b93a7] hover:text-[#e6e9f0] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="aw-mobile-menu md:hidden bg-[#0d1017]/95 backdrop-blur-md border-t border-[#1c2030] px-4 pb-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={getMobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            download
            className="aw-mono mt-2 flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg text-[#8b93a7] border border-[#232838]"
          >
            <Download size={14} />
            Resume
          </a>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 block text-center text-sm font-semibold px-4 py-2.5 rounded-lg text-[#0b0e14]"
            style={{ background: "linear-gradient(90deg, #7aa2f7, #c792ea)" }}
          >
            Hire me
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;