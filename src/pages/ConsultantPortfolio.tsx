import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConsultantCard from "../components/ConsultantCard";
import { consultants } from "../data/consultants";

const ConsultantsPage: React.FC = () => {
  return (
    <div className="bg-background-dark min-h-screen flex flex-col font-display text-primary overflow-x-hidden selection:bg-accent selection:text-black">
       <div
        className="fixed inset-0 z-0 pointer-events-none opacity-5 grayscale"
        style={{
          backgroundImage: "radial-gradient(#22c55e 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>
      <Header />

      <main className="flex-grow flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full max-w-[1280px] px-4 md:px-10 lg:px-40 py-12 md:py-20">
          <div className="relative overflow-hidden rounded-xl bg-surface-dark border border-white/10">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "radial-gradient(#333 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 p-8 md:p-16 items-end md:items-center justify-between min-h-[400px]">
              <div className="flex flex-col gap-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1 w-fit">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                  <span className="text-xs font-mono text-gray-400">
                    System Status: Online
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white text-glow">
                  Meet the
                  <br />
                  Kernel.
                </h1>
                <p className="text-lg text-gray-400 max-w-lg">
                  Principal Consultants deploying expertise.
                </p>
              </div>
            </div>


          </div>
        </section>

        {/* Consultants Section */}
        <section className="w-full max-w-[1000px] px-4 md:px-10 pb-20 flex flex-col gap-12">
          {consultants.map((c, idx) => (
            <ConsultantCard key={idx} consultant={c} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ConsultantsPage;
