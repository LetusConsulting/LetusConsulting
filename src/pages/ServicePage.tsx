import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Service } from "../types/service";

const services: Service[] = [
  {
    module: "root/modules/infrastructure",
    icon: "dns",
    title: "IT Infrastructure",
    subtitle: "// The Backbone",
    description: "Robust foundational architecture designed for high availability. We handle the heavy lifting of server management, virtualization, and hardware lifecycle so your applications have a solid place to live.",
    stats: ["[status: optimized]", "[uptime: 99.99%]"],
    features: ["Hybrid Cloud Setup", "Server Virtualization", "Disaster Recovery", "Hardware Procurement"]
  },
  {
    module: "root/modules/networking",
    icon: "lan",
    title: "Networking",
    subtitle: "// The Connective Tissue",
    description: "High-speed, secure, and redundant network architectures. We connect your teams, offices, and data centers with precision engineering to ensure zero bottlenecks in your workflow.",
    stats: ["[latency: <1ms]", "[bandwidth: unltd]"],
    features: ["SD-WAN Implementation", "Network Architecture", "VPN & Remote Access", "Wireless Site Surveys"]
  },
  {
    module: "root/modules/security",
    icon: "security",
    title: "Cybersecurity",
    subtitle: "// The Shield",
    description: "Proactive defense mechanisms protecting your critical assets. We don't just patch holes; we architect environments that are hostile to intruders but seamless for authorized users.",
    stats: ["[threats: blocked]", "[protocol: zero_trust]"],
    features: ["Penetration Testing", "SOC Monitoring (24/7)", "Identity Management (IAM)", "Compliance Audits"]
  },
  {
    module: "root/modules/devops",
    icon: "all_inclusive",
    title: "DevOps",
    subtitle: "// The Accelerator",
    description: "Streamlining the path from code commit to production. We implement cultural philosophies and automated tools to increase your organization's ability to deliver applications at high velocity.",
    stats: ["[velocity: max]", "[deploy: automated]"],
    features: ["CI/CD Pipeline Design", "Containerization (K8s)", "Infrastructure as Code", "Automated Testing"]
  },
  {
    module: "root/modules/engineering",
    icon: "terminal",
    title: "Software Development",
    subtitle: "// The Logic",
    description: "Custom software tailored to solve complex algorithmic challenges. Whether it's refactoring a legacy monolith or building a new microservice architecture, we write clean, maintainable code.",
    stats: ["[language: polyglot]", "[bugs: 0]"],
    features: ["Full-stack Engineering", "API Integration", "Legacy Refactoring", "Mobile Solutions"]
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-background-dark min-h-screen flex flex-col font-display text-primary overflow-x-hidden selection:bg-accent-blue selection:text-black">
      <Header />

      <main className="flex-grow flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full max-w-[1280px] px-4 md:px-10 lg:px-40 py-12 md:py-20">
          <div className="relative overflow-hidden rounded-xl bg-surface-dark border border-[#222]">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 p-8 md:p-16 items-end md:items-center justify-between min-h-[300px]">
              <div className="flex flex-col gap-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#333] bg-[#000] px-3 py-1 w-fit">
                  <span className="material-symbols-outlined text-sm text-accent-blue animate-pulse">check_circle</span>
                  <span className="text-xs font-mono text-gray-400">Modules Loaded: 5/5</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white text-glow">System<br />Capabilities.</h1>
                <p className="text-lg text-gray-400 max-w-lg">
                  Deploying enterprise-grade solutions across the stack. From bare metal to cloud-native applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full max-w-[1000px] px-4 md:px-10 pb-20 flex flex-col gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group relative rounded-lg border border-[#222] bg-surface-dark hover:border-accent-blue/50 transition-all duration-300 overflow-hidden">
              <div className="bg-black border-b border-[#222] px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="text-[10px] font-mono text-gray-600 ml-2 group-hover:text-accent-blue/70 transition-colors">{service.module}</div>
              </div>
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4 w-full md:w-48">
                  <div className="h-24 w-24 rounded-2xl bg-[#111] border border-[#222] flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:border-accent-blue/20 transition-all duration-300 shadow-inner">
                    <span className="material-symbols-outlined text-5xl text-gray-400 group-hover:text-accent-blue transition-colors duration-300">{service.icon}</span>
                  </div>
                  <div className="font-mono text-xs text-gray-500 text-center md:text-left">
                    {service.stats.map((stat, i) => <span key={i} className="block mb-1">{stat}</span>)}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-accent-blue transition-colors duration-300">{service.title}</h3>
                  <p className="text-accent-blue/70 font-mono text-sm mb-4">{service.subtitle}</p>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <div className="bg-black rounded-lg border border-[#222] p-4 font-mono text-sm text-gray-500">
                    <p className="text-gray-600 mb-2 border-b border-[#222] pb-1 text-xs uppercase tracking-wider">Features</p>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                          <span className="text-accent-blue">&gt;</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
