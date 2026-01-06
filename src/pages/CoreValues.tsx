// src/pages/CoreValues.tsx
import React from "react";

// Define type for each value card
interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
}

const valueCards: ValueCardProps[] = [
  {
    icon: "pest_control",
    title: "Debug Reality",
    description:
      "We don't just patch bugs; we re-architect solutions. Every problem is an opportunity to refactor the world around us. We prefer truth over comfort.",
  },
  {
    icon: "call_merge",
    title: "Open Source Minds",
    description:
      "Knowledge grows when it is shared. Transparency and collaboration are our primary dependencies.",
  },
  {
    icon: "accessibility_new",
    title: "User First",
    description:
      "Empathy is our primary dependency. We build for humans, not just machines. User interfaces are the window to the soul of our code.",
  },
];

// Header component
const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-dark bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <div className="relative flex items-center justify-center text-primary drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold text-white">Letus</h2>
        </div>
        <nav className="hidden md:flex items-center gap-9">
          <a href="#" className="text-white text-sm font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#" className="text-white text-sm font-medium hover:text-primary transition-colors">
            Services
          </a>
          <a href="#" className="text-primary text-sm font-bold">
            Core Values
          </a>
          <a href="#" className="text-white text-sm font-medium hover:text-primary transition-colors">
            Careers
          </a>
          <a href="#" className="text-white text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        <button className="flex min-w-[84px] h-10 px-4 items-center justify-center border border-primary/30 rounded-lg text-primary font-bold text-sm hover:bg-primary hover:text-black transition-all shadow-[0_0_10px_rgba(56,189,248,0.1)]">
          Start a Session
        </button>
      </div>
    </header>
  );
};

// Hero Section
const Hero: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-5 px-4 md:px-40">
      <div className="max-w-[960px] flex-1 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          &gt; defining_our_<span className="text-primary">principles</span>...<span className="animate-pulse">_</span>
        </h1>
        <p className="text-text-muted text-base md:text-lg mt-4">
          Our operating system for success. Exploring the source code of our culture. We build resilient systems for a complex world.
        </p>
      </div>
    </section>
  );
};

// Value Card
const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-4 border border-border-dark bg-card-dark p-5 rounded-lg hover:border-primary/50 transition-colors">
      <div className="text-primary text-3xl mb-2">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h2 className="text-white text-base font-bold">{title}</h2>
      <p className="text-text-muted text-sm">{description}</p>
    </div>
  );
};

// Core Values Section
const CoreValues: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10 px-4 md:px-40">
      <div className="max-w-[960px] flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {valueCards.map((card, index) => (
          <ValueCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

// Call To Action
const CTA: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-10 px-4 md:px-40">
      <div className="max-w-[960px] flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Ready to push to production?</h2>
        <p className="text-text-muted max-w-[500px] text-base">
          Whether you want to join our team or start a project, let's write the future together.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="px-6 py-3 bg-primary text-black font-bold rounded-lg shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all">
            Commit to Letus
          </button>
          <button className="px-6 py-3 border border-border-dark text-white rounded-lg hover:bg-border-dark transition-colors">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  );
};

// Page Component
const CoreValuesPage: React.FC = () => {
  return (
    <div className="bg-background-dark text-white font-display min-h-screen">
      <Header />
      <Hero />
      <CoreValues />
      <CTA />
    </div>
  );
};

export default CoreValuesPage;
