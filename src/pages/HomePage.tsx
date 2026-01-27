import ArrowForward from "../assets/icons/arrow_forward.svg?react";
import KeyboardArrowDown from "../assets/icons/keyboard_arrow_down.svg?react";
import FormatQuote from "../assets/icons/format_quote.svg?react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import Terminal from "../assets/icons/terminal.svg?react";
import Network from "../assets/icons/network.svg?react";
import Tune from "../assets/icons/tune.svg?react";
import ShieldLock from "../assets/icons/shield_lock.svg?react";
import Sync from "../assets/icons/sync.svg?react";

const ICONS: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  memory: Terminal,
  network: Network,
  tune: Tune,
  shield_lock: ShieldLock,
  sync: Sync,
};

const HomePage = () => {
  return (
    <div className="relative flex w-full flex-col group/design-root overflow-x-hidden">
       <div
        className="fixed inset-0 z-0 pointer-events-none opacity-5 grayscale"
        style={{
          backgroundImage: "radial-gradient(#22c55e 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div> 
       {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 -right-16 w-[600px] h-[600px] bg-accent/5 rounded-full pointer-events-none blur-[100px]" />
        <div className="absolute bottom-1/4 left-[5%] w-[250px] h-[250px]  rounded-full pointer-events-none blur-[90px]" />

        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col justify-center h-full z-10">
          <div className="flex flex-col gap-8 items-start max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
              <div className="font-mono text-xs text-accent tracking-widest ">
               System Status: Online
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold leading-[0.9] tracking-tighter text-white mix-blend-difference">
            DIGITAL
            <span className="block bg-clip-text bg-gradient-to-r from-[#888] to-[#ccc]">
            REALITY
            </span>
            <span className="bg-clip-text bg-gradient-to-r from-[#888] to-[#ccc]">
            ENGINEERS
            </span>
            <span className="text-accent animate-blink">.</span>
            </h1>

            <p className="text-lg md:text-xl font-light text-[#888] max-w-xl leading-relaxed mt--6 pl-4 border-l-2 border-accent/50 font-body">
              We handle the tech, so you can handle business.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-10">
              <Link to="/about_us">
                <button className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full text-sm font-bold tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                  <span>INITIALIZE PROJECT</span>
                  <ArrowForward className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              {/* <a
                className="group flex items-center gap-2 text-sm font-mono text-[#888] hover:text-accent transition-colors ml-4"
                href="#protocols"
              >
                <span>[ View Protocols ]</span>
              </a> */}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#666]">
            Scroll
          </span>
          <KeyboardArrowDown className="text-[#666]" />
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-y border-white/5 py-12">
        {[
          { number: "99.9%", label: "Uptime" },
          { number: "<2ms", label: "Latency" },
          { number: "50+", label: "Projects" },
          { number: "24/7", label: "Monitoring" },
        ].map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl font-bold text-white mb-2">
              {stat.number}
            </div>
            <div className="text-xs uppercase tracking-widest text-[#666]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* CORE VALUES */}
      <section className="w-full px-6 lg:px-12 py-32 bg-background-dark relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute right-[-15%] top-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute left-[-10%] bottom-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <div className="font-mono text-xs text-accent tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Operational Ethics
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            </div>

            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Core <span className="text-[#666]">Values</span>.
            </h3>

            <p className="mt-6 max-w-2xl text-[#888] font-light leading-relaxed">
              Our systems run on more than code. These values define how we
              build, collaborate, and create lasting impact.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                letter: "L",
                title: "Leadership through Service",
                description:
                  "We lead by empowering others, taking responsibility, and serving customers, partners, and communities with integrity.",
              },
              {
                letter: "U",
                title: "Unity & Collaboration",
                description:
                  "We believe the best outcomes come from teamwork, mutual respect, and shared purpose.",
              },
              {
                letter: "E",
                title: "Excellence in Execution",
                description:
                  "We commit to high standards, precision, and continuous improvement in everything we deliver.",
              },

              {
                letter: "S",
                title: "Sustainable Impact",
                description:
                  "We focus on long-term value—creating solutions that are responsible, scalable, and beneficial for the future.",
              },
              {
                letter: "T",
                title: "Trust & Transparency",
                description:
                  "We build lasting relationships through honesty, accountability, and open communication.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="group relative p-10 rounded-[2rem] border border-white/5 bg-[#0a0a0a] transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_32px_rgba(34,197,94,0.12)]"
              >
                {/* Letter */}
                <div className="absolute -top-6 -left-6 w-14 h-14 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center font-mono text-xl font-bold text-accent group-hover:scale-110 transition-transform">
                  {value.letter}
                </div>

                {/* Content */}
                <h4 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h4>

                <p className="text-[#888] leading-relaxed text-sm max-w-md">
                  {value.description}
                </p>

                {/* Subtle scan line */}
                <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-r from-transparent via-accent/5 to-transparent" />
              </div>
            ))}
          </div>

          {/* Footer Line */}
          <div className="mt-24 text-center">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#555]">
              Values Compiled · Version 1.0
            </span>
          </div>
        </div>
      </section>

      {/* PROTOCOLS SECTION */}
      <section
        className="w-full px-6 lg:px-12 py-32 border-t border-white/5 bg-background-dark relative"
        id="protocols"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row gap-20">
            {/* Left */}
            <div className="md:w-1/3 sticky top-32 h-fit">
              <span className="text-accent font-mono text-xs tracking-widest uppercase mb-4 block">
                // Core_Modules
              </span>
              <h3 className="text-4xl font-bold mb-6 text-white leading-tight">
                Built to Power Your <br />
                Growth.
              </h3>
              <p className="text-[#888] font-body leading-relaxed">
                We deliver secure, high‑performance technology that runs your
                business and scales with your success. Letus power your growth.
              </p>
            </div>

            {/* Right */}
            <div className="md:w-2/3 grid grid-cols-1 gap-6">
              {[
                {
                  icon: "memory",
                  number: "01",
                  title: "Scalable Infrastructure",
                  description:
                    "We build flexible foundations that grow seamlessly with your business and adapt as your needs evolve.",
                },
                {
                  icon: "network",
                  number: "02",
                  title: "High-Performance Connectivity",
                  description:
                    "We ensure your networks stay fast, reliable, and always available—keeping your teams and customers connected.",
                },
                {
                  icon: "tune",
                  number: "03",
                  title: "Operational Efficiency",
                  description:
                    "We streamline your operations to reduce friction, improve consistency, and support faster business outcomes.",
                },
                {
                  icon: "shield_lock",
                  number: "04",
                  title: "Secure Information Assets",
                  description:
                    "We protect your systems and data so you can operate with confidence, trust, and compliance.",
                },
                {
                  icon: "sync",
                  number: "05",
                  title: "Resilient Operations",
                  description:
                    "We design environments that minimize downtime and keep your business running, even when challenges arise.",
                },
              ].map((item) => {
                const Icon = ICONS[item.icon];

                return (
                  <div
                    key={item.number}
                    className="group p-8 border border-white/5 rounded-[2rem] bg-[#0a0a0a] hover:border-accent/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.05)]"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        {Icon && (
                          <Icon className="text-white group-hover:text-accent transition-colors" />
                        )}
                      </div>
                      <span className="font-mono text-xs text-[#444] group-hover:text-accent transition-colors">
                        {item.number}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold mb-3 text-white">
                      {item.title}
                    </h4>
                    <p className="text-[#888] text-sm leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT FEEDBACK */}
      <section className="w-full px-6 lg:px-12 py-32 bg-[#080808] relative overflow-hidden">
        <div className="absolute left-[-20%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full pointer-events-none blur-[150px]" />
        <div className="max-w-[1200px] mx-auto z-10 relative">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="font-mono text-xs text-accent tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-1 h-1 bg-accent rounded-full" />
              Client Logs
              <span className="w-1 h-1 bg-accent rounded-full" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              System <span className="text-[#666]">Feedback</span>.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                initials: "EK",
                name: "Elena K.",
                role: "CTO, Nexus Corp",
                feedback:
                  "Letus re-engineered our entire backend. The latency dropped by 40% in the first week. It feels like magic, but I know it's just incredibly clean, efficient code.",
              },
              {
                initials: "MJ",
                name: "Marcus J.",
                role: "Founder, StartGrid",
                feedback:
                  "We needed a team that spoke 'developer' but understood 'business'. Letus bridged that gap perfectly. Our downtime is now virtually zero, and profits are up.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0e0e0e] p-10 rounded-[2rem] border border-white/5 relative hover:border-white/10 transition-colors"
              >
                <div className="absolute top-8 right-8 text-[#222]">
                  <FormatQuote className="text-4xl" />
                </div>
                <p className="text-lg text-[#ccc] font-light leading-relaxed mb-8 relative z-10">
                  {item.feedback}
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#333] to-[#111] border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-accent">
                    {item.initials}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm font-display">
                      {item.name}
                    </div>
                    <div className="text-[#666] text-xs uppercase tracking-wider font-mono">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default HomePage;
