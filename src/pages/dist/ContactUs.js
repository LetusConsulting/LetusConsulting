"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var Footer_1 = require("../components/Footer");
var Header_1 = require("../components/Header");
var ContactUs = function () {
    var _a = react_1.useState({
        name: "",
        email: "",
        subject: "Consulting Inquiry",
        message: ""
    }), formData = _a[0], setFormData = _a[1];
    var _b = react_1.useState({ type: "idle", message: "IDLE" }), status = _b[0], setStatus = _b[1];
    var handleInputChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var API_URL, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    // Validation
                    if (!formData.name || !formData.email || !formData.message) {
                        setStatus({ type: "error", message: "All fields are required" });
                        return [2 /*return*/];
                    }
                    setStatus({ type: "loading", message: "SENDING..." });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
                    return [4 /*yield*/, fetch(API_URL + "/api/contact", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(formData)
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    if (response.ok && data.success) {
                        setStatus({ type: "success", message: "MESSAGE SENT!" });
                        // Reset form
                        setFormData({
                            name: "",
                            email: "",
                            subject: "Consulting Inquiry",
                            message: ""
                        });
                        // Reset status after 5 seconds
                        setTimeout(function () {
                            setStatus({ type: "idle", message: "IDLE" });
                        }, 5000);
                    }
                    else {
                        throw new Error(data.message || "Failed to send message");
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error("Error:", error_1);
                    setStatus({
                        type: "error",
                        message: error_1 instanceof Error ? error_1.message : "FAILED TO SEND"
                    });
                    // Reset error after 5 seconds
                    setTimeout(function () {
                        setStatus({ type: "idle", message: "IDLE" });
                    }, 5000);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "bg-black text-white font-display overflow-x-hidden antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white" },
        react_1["default"].createElement("div", { className: "fixed inset-0 z-0 pointer-events-none opacity-5 grayscale", style: {
                backgroundImage: "radial-gradient(#22c55e 1px, transparent 1px)",
                backgroundSize: "24px 24px"
            } }),
        react_1["default"].createElement(Header_1["default"], null),
        react_1["default"].createElement("main", { className: "relative z-10 flex-1 w-full max-w-[1200px] mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row gap-12 lg:gap-24" },
            react_1["default"].createElement("div", { className: "flex-1 flex flex-col gap-10" },
                react_1["default"].createElement("div", { className: "flex flex-col gap-4" },
                    react_1["default"].createElement("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1 w-fit" },
                        react_1["default"].createElement("span", { className: "h-2 w-2 rounded-full bg-accent animate-pulse" }),
                        react_1["default"].createElement("span", { className: "text-xs font-mono text-gray-400" }, "System Status: Online")),
                    react_1["default"].createElement("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight" },
                        "We transform challenges into   results.",
                        react_1["default"].createElement("br", null)),
                    react_1["default"].createElement("p", { className: "text-lg text-slate-400 max-w-md" }, "Reach out to start the conversation, Letus make IT happen.")),
                react_1["default"].createElement("div", { className: "flex flex-col gap-4" },
                    react_1["default"].createElement(ContactCard, { icon: "mail", label: "SMTP//Request", content: "hello@letusconsulting.com", href: "mailto:hello@letusconsulting.com" }),
                    react_1["default"].createElement(ContactCard, { icon: "call", label: "VOIP//Connect", content: "+2347032844735", href: "tel:+2347032844735" }),
                    react_1["default"].createElement(ContactCard, { icon: "terminal", label: "LOCALHOST//Origin", content: "127.0.0.1 (Virtual Office)" })),
                react_1["default"].createElement("div", { className: "flex gap-6 mt-2" },
                    react_1["default"].createElement(SocialLink, { label: "GitHub" }),
                    react_1["default"].createElement(SocialLink, { label: "LinkedIn" }),
                    react_1["default"].createElement(SocialLink, { label: "Twitter" }))),
            react_1["default"].createElement("div", { className: "flex-1" },
                react_1["default"].createElement("div", { className: "h-full bg-[#22c55e14]/5 border border-accent/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden" },
                    react_1["default"].createElement("div", { className: "absolute -top-10 -right-10 text-[10rem] text-primary/5 font-bold leading-none pointer-events-none select-none" }, "{}"),
                    react_1["default"].createElement("div", { className: "relative" },
                        react_1["default"].createElement("h3", { className: "text-xl font-bold text-white mb-2" }, "Initialize Handshake"),
                        react_1["default"].createElement("p", { className: "text-sm text-slate-400" }, "Fill out the parameters below to execute contact request.")),
                    react_1["default"].createElement("form", { onSubmit: handleSubmit, className: "flex flex-col gap-5 relative z-10" },
                        react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5" },
                            react_1["default"].createElement(FormInput, { label: "Name", name: "name", type: "text", placeholder: "John Doe", value: formData.name, onChange: handleInputChange, required: true }),
                            react_1["default"].createElement(FormInput, { label: "Email", name: "email", type: "email", placeholder: "john@example.com", value: formData.email, onChange: handleInputChange, required: true })),
                        react_1["default"].createElement("div", { className: "flex flex-col gap-2" },
                            react_1["default"].createElement("label", { className: "text-xs font-mono text-primary uppercase tracking-wider", htmlFor: "subject" }, "Subject"),
                            react_1["default"].createElement("div", { className: "relative" },
                                react_1["default"].createElement("select", { className: "bg-[#000] border border-accent/30 text-white text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary block w-full p-3 appearance-none transition-all", id: "subject", name: "subject", value: formData.subject, onChange: handleInputChange },
                                    react_1["default"].createElement("option", null, "Consulting Inquiry"),
                                    react_1["default"].createElement("option", null, "System Audit"),
                                    react_1["default"].createElement("option", null, "Bug Report"),
                                    react_1["default"].createElement("option", null, "General Ping")),
                                react_1["default"].createElement("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400" },
                                    react_1["default"].createElement("span", { className: "material-symbols-outlined text-sm" }, "expand_more")))),
                        react_1["default"].createElement("div", { className: "flex flex-col gap-2" },
                            react_1["default"].createElement("label", { className: "text-xs font-mono text-primary uppercase tracking-wider", htmlFor: "message" }, "Message"),
                            react_1["default"].createElement("textarea", { className: "bg-[#000] border border-accent/30 text-white text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary block w-full p-3 placeholder-slate-600 transition-all resize-none", id: "message", name: "message", placeholder: "Describe your issue or requirements...", rows: 4, value: formData.message, onChange: handleInputChange, required: true })),
                        status.type !== "idle" && (react_1["default"].createElement("div", { className: "p-3 rounded-lg text-sm font-mono " + (status.type === "success"
                                ? "bg-green-500/10 border border-green-500/30 text-green-400"
                                : status.type === "error"
                                    ? " text-red-400"
                                    : "text-accent/50") }, status.message)),
                        react_1["default"].createElement("div", { className: "pt-2" },
                            react_1["default"].createElement("button", { className: "group border border-accent hover:border-accent w-full flex items-center justify-center gap-2 bg-primary hover:bg-accent text-accent hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-green-glow hover:shadow-green-glow-hover disabled:opacity-50 disabled:cursor-not-allowed", type: "submit", disabled: status.type === "loading" },
                                react_1["default"].createElement("span", null, status.type === "loading" ? "Sending..." : "Execute"),
                                status.type !== "loading" && (react_1["default"].createElement("span", { className: "material-symbols-outlined group-hover:translate-x-1 transition-transform text-sm" }, "arrow_forward_ios"))))),
                    react_1["default"].createElement("div", { className: "mt-2 border-t border-accent/30 pt-4 flex justify-between items-center text-[10px] text-accent/50 font-mono" },
                        react_1["default"].createElement("span", null,
                            "STATUS: ",
                            status.message),
                        react_1["default"].createElement("span", null, "LETUS"))))),
        react_1["default"].createElement(Footer_1["default"], null)));
};
exports["default"] = ContactUs;
/* Reusable subcomponents */
var ContactCard = function (_a) {
    var icon = _a.icon, label = _a.label, content = _a.content, href = _a.href;
    return (react_1["default"].createElement("div", { className: "group flex items-center gap-4 bg-[#000] border border-accent/30 p-4 rounded-xl hover:border-accent/50 transition-colors duration-300" },
        react_1["default"].createElement("div", { className: "flex items-center justify-center size-12 rounded-lg bg-[#000] text-primary group-hover:text-white transition-colors" },
            react_1["default"].createElement("span", { className: "material-symbols-outlined" }, icon)),
        react_1["default"].createElement("div", { className: "flex flex-col" },
            react_1["default"].createElement("span", { className: "text-xs text-slate-500 font-mono mb-0.5" }, label),
            href ? (react_1["default"].createElement("a", { className: "text-white font-medium hover:text-primary transition-colors", href: href }, content)) : (react_1["default"].createElement("p", { className: "text-white font-medium" }, content)))));
};
var SocialLink = function (_a) {
    var label = _a.label;
    return (react_1["default"].createElement("a", { className: "flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group", href: "#" },
        react_1["default"].createElement("span", { className: "text-primary font-mono group-hover:translate-x-1 transition-transform" }, ">"),
        label));
};
var FormInput = function (_a) {
    var label = _a.label, name = _a.name, type = _a.type, placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange, required = _a.required;
    return (react_1["default"].createElement("div", { className: "flex flex-col gap-2" },
        react_1["default"].createElement("label", { className: "text-xs font-mono text-primary uppercase tracking-wider" }, label),
        react_1["default"].createElement("input", { type: type, name: name, placeholder: placeholder, value: value, onChange: onChange, required: required, className: "bg-[#000] border border-accent/30 text-white text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-accent/50 block w-full p-3 placeholder-slate-600 transition-all" })));
};
