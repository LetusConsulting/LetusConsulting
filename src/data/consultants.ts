// src/data/consultants.ts
import type { Consultant } from "../types/consultant";
import Samson from "../assets/icons/Samson.jpeg";
import Fatima from "../assets/icons/Fatima.jpeg";
import Uchechukwu from "../assets/icons/Uchechukwu.jpeg";
// or relative path:
// import DavidVossAvatar from "../assets/images/david-voss.jpg";



export const consultants: Consultant[] = [
  {
    id: 1,
    name: "Samson Idowu",
    title: "Cybersecurity & IT Infrastructure",
    avatar: Samson,
    verified: true,
    skills: [
      { name: "Cybersecurity", icon: "security" },
      { name: "Networking", icon: "router" },
      { name: "DevSecOps", icon: "rule" },
      { name: "IT Infrastrcuture", icon: "terminal" },
    ],
    // projects: [
    //   {
    //     title: "Global SecOps Implementation",
    //     description: "Established 24/7 SOC for multinational retailer.",
    //   },
    //   {
    //     title: "Ransomware Recovery",
    //     description: "Restored critical infrastructure in 4 hours post-attack.",
    //   },
    // ],
    metrics: {
      Clients: "100+",
      Projects: "50+",
      Rating: "4.9/5",
    },
    description:
      "Samson is a cybersecurity and IT infrastructure leader with several years of experience managing IT and security operations across complex, high-risk environments. He brings deep expertise with a strong management track record guiding teams and organizations toward resilient, well-governed security programs, while leading project initiatives at Letus.",
    profileLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/samson-idowu",
      },
      // {
      //   label: "Portfolio",
      //   url: "https://samson.dev",
      // },
    ],
  },

  {
    id: 2,
    name: "Fatima Modupe Bello",
    title: "Software Development",
    avatar: Fatima,
    verified: true,
    skills: [
      { name: "AI Engineering", icon: "memory" },
      { name: "Data Base", icon: "storage" },
      { name: "Analytics", icon: "insights" },
      { name: "Reactjs / Nodejs", icon: "code" },
    ],
    // projects: [
    //   {
    //     title: "Market Prediction Engine",
    //     description: "Built real-time forecasting model with 94% accuracy.",
    //   },
    //   {
    //     title: "Supply Chain Optimization",
    //     description: "Automated logistics routing saving 12% operational costs.",
    //   },
    // ],
    metrics: {
      Clients: "85+",
      Projects: "30+",
      Rating: "4.8/5",
    },
    description:
      "Fatima is a software developer with over 8 years of experience in building scalable and high-performance applications. She specializes in full-stack development and AI engineering. Fatima has led multiple successful projects in fintech and enterprise environments, delivering solutions that drive business value and operational efficiency.",
    profileLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/fatimabello",
      },
      // {
      //   label: "Portfolio",
      //   url: "https://fatima.dev",
      // },
    ],
  },

  {
    id: 3,
    name: "Uchechukwu Chukwuanyi",
    title: "Systems Administration & Networking",
    avatar: Uchechukwu,
    verified: true,
    skills: [
      { name: "Networking", icon: "security" },
      { name: "Systems Administration", icon: "router" },
      { name: "Cybersecurity", icon: "rule" },
      { name: "IT Projects", icon: "terminal" },
    ],
    // projects: [
    //   {
    //     title: "Global SecOps Implementation",
    //     description: "Established 24/7 SOC for multinational retailer.",
    //   },
    //   {
    //     title: "Ransomware Recovery",
    //     description: "Restored critical infrastructure in 4 hours post-attack.",
    //   },
    // ],
    metrics: {
      Clients: "100+",
      Projects: "50+",
      Rating: "4.9/5",
    },
    description:
      "Uchechukwu is an IT Infrastructure expert with over a decade of expertise in network design, systems administration, and enterprise IT operations. He is known for leading high-performing teams, delivering complex infrastructure projects, and ensuring secure, reliable IT environments aligned with business goals.",
    profileLinks: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/uchechukwu-chukwuanyi-2616181b3",
      },
      // {
      //   label: "Portfolio",
      //   url: "https://uchechukwu.dev",
      // },
    ],
  },
];
