import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Send, Mail, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      toast.success(data.message || "Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      toast.error(err.message || "Something went wrong. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 py-24"
      style={{
        background:
          "radial-gradient(1000px 500px at 8% 0%, rgba(122,162,247,0.14), transparent 60%), radial-gradient(900px 500px at 95% 100%, rgba(199,146,234,0.10), transparent 60%), #0b0e14",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600&family=Inter:wght@400;500;600;700;800&display=swap');
        .aw-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .aw-ui { font-family: 'Inter', system-ui, sans-serif; }

        .aw-input {
          background: #0f1219; border: 1px solid #232838; color: #e6e9f0;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .aw-input::placeholder { color: #5b6472; }
        .aw-input:focus { outline: none; border-color: #7aa2f7; box-shadow: 0 0 0 3px rgba(122,162,247,0.15); }

        .aw-btn { transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease; }
        .aw-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 30px -10px rgba(122,162,247,0.45); }
        .aw-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

        @keyframes aw-spin { to { transform: rotate(360deg); } }
        .aw-spin { animation: aw-spin 0.8s linear infinite; }

        @keyframes aw-fade-up { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .aw-enter { animation: aw-fade-up 0.5s ease both; }

        @media (prefers-reduced-motion: reduce) {
          .aw-spin, .aw-enter { animation: none !important; }
          .aw-btn:hover:not(:disabled) { transform: none; }
        }
      `}</style>

      <ToastContainer
        position="top-right"
        theme="dark"
        toastStyle={{ background: "#151822", border: "1px solid #232838" }}
      />

      <div className="aw-enter w-full max-w-5xl rounded-2xl border border-[#232838] bg-[#12141c] shadow-2xl p-6 sm:p-10 grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="aw-mono text-xs text-[#7ec699] mb-3">// get in touch</p>

          <h1 className="aw-ui text-3xl sm:text-4xl font-extrabold text-[#e6e9f0] mb-4 leading-tight">
            Let's work{" "}
            <span className="bg-gradient-to-r from-[#7aa2f7] to-[#c792ea] bg-clip-text text-transparent">
              together
            </span>
          </h1>

          <p className="aw-ui text-[#8b93a7] mb-6 leading-relaxed text-sm sm:text-base max-w-sm mx-auto md:mx-0">
            Have an idea, project, or opportunity? I'd love to hear from you —
            drop a message and I'll get back to you soon.
          </p>

          <div className="aw-ui flex items-center justify-center md:justify-start gap-2 text-sm text-[#8b93a7]">
            <Mail size={16} style={{ color: "#7aa2f7" }} />
            alwahab20089@gmail.com
          </div>
          <div className="aw-ui flex items-center justify-center md:justify-start gap-2 text-sm text-[#8b93a7] mt-3">
  <FaWhatsapp size={16} className="text-[#25D366]" />
  <a
    href="https://wa.me/923347543747"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#25D366] transition-colors"
  >
    +92 334 7543747
  </a>
</div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            disabled={isSubmitting}
            className="aw-ui aw-input w-full p-3 rounded-lg text-sm"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            disabled={isSubmitting}
            className="aw-ui aw-input w-full p-3 rounded-lg text-sm"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            required
            rows="5"
            disabled={isSubmitting}
            className="aw-ui aw-input w-full p-3 rounded-lg text-sm resize-none"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="aw-btn aw-ui w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-[#0b0e14]"
            style={{ background: "linear-gradient(90deg, #7aa2f7, #c792ea)" }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="aw-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;