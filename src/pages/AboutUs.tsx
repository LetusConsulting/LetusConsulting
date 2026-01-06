// App.tsx
import React from "react";

const App: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="px-6 md:px-20 xl:px-40 flex h-full items-center justify-between py-3 max-w-[1200px] mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer text-slate-900 dark:text-white">
            <div className="size-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                  fill="currentColor"
                />
                <path
                  clipRule="evenodd"
                  d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight">Letus</h2>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-8">
            {["Services", "Careers", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-slate-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
              >
                {link}
              </a>
            ))}
            <button className="flex min-w-[84px] items-center justify-center h-10 px-5 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20">
              Let's Talk
            </button>
          </div>

          {/* Mobile menu */}
          <div className="flex md:hidden text-slate-900 dark:text-white">
            <span className="material-symbols-outlined cursor-pointer">menu</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-20 xl:px-40 py-10 md:py-20 flex flex-col lg:flex-row items-center gap-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-6 lg:w-1/2 justify-center">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-dark bg-card-dark/50 px-3 py-1 w-fit">
              <span className="material-symbols-outlined text-primary text-[16px]">terminal</span>
              <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">System status: Online</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-[-0.033em] text-slate-900 dark:text-white">
              We speak fluent <span className="text-primary blinking-cursor">future</span>
            </h1>
            <h2 className="text-lg font-normal leading-relaxed text-slate-600 dark:text-gray-300 max-w-[500px]">
              Decoding complexity for the modern world. Letus is an IT consulting firm blending senior expertise with fresh Gen Z perspectives.
            </h2>
          </div>
          <div className="flex gap-4 pt-2">
            <button className="flex items-center justify-center h-12 px-6 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-primary/25">
              View our work
            </button>
            <button className="flex items-center justify-center h-12 px-6 bg-transparent border border-border-dark hover:border-primary/50 text-slate-900 dark:text-white font-bold rounded-lg hover:bg-card-dark transition-all">
              Our Stack
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full aspect-square max-w-[500px] max-h-[500px] rounded-2xl overflow-hidden border border-border-dark shadow-2xl shadow-primary/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-background-dark via-transparent to-primary/20 z-10"></div>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnP6Ob7MAr9C4qqmsx5EotM5idImjOtwUTAcTX5blD8WnPlfMb0VggXKgiOeptSJ9G3VzcP73uSVjtqgi1uPOcPAsM3PLhnUqlFBAn_yYHLNzlJ7cnp8JOJCSm1Bno6JbQ3_hDXe6_Vnyg-TZRz54vOEAGvpk2ekZTDh6lu-B5UYGKN-IJKdVYbSJdzb00rddXpnkjdVcJWOavUhgv-MRy1eE0gGEY8rUD2muuL9Q0XPDF-nNc_HXayHSuU2ThKItaE4mMLYd825II")',
              }}
            ></div>
            <div className="absolute bottom-4 left-4 z-20 bg-background-dark/90 backdrop-blur border border-border-dark rounded p-3 font-mono text-xs text-primary">
              &gt; init_sequence()
              <br />
              &gt; loading_assets...
              <br />
              &gt; complete
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-card-dark border-y border-border-dark py-20 text-center px-6 md:px-20 xl:px-40">
        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 inline-block">Our Mission</span>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-6 text-slate-900 dark:text-white">
          Bridging the gap between legacy systems <br className="hidden md:block" /> and the future of tech.
        </h2>
        <p className="text-lg font-normal leading-relaxed text-slate-600 dark:text-gray-400 max-w-[720px] mx-auto">
          We bring a geeky, transparent, and radically innovative approach to every problem we solve. We don't just patch bugs; we architect evolutions.
        </p>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-20 xl:px-40 py-10 md:py-20 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border-dark pb-8 mb-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">The Gen Z Approach</h2>
            <p className="text-base text-slate-600 dark:text-gray-400">Why clients choose to upgrade with us.</p>
          </div>
          <button className="text-primary font-bold hover:text-white transition-colors flex items-center gap-1 group">
            See our culture <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
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
            <div key={feature.title} className="flex flex-col gap-5 rounded-xl border border-border-dark bg-card-dark p-6 hover:border-primary/50 transition-colors">
              <div className="size-12 rounded-lg bg-background-dark border border-border-dark flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">{feature.icon}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold leading-tight text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-dark bg-background-dark py-12">
        <div className="px-6 md:px-20 xl:px-40 text-center flex flex-col items-center gap-6">
          <h2 className="text-white text-2xl font-bold">Ready to debug your business?</h2>
          <button className="flex min-w-[140px] items-center justify-center h-12 px-8 bg-primary text-white text-base font-bold tracking-wide hover:bg-white hover:text-primary transition-all">
            Start a Project
          </button>
          <div className="flex gap-6 mt-4 text-gray-500">
            {["LinkedIn", "GitHub", "Twitter"].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-8">© 2023 Letus Consulting. All systems normal.</p>
        </div>
      </footer>

      {/* Tailwind blinking cursor style */}
      <style>{`
        .blinking-cursor::after {
          content: '|';
          animation: blink 1s step-end infinite;
          color: #1313ec;
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
