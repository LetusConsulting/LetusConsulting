import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full bg-[#050505] border-t border-[#222] py-12 px-6 md:px-12 font-mono text-sm">
    <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12">
      <div className="bg-black p-6 rounded-lg border border-[#222] text-gray-400 font-mono text-xs md:text-sm shadow-2xl">
        <div className="flex gap-2 mb-4 border-b border-[#222] pb-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
        <p className="mb-2"><span className="text-accent-blue">user@letus:~$</span> ./connect.sh</p>
        <p className="mb-2">Initializing connection protocols...</p>
        <p className="mb-2">Are you ready to optimize your infrastructure? [Y/n]</p>
        <p className="mb-4"><span className="text-white animate-pulse">Y_</span></p>
        <div className="mt-6 flex flex-col gap-2">
          <a className="hover:text-accent-blue transition-colors" href="#">&gt; Email: hello@letus.consulting</a>
          <a className="hover:text-accent-blue transition-colors" href="#">&gt; Twitter: @LetusCode</a>
          <a className="hover:text-accent-blue transition-colors" href="#">&gt; GitHub: github.com/letus</a>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-white mb-6">
            <span className="material-symbols-outlined text-3xl text-accent-blue">terminal</span>
            <h2 className="text-2xl font-bold font-display">Letus<span className="text-gray-500">_Consulting</span></h2>
          </div>
          <p className="text-gray-500 max-w-sm mb-8 font-display">
            We don't just write code. We architect the future of your business through rigorous engineering and data-driven strategy.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 text-gray-400">
          <a className="hover:text-white" href="#">Privacy_Policy</a>
          <a className="hover:text-white" href="#">Terms_of_Service</a>
          <a className="hover:text-white" href="#">Sitemap.xml</a>
        </div>
        <p className="text-gray-600 mt-8">© 2024 Letus Consultants Inc. All systems normal.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
