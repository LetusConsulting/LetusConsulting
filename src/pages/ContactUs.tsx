// Contact.tsx
import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-black text-white font-display overflow-x-hidden antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      {/* Background Elements */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(#232348 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* Header */}
      <header className="relative z-10 w-full border-b border-[#232348] bg-black/80 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="size-8 text-white group-hover:text-primary transition-colors duration-300">
              <svg
                fill="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" />
                <circle className="text-primary" cx="24" cy="24" r="4" />
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight">
              Letus<span className="text-primary">.</span>it
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-slate-300 hover:text-white hover:text-primary transition-colors"
            >
              ./home
            </a>
            <a
              href="#"
              className="text-sm font-medium text-slate-300 hover:text-white hover:text-primary transition-colors"
            >
              ./services
            </a>
            <a
              href="#"
              className="text-sm font-bold text-primary"
            >
              ./contact
            </a>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:flex items-center justify-center bg-white/5 hover:bg-primary/20 border border-transparent hover:border-primary text-white text-sm font-bold h-9 px-5 rounded transition-all duration-300">
            <span className="mr-2">Client Portal</span>
            <span className="material-symbols-outlined text-[16px]">
              login
            </span>
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 w-full max-w-[1200px] mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row gap-12 lg:gap-24">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111122] border border-[#232348] w-fit">
              <span className="block size-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-mono text-slate-400">
                System Status: Online
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Let's debug your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                business problems.
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-md">
              We speak code, but we listen in human. Drop a line below to
              initialize a connection or ping us directly via the standard
              protocols.
            </p>
          </div>

          {/* Contact List */}
          <div className="flex flex-col gap-4">
            {/* Email */}
            <ContactCard
              icon="mail"
              label="SMTP//Request"
              content="hello@letus.it"
              href="mailto:hello@letus.it"
            />
            {/* Phone */}
            <ContactCard
              icon="call"
              label="VOIP//Connect"
              content="+1 (555) 010-9988"
              href="tel:+15550109988"
            />
            {/* Address */}
            <ContactCard
              icon="terminal"
              label="LOCALHOST//Origin"
              content="127.0.0.1 (Virtual Office)"
            />
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-2">
            <SocialLink label="GitHub" />
            <SocialLink label="LinkedIn" />
            <SocialLink label="Twitter" />
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex-1">
          <div className="h-full bg-[#111122]/50 border border-[#232348] backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 text-[10rem] text-primary/5 font-bold leading-none pointer-events-none select-none">
              {"{}"}
            </div>

            <div className="relative">
              <h3 className="text-xl font-bold text-white mb-2">
                Initialize Handshake
              </h3>
              <p className="text-sm text-slate-400">
                Fill out the parameters below to execute contact request.
              </p>
            </div>

            <form className="flex flex-col gap-5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormInput label="var Name" type="text" placeholder="John Doe" />
                <FormInput label="var Email" type="email" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-primary uppercase tracking-wider" htmlFor="subject">enum Subject</label>
                <div className="relative">
                  <select className="bg-[#0a0a16] border border-[#232348] text-white text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary block w-full p-3 appearance-none transition-all" id="subject">
                    <option>Consulting Inquiry</option>
                    <option>System Audit</option>
                    <option>Bug Report</option>
                    <option>General Ping</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-primary uppercase tracking-wider" htmlFor="message">string Message</label>
                <textarea className="bg-[#0a0a16] border border-[#232348] text-white text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary block w-full p-3 placeholder-slate-600 transition-all resize-none" id="message" placeholder="Describe your issue or requirements..." rows={4}></textarea>
              </div>
              <div className="pt-2">
                <button className="group w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(19,19,236,0.3)] hover:shadow-[0_0_30px_rgba(19,19,236,0.5)]" type="button">
                  <span>Execute</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm">
                    arrow_forward_ios
                  </span>
                </button>
              </div>
            </form>

            {/* Terminal Footer */}
            <div className="mt-2 border-t border-[#232348] pt-4 flex justify-between items-center text-[10px] text-slate-500 font-mono">
              <span>STATUS: IDLE</span>
              <span>v2.0.4</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#232348] bg-[#0a0a16] py-8">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2023 Letus Consulting. All systems operational.</p>
          <div className="flex gap-6 text-sm font-medium">
            <a className="text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-slate-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;

/* Reusable subcomponents */
const ContactCard: React.FC<{ icon: string; label: string; content: string; href?: string }> = ({ icon, label, content, href }) => (
  <div className="group flex items-center gap-4 bg-[#111122] border border-[#232348] p-4 rounded-xl hover:border-primary/50 transition-colors duration-300">
    <div className="flex items-center justify-center size-12 rounded-lg bg-[#0a0a16] text-primary group-hover:text-white transition-colors">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <div className="flex flex-col">
      <span className="text-xs text-slate-500 font-mono mb-0.5">{label}</span>
      {href ? (
        <a className="text-white font-medium hover:text-primary transition-colors" href={href}>{content}</a>
      ) : (
        <p className="text-white font-medium">{content}</p>
      )}
    </div>
  </div>
);

const SocialLink: React.FC<{ label: string }> = ({ label }) => (
  <a className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group" href="#">
    <span className="text-primary font-mono group-hover:translate-x-1 transition-transform">&gt;</span> {label}
  </a>
);

const FormInput: React.FC<{ label: string; type: string; placeholder: string }> = ({ label, type, placeholder }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-mono text-primary uppercase tracking-wider">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="bg-[#0a0a16] border border-[#232348] text-white text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary block w-full p-3 placeholder-slate-600 transition-all"
    />
  </div>
);
