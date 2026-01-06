
import Icon from "../components/Icon";

const ConsultingPage = () => {
  return (
    <div className="relative flex w-full flex-col group/design-root overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="flex w-full max-w-[1400px] mx-auto items-center justify-between px-6 py-5 lg:px-12">
          <div className="flex items-center gap-2 cursor-pointer select-none group/logo">
            <Icon
              name="data_array"
              className="w-6 h-6 text-accent group-hover:rotate-90 transition-transform duration-500"
            />
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Letus<span className="text-accent">_</span>
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-12">
            <nav className="flex gap-8">
              {["/services", "/case_logs", "/about_kernel"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-[#888] hover:text-accent transition-colors relative group/link"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover/link:w-full" />
                </a>
              ))}
            </nav>

            <button className="border border-white/10 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300 bg-white/5">
              Execute_
            </button>
          </div>

          <div className="md:hidden text-white">
            <Icon
              name="menu_open"
              className="w-6 h-6 cursor-pointer hover:text-accent transition-colors"
            />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 right-[10%] w-[400px] h-[400px] bg-accent/5 rounded-full pointer-events-none blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-[5%] w-[250px] h-[250px] bg-accent/5 rounded-full pointer-events-none blur-[90px]" />

        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col justify-center h-full z-10">
          <div className="flex flex-col gap-8 items-start max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
              <div className="font-mono text-xs text-accent tracking-widest uppercase">
                System Online: v2.4.0
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold leading-[0.9] tracking-tighter text-white mix-blend-difference">
              DIGITAL
              <br />
              REALITY
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#888] to-[#ccc]">
                ENGINEERS
              </span>
              <span className="text-accent animate-blink">.</span>
            </h1>

            <p className="text-lg md:text-xl font-light text-[#888] max-w-xl leading-relaxed mt-6 pl-6 border-l-2 border-accent/30 font-body">
              We architect the silent backbone of the modern enterprise. Clean
              code, robust security, infinite scalability.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-10">
              <button className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full text-sm font-bold tracking-wide transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                <span>INITIALISE PROJECT</span>
                <Icon
                  name="arrow_forward"
                  className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform"
                />
              </button>

              <a
                className="group flex items-center gap-2 text-sm font-mono text-[#888] hover:text-accent transition-colors ml-4"
                href="#protocols"
              >
                <span>[ View Protocols ]</span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#666]">Scroll</span>
          <Icon name="keyboard_arrow_down" className="text-[#666]" />
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
                Optimized for <br />
                Impact.
              </h3>
              <p className="text-[#888] font-body leading-relaxed">
                We don't just write code; we build digital ecosystems designed
                to withstand the future. Our protocols are rigorous, our testing
                is exhaustive.
              </p>
            </div>

            {/* Right */}
            <div className="md:w-2/3 grid grid-cols-1 gap-6">
              {[
                {
                  icon: "memory",
                  number: "01",
                  title: "Low-Latency Architecture",
                  description:
                    "Engineered for speed. We strip away the bloat to ensure your applications run at the speed of thought.",
                },
                {
                  icon: "shield_lock",
                  number: "02",
                  title: "Military-Grade Security",
                  description:
                    "Zero-trust environments implementation. We protect your data assets with layers of encryption and proactive monitoring.",
                },
                {
                  icon: "deployed_code",
                  number: "03",
                  title: "Scalable Infrastructure",
                  description:
                    "Built to grow. Our systems handle 10x traffic spikes without breaking a sweat, ensuring business continuity.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group p-8 border border-white/5 rounded-[2rem] bg-[#0a0a0a] hover:border-accent/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.05)]"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <Icon
                        name={item.icon}
                        className="text-white group-hover:text-accent transition-colors"
                      />
                    </div>
                    <span className="font-mono text-xs text-[#444] group-hover:text-accent transition-colors">
                      {item.number}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-white">{item.title}</h4>
                  <p className="text-[#888] text-sm leading-relaxed max-w-md">{item.description}</p>
                </div>
              ))}
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
                  <Icon name="format_quote" className="text-4xl" />
                </div>
                <p className="text-lg text-[#ccc] font-light leading-relaxed mb-8 relative z-10">
                  {item.feedback}
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#333] to-[#111] border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-accent">
                    {item.initials}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm font-display">{item.name}</div>
                    <div className="text-[#666] text-xs uppercase tracking-wider font-mono">
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-y border-white/5 py-12">
            {[
              { number: "99.9%", label: "Uptime" },
              { number: "<12ms", label: "Latency" },
              { number: "256+", label: "Projects" },
              { number: "24/7", label: "Monitoring" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xs uppercase tracking-widest text-[#666]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/5 bg-black py-12">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Icon name="terminal" className="w-5 h-5 text-[#444]" />
              <span className="font-mono text-sm text-[#888]">
                System Status: <span className="text-green-500">Normal</span>
              </span>
            </div>
            <div className="flex gap-6 text-[10px] uppercase font-mono tracking-widest text-[#666]">
              <span>Encryption: AES-256</span>
              <span>Region: Global</span>
            </div>
          </div>

          <div className="flex gap-8">
            {["GitHub", "LinkedIn", "Twitter"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#666] hover:text-accent transition-colors text-sm font-mono"
              >
                [ {item} ]
              </a>
            ))}
          </div>

          <div className="text-[#444] text-xs font-mono">© 2024 Letus_ Inc.</div>
        </div>
      </footer>
    </div>
  );
};

export default ConsultingPage;
