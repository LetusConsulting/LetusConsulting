import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header className="sticky top-0 z-50 w-full border-b border-[#222] bg-background-dark/95 backdrop-blur-sm">
    <div className="px-6 md:px-10 lg:px-40 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3 select-none cursor-pointer group">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-[#111] border border-[#333] group-hover:border-accent-blue/50 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.1)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
          <span className="material-symbols-outlined text-2xl text-accent-blue logo-glow">
            terminal
          </span>
        </div>
        <div className="flex flex-col justify-center leading-none">
          <h2 className="text-xl font-bold tracking-tight text-white group-hover:text-accent-blue transition-colors duration-300">Letus</h2>
          <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">Consulting</span>
        </div>
      </div>
      <nav className="hidden lg:flex items-center gap-8">
        <Link className="text-sm font-medium text-gray-400 hover:text-accent-blue transition-colors" to="/">./Home</Link>
        <Link className="text-sm font-medium text-white underline underline-offset-8 decoration-2 decoration-accent-blue" to="/services">./Services</Link>
        <Link className="text-sm font-medium text-gray-400 hover:text-accent-blue transition-colors" to="/consultantportfolio">./Consultant Portfolio</Link>
        <Link className="text-sm font-medium text-gray-400 hover:text-accent-blue transition-colors" to="/corevalues">./Core Values</Link>
        <Link className="text-sm font-medium text-gray-400 hover:text-accent-blue transition-colors" to="/aboutus">./About Us</Link>
        <Link className="text-sm font-medium text-gray-400 hover:text-accent-blue transition-colors" to="/contact">./Contact</Link>
      </nav>
      <button className="hidden sm:flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-bold text-white hover:bg-accent-blue hover:text-black hover:border-accent-blue transition-all transform hover:scale-105">
        Deploy Letus
      </button>
      <button className="lg:hidden text-white hover:text-accent-blue transition-colors">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  </header>
);

export default Header;
