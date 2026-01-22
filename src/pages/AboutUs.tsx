// App.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-background-dark dark:bg-background-dark text-accent dark:text-white font-display overflow-x-hidden">
      {/* Navbar */}
      <Header />
      {/* slate900 - accent */}
      {/* Hero Section */}
      <section className="px-6 md:px-20 xl:px-40 py-10 md:py-20 flex flex-col lg:flex-row items-center gap-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-6 lg:w-1/2 justify-center">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card-dark/50 px-3 py-1 w-fit">
              <span className="material-symbols-outlined text-primary text-[16px]">
                terminal
              </span>
              <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
                System status: Online
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-[-0.033em] text-accent dark:text-white">
              We do IT{" "}
              <span className="text-primary blinking-cursor">
                for your business, and beyond
              </span>
            </h1>
            <h2 className="text-lg font-normal leading-relaxed text-slate-600 dark:text-gray-300 max-w-[500px]">
              Letus is an IT consulting firm that takes the complexity out of
              technology so you can focus on what matters most: growth,
              innovation, and impact. We’re not just an IT consulting firm —
              we’re a growing team of experienced professionals working as
              consultants to solve challenges, drive transformation, and deliver
              real results in a fast-changing digital world.
            </h2>
          </div>
          <div className="flex gap-4 pt-2">
            <button className="flex items-center justify-center h-12 px-6 bg-primary hover:bg-accent text-black font-bold rounded-lg shadow-lg shadow-primary/25">
              View our work
            </button>
            {/* <button className="flex items-center justify-center h-12 px-6 bg-transparent border border-white/10 hover:border-primary/50 text-accent dark:text-white font-bold rounded-lg hover:bg-card-dark transition-all">
              Our Stack
            </button> */}
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full aspect-square max-w-[500px] max-h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-background-dark via-transparent to-primary/20 z-10"></div>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnP6Ob7MAr9C4qqmsx5EotM5idImjOtwUTAcTX5blD8WnPlfMb0VggXKgiOeptSJ9G3VzcP73uSVjtqgi1uPOcPAsM3PLhnUqlFBAn_yYHLNzlJ7cnp8JOJCSm1Bno6JbQ3_hDXe6_Vnyg-TZRz54vOEAGvpk2ekZTDh6lu-B5UYGKN-IJKdVYbSJdzb00rddXpnkjdVcJWOavUhgv-MRy1eE0gGEY8rUD2muuL9Q0XPDF-nNc_HXayHSuU2ThKItaE4mMLYd825II")',
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-card-dark border-y border-white/10 py-20 text-center px-6 md:px-20 xl:px-40">
        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 inline-block">
          Our Mission
        </span>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-6 text-accent dark:text-white">
          Bridging the gap between legacy systems{" "}
          <br className="hidden md:block" /> and the future of tech.
        </h2>
        <p className="text-lg font-normal leading-relaxed text-slate-600 dark:text-gray-400 max-w-[720px] mx-auto">
          Headquartered in Nigeria, we’re open to doing business and consulting
          anywhere in the world. We blend deep experience with forward-thinking
          creativity to deliver solutions that fit your business goals — whether
          it’s strengthening infrastructure, securing your systems, modernizing
          workflows, or building custom tools that accelerate performance.
        </p>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-20 xl:px-40 py-10 md:py-20 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-8 mb-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-accent dark:text-white">
              The Gen Z Approach
            </h2>
            <p className="text-base text-slate-600 dark:text-gray-400">
              With a people-first approach and a passion for practical outcomes,
              we make technology work for you — not the other way around. Ready
              to turn challenges into opportunities? Letus do IT.
            </p>
          </div>
          {/* <button className="text-primary font-bold hover:text-white hover:border-accent transition-colors flex items-center gap-1 group">
            See our culture <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "sports_esports",
              title: "Playful Innovation",
              desc: "We treat code like a craft and a playground. Creative solutions come from enjoying the process of building.",
            },
            {
              icon: "visibility",
              title: "Radical Transparency",
              desc: "No black boxes. Just clear communication, open repos, and honest timelines. We document everything.",
            },
            {
              icon: "terminal",
              title: "Geek at Heart",
              desc: "We live and breathe technology. From retro gaming to quantum computing, we are obsessed with what's next.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-5 rounded-xl  border-white/10 bg-card-dark p-6 hover:border-primary/50 transition-colors"
            >
              <div className="size-12 rounded-lg bg-background-dark border border-white/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">
                  {feature.icon}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold leading-tight text-accent dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-400">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Tailwind blinking cursor style */}
      <style>{`
        .blinking-cursor::after {
          content: '|';
          animation: blink 1s step-end infinite;
          color: #22c55e;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default App;
