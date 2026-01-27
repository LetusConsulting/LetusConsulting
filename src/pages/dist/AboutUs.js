"use strict";
exports.__esModule = true;
// App.tsx
var react_1 = require("react");
var Header_1 = require("../components/Header");
var Footer_1 = require("../components/Footer");
var App = function () {
    return (react_1["default"].createElement("div", { className: "bg-background-dark dark:bg-background-dark text-accent dark:text-white font-display overflow-x-hidden" },
        react_1["default"].createElement("div", { className: "fixed inset-0 z-0 pointer-events-none opacity-5 grayscale", style: {
                backgroundImage: "radial-gradient(#22c55e 1px, transparent 1px)",
                backgroundSize: "24px 24px"
            } }),
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement("section", { className: "px-6 md:px-20 xl:px-40 py-10 md:py-20 flex flex-col lg:flex-row items-center gap-10 max-w-[1200px] mx-auto" },
            react_1["default"].createElement("div", { className: "flex flex-col gap-6 lg:w-2/2 justify-center" },
                react_1["default"].createElement("div", { className: "flex flex-col gap-4" },
                    react_1["default"].createElement("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1 w-fit" },
                        react_1["default"].createElement("span", { className: "h-2 w-2 rounded-full bg-accent animate-pulse" }),
                        react_1["default"].createElement("span", { className: "text-xs font-mono text-gray-400" }, "System Status: Online")),
                    react_1["default"].createElement("h1", { className: "!text-[70px] md:text-6xl font-black leading-[1.1] tracking-[-0.033em] text-accent dark:text-white" },
                        "We do IT",
                        " "),
                    react_1["default"].createElement("div", { className: "text-[22px] font-normal leading-relaxed dark:text-primary  text-primary blinking-cursor " }, "For your business, and beyond"),
                    react_1["default"].createElement("p", { className: "text-base text-slate-500 dark:text-gray-400" },
                        "Letus is an IT consulting firm that takes the complexity out of technology so you can focus on what matters most: growth, innovation, and impact. We\u2019re not just an IT consulting firm, we\u2019re a growing team of experienced professionals working as consultants to solve challenges, drive transformation, and deliver real results in a fast-changing digital world.",
                        react_1["default"].createElement("br", null),
                        " ",
                        react_1["default"].createElement("br", null),
                        "Headquartered in Nigeria, we\u2019re open to doing business and consulting anywhere in the world. We blend deep experience with forward-thinking creativity to deliver solutions that fit your business goals, whether it\u2019s strengthening infrastructure, securing your systems, modernizing workflows, or building custom tools that accelerate performance.",
                        react_1["default"].createElement("br", null),
                        " ",
                        react_1["default"].createElement("br", null),
                        "With a people-first approach and a passion for practical outcomes, we make technology work for you, not the other way around. Ready to turn challenges into opportunities? Letus do IT.")),
                react_1["default"].createElement("div", { className: "flex gap-4 pt-2" },
                    react_1["default"].createElement("button", { className: "flex items-center justify-center h-12 px-6 bg-primary hover:bg-accent text-black font-bold rounded-lg shadow-lg shadow-primary/25" }, "View our work")))),
        react_1["default"].createElement("section", { className: "px-6 md:px-20 xl:px-40 py-10 md:py-20 max-w-[1200px] mx-auto" },
            react_1["default"].createElement("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-8 mb-10" },
                react_1["default"].createElement("div", { className: "flex flex-col gap-2" },
                    react_1["default"].createElement("h2", { className: "text-3xl md:text-4xl font-black leading-tight tracking-tight text-accent dark:text-white" }, "The Gen Z Approach"),
                    react_1["default"].createElement("p", { className: "text-base text-slate-500 dark:text-gray-400" }, "We put people first and focus on results that actually matter. Our goal is simple: make technology practical, accessible, and impactful for your business. Whether you are solving everyday IT challenges or planning for growth, we help you turn complexity into clarity. Let us do IT."))),
            react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6" }, [
                {
                    icon: "sports_esports",
                    title: "Playful Innovation",
                    desc: "Innovation doesn’t have to be rigid. We explore ideas creatively, think beyond the obvious, and design IT solutions that are both smart and flexible. By staying curious and adaptive, we help businesses evolve with confidence."
                },
                {
                    icon: "visibility",
                    title: "Radical Transparency",
                    desc: "We believe trust is built through clarity. From strategy to delivery, we keep communication open, processes visible, and expectations realistic. No hidden details, just honest collaboration every step of the way."
                },
                {
                    icon: "terminal",
                    title: "Geek at Heart",
                    desc: "Technology is more than tools, it’s how we solve problems and create possibilities. From modern IT infrastructure to emerging digital solutions, we stay ahead of trends so our clients can stay ahead of the curve."
                },
            ].map(function (feature) { return (react_1["default"].createElement("div", { key: feature.title, className: "flex flex-col gap-5 rounded-xl  border-white/10 bg-card-dark p-6 hover:border-primary/50 transition-colors" },
                react_1["default"].createElement("div", { className: "size-12 rounded-lg bg-background-dark border border-white/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors" },
                    react_1["default"].createElement("span", { className: "material-symbols-outlined text-white group-hover:text-primary transition-colors" }, feature.icon)),
                react_1["default"].createElement("div", { className: "flex flex-col gap-2" },
                    react_1["default"].createElement("h3", { className: "text-xl font-bold leading-tight text-accent dark:text-white" }, feature.title),
                    react_1["default"].createElement("p", { className: "text-sm leading-relaxed text-slate-600 dark:text-gray-400" }, feature.desc)))); }))),
        react_1["default"].createElement(Footer_1["default"], null),
        react_1["default"].createElement("style", null, "\n        .blinking-cursor::after {\n          content: '|';\n          animation: blink 1s step-end infinite;\n          color: #22c55e;\n        }\n        @keyframes blink {\n          0%, 100% { opacity: 1; }\n          50% { opacity: 0; }\n        }\n      ")));
};
exports["default"] = App;
