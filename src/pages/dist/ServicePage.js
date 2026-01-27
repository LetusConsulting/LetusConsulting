"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header_1 = require("../components/Header");
var Footer_1 = require("../components/Footer");
var services = [
    {
        module: "root/modules/IT_infrastructure",
        icon: "dns",
        title: "IT Infrastructure",
        subtitle: "// The Backbone",
        description: "Robust foundational architecture designed for high availability. We handle the heavy lifting of server management, virtualization, and hardware lifecycle so your applications have a solid place to live.",
        stats: ["[status: optimized]", "[uptime: 99.99%]"],
        features: [
            "Design & Planning",
            "Cloud & On‑Premises Deployment",
            "Maintenance & Support",
            "Procurement",
        ]
    },
    {
        module: "root/modules/networking",
        icon: "lan",
        title: "Networking",
        subtitle: "// The Connective Tissue",
        description: "High-speed, secure, and redundant network architectures. We connect your teams, offices, and data centers with precision engineering to ensure zero bottlenecks in your workflow.",
        stats: ["[latency: <1ms]", "[bandwidth: unltd]"],
        features: [
            "Design & Architecture",
            "Installation & Configuration",
            "Monitoring & Optimization",
            "Security & Access Control",
        ]
    },
    {
        module: "root/modules/cybersecurity",
        icon: "security",
        title: "Cybersecurity",
        subtitle: "// The Shield",
        description: "Proactive defense mechanisms protecting your critical assets. We don't just patch holes; we architect environments that are hostile to intruders but seamless for authorized users.",
        stats: ["[threats: blocked]", "[protocol: zero_trust]"],
        features: [
            "Security Engineering",
            "Compliance & Audit",
            "Penetration Testing",
            "Security-awareness Training",
        ]
    },
    {
        module: "root/modules/devops",
        icon: "all_inclusive",
        title: "DevOps",
        subtitle: "// The Accelerator",
        description: "Streamlining the path from code commit to production. We implement cultural philosophies and automated tools to increase your organization's ability to deliver applications at high velocity.",
        stats: ["[velocity: max]", "[deploy: automated]"],
        features: [
            "CI/CD Pipeline Design",
            "Containerization (K8s)",
            "Infrastructure as Code",
            "Automated Testing",
        ]
    },
    {
        module: "root/modules/software_engineering",
        icon: "terminal",
        title: "Software Development",
        subtitle: "// The Logic",
        description: "Custom software tailored to solve complex algorithmic challenges. Whether it's refactoring a legacy monolith or building a new microservice architecture, we write clean, maintainable code.",
        stats: ["[language: polyglot]", "[bugs: 0]"],
        features: [
            "Full-stack Engineering",
            "No-Code Development",
            "Legacy Refactoring",
            "Product Design & Prototyping",
        ]
    },
];
var ServicesPage = function () {
    return (react_1["default"].createElement("div", { className: "bg-background-dark min-h-screen flex flex-col font-display text-primary overflow-x-hidden selection:bg-accent selection:text-black" },
        react_1["default"].createElement("div", { className: "fixed inset-0 z-0 pointer-events-none opacity-5 grayscale", style: {
                backgroundImage: "radial-gradient(#22c55e 1px, transparent 1px)",
                backgroundSize: "24px 24px"
            } }),
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement("main", { className: "flex-grow flex flex-col items-center w-full" },
            react_1["default"].createElement("section", { className: "w-full max-w-[1280px] px-4 md:px-10 lg:px-40 py-12 md:py-20" },
                react_1["default"].createElement("div", { className: "relative overflow-hidden rounded-xl bg-surface-dark border border-[#222]" },
                    react_1["default"].createElement("div", { className: "absolute inset-0 opacity-20", style: {
                            backgroundImage: "radial-gradient(#333 1px, transparent 1px)",
                            backgroundSize: "24px 24px"
                        } }),
                    react_1["default"].createElement("div", { className: "absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-[100px] pointer-events-none" }),
                    react_1["default"].createElement("div", { className: "relative z-10 flex flex-col md:flex-row gap-8 p-8 md:p-16 items-end md:items-center justify-between min-h-[300px]" },
                        react_1["default"].createElement("div", { className: "flex flex-col gap-4 max-w-2xl" },
                            react_1["default"].createElement("div", { className: "inline-flex items-center gap-2 rounded-full border border-[#333] bg-[#000] px-3 py-1 w-fit" },
                                react_1["default"].createElement("span", { className: "material-symbols-outlined text-sm text-accent animate-pulse" }, "check_circle"),
                                react_1["default"].createElement("span", { className: "text-xs font-mono text-gray-400" }, "Modules Loaded: 5/5")),
                            react_1["default"].createElement("h1", { className: "text-5xl md:text-7xl font-black tracking-tighter text-white text-glow" },
                                "System",
                                react_1["default"].createElement("br", null),
                                "Capabilities."),
                            react_1["default"].createElement("p", { className: "text-lg text-gray-400 max-w-lg" }, "Deploying enterprise-grade solutions across the stack. From bare metal to cloud-native applications."))))),
            react_1["default"].createElement("section", { className: "w-full max-w-[1000px] px-4 md:px-10 pb-20 flex flex-col gap-8" }, services.map(function (service, idx) { return (react_1["default"].createElement("div", { key: idx, className: "group relative rounded-lg border border-[#222] bg-surface-dark hover:border-accent/50 transition-all duration-300 overflow-hidden" },
                react_1["default"].createElement("div", { className: "bg-black border-b border-[#222] px-4 py-2 flex items-center gap-2" },
                    react_1["default"].createElement("div", { className: "flex gap-1.5" },
                        react_1["default"].createElement("div", { className: "w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" }),
                        react_1["default"].createElement("div", { className: "w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" }),
                        react_1["default"].createElement("div", { className: "w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" })),
                    react_1["default"].createElement("div", { className: "text-[10px] font-mono text-gray-600 ml-2 group-hover:text-accent/70 transition-colors" }, service.module)),
                react_1["default"].createElement("div", { className: "p-6 md:p-8 flex flex-col md:flex-row gap-8" },
                    react_1["default"].createElement("div", { className: "flex-shrink-0 flex flex-col items-center md:items-start gap-4 w-full md:w-48" },
                        react_1["default"].createElement("div", { className: "h-24 w-24 rounded-2xl bg-[#111] border border-[#222] flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:border-accent/20 transition-all duration-300 shadow-inner" },
                            react_1["default"].createElement("span", { className: "material-symbols-outlined text-5xl text-gray-400 group-hover:text-accent transition-colors duration-300" }, service.icon)),
                        react_1["default"].createElement("div", { className: "font-mono text-xs text-gray-500 text-center md:text-left" }, service.stats.map(function (stat, i) { return (react_1["default"].createElement("span", { key: i, className: "block mb-1" }, stat)); }))),
                    react_1["default"].createElement("div", { className: "flex-1 w-full" },
                        react_1["default"].createElement("h3", { className: "text-3xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300" }, service.title),
                        react_1["default"].createElement("p", { className: "text-accent/70 font-mono text-sm mb-4" }, service.subtitle),
                        react_1["default"].createElement("p", { className: "text-gray-400 mb-6 leading-relaxed" }, service.description),
                        react_1["default"].createElement("div", { className: "bg-black rounded-lg border border-[#222] p-4 font-mono text-sm text-gray-500" },
                            react_1["default"].createElement("p", { className: "text-gray-600 mb-2 border-b border-[#222] pb-1 text-xs uppercase tracking-wider" }, "Features"),
                            react_1["default"].createElement("ul", { className: "grid md:grid-cols-2 gap-2" }, service.features.map(function (f, i) { return (react_1["default"].createElement("li", { key: i, className: "flex items-center gap-2 hover:text-gray-300 transition-colors" },
                                react_1["default"].createElement("span", { className: "text-accent" }, ">"),
                                " ",
                                f)); }))))))); }))),
        react_1["default"].createElement(Footer_1["default"], null)));
};
exports["default"] = ServicesPage;
