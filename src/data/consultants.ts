// src/data/consultants.ts
import type { Consultant } from "../types/consultant";
import Samson from "../assets/icons/Samson.jpeg";
// or relative path:
// import DavidVossAvatar from "../assets/images/david-voss.jpg";



export const consultants: Consultant[] = [
   {
    id: 1,
    name: "Samson Idowu",
    title: "The Operator",
    avatar: Samson,
    verified: true,
    skills: [
      { name: "Cybersecurity", icon: "security" },
      { name: "Networking", icon: "router" },
      { name: "Compliance", icon: "rule" },
      { name: "Bash", icon: "terminal" }
    ],
    projects: [
      { title: "Global SecOps Implementation", description: "Established 24/7 SOC for multinational retailer." },
      { title: "Ransomware Recovery", description: "Restored critical infrastructure in 4 hours post-attack." }
    ],
    metrics: {
      Clients: "100",
      Projects: "50",
      Rating: "4.9/5"
    },
    description: ""
  },
  {
    id: 2,
    name: "Alex Mercer",
    title: "The Architect",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW3jJsyLQsKM7Mettau_VAT_ntSm7i8mNzErTvpvXDOsx_k26yqfPsuExpZKINxDY8LuKbtez7n8EZSlTpDMwL5KwNUv5R95jo8YGq2c4FWhjl2xV-bVzjbP3faGiYSous4ZNEW7w3N-_zUZIiLOlurDhkTUv8lTkelVSh_X2jbOSg3Z9FREnLP04iq3w_guXDxumDXHDw3aPllkR0D-uFplwLO6eITzZOu5XQ_wuBZPGaAIGOcR_t313mpntKeCp4GY-om54pJNVm",
    verified: true,
    skills: [
      { name: "Cloud Architecture", icon: "cloud" },
      { name: "DevOps", icon: "settings" },
      { name: "Security", icon: "shield" },
      { name: "Python", icon: "code" }
    ],
    projects: [
      { title: "FinTech Core Migration", description: "Migrated monolith to microservices for top 10 bank." },
      { title: "Legacy System Overhaul", description: "Reduced technical debt by 40% in 6 months." }
    ],
    metrics: {
      Clients: "120",
      Projects: "45",
      Rating: "4.9/5"
    },
    description: ""
  },
  {
    id: 3,
    name: "Sarah Chen",
    title: "The Alchemist",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkD2WiKx2i0YBKycyoh1__A0iDWy5SwhzAMXcVTY-Xffp58_x0V4BBiDSkzFUs8Sd9xv2M9n-HjOVUoPnewLJDGs5T3Bo2UU2OxpcsvkrUrMUu-n0KEQEf4r9B3q5GQAAag0E5pn4poLLnng-ekXYX_cbJQ6j9n-HyA4lEe1Oty4Yk_svsuGKnUhBGAIWw3kQsV65HDdI0ufCqeG3uC1mqn2PFQ_1ducQ2xjAdkJ8Dc3pBVlEMYBp2TBt3UIrjaXH8tkcMpwChMxcG",
    verified: true,
    skills: [
      { name: "AI / ML", icon: "memory" },
      { name: "Big Data", icon: "storage" },
      { name: "Analytics", icon: "insights" },
      { name: "R / Python", icon: "code" }
    ],
    projects: [
      { title: "Market Prediction Engine", description: "Built real-time forecasting model with 94% accuracy." },
      { title: "Supply Chain Optimization", description: "Automated logistics routing saving 12% operational costs." }
    ],
    metrics: {
      Clients: "85",
      Projects: "30",
      Rating: "4.8/5"
    },
    description: ""
  },
 
];
