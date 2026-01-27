"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header_1 = require("../components/Header");
var Footer_1 = require("../components/Footer");
var ConsultantCard_1 = require("../components/ConsultantCard");
var consultants_1 = require("../data/consultants");
var ConsultantsPage = function () {
    return (react_1["default"].createElement("div", { className: "bg-background-dark min-h-screen flex flex-col font-display text-primary overflow-x-hidden selection:bg-accent selection:text-black" },
        react_1["default"].createElement("div", { className: "fixed inset-0 z-0 pointer-events-none opacity-5 grayscale", style: {
                backgroundImage: "radial-gradient(#22c55e 1px, transparent 1px)",
                backgroundSize: "24px 24px"
            } }),
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement("main", { className: "flex-grow flex flex-col items-center w-full" },
            react_1["default"].createElement("section", { className: "w-full max-w-[1280px] px-4 md:px-10 lg:px-40 py-12 md:py-20" },
                react_1["default"].createElement("div", { className: "relative overflow-hidden rounded-xl bg-surface-dark border border-white/10" },
                    react_1["default"].createElement("div", { className: "absolute inset-0 opacity-20", style: {
                            backgroundImage: "radial-gradient(#333 1px, transparent 1px)",
                            backgroundSize: "24px 24px"
                        } }),
                    react_1["default"].createElement("div", { className: "absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-[100px] pointer-events-none" }),
                    react_1["default"].createElement("div", { className: "relative z-10 flex flex-col md:flex-row gap-8 p-8 md:p-16 items-end md:items-center justify-between min-h-[400px]" },
                        react_1["default"].createElement("div", { className: "flex flex-col gap-4 max-w-2xl" },
                            react_1["default"].createElement("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1 w-fit" },
                                react_1["default"].createElement("span", { className: "h-2 w-2 rounded-full bg-accent animate-pulse" }),
                                react_1["default"].createElement("span", { className: "text-xs font-mono text-gray-400" }, "System Status: Online")),
                            react_1["default"].createElement("h1", { className: "text-5xl md:text-7xl font-black tracking-tighter text-white text-glow" },
                                "Meet the",
                                react_1["default"].createElement("br", null),
                                "Kernel."),
                            react_1["default"].createElement("p", { className: "text-lg text-gray-400 max-w-lg" }, "Principal Consultants deploying expertise."))))),
            react_1["default"].createElement("section", { className: "w-full max-w-[1000px] px-4 md:px-10 pb-20 flex flex-col gap-12" }, consultants_1.consultants.map(function (c, idx) { return (react_1["default"].createElement(ConsultantCard_1["default"], { key: idx, consultant: c })); }))),
        react_1["default"].createElement(Footer_1["default"], null)));
};
exports["default"] = ConsultantsPage;
