// src/data/consultants.ts
import type { Consultant } from "../types/consultant";
import Samson from "../assets/icons/Samson.jpeg";
import Fatima from "../assets/icons/Fatima.jpeg";
// or relative path:
// import DavidVossAvatar from "../assets/images/david-voss.jpg";



export const consultants: Consultant[] = [
   {
    id: 1,
    name: "Samson Idowu",
    title: "Managing Director",
    avatar: Samson,
    verified: true,
    skills: [
      { name: "Cybersecurity", icon: "security" },
      { name: "Networking", icon: "router" },
      { name: "Compliance", icon: "rule" },
      { name: "Bash", icon: "terminal" }
    ],
    // projects: [
    //   { title: "Global SecOps Implementation", description: "Established 24/7 SOC for multinational retailer." },
    //   { title: "Ransomware Recovery", description: "Restored critical infrastructure in 4 hours post-attack." }
    // ],
    metrics: {
      Clients: "100",
      Projects: "50",
      Rating: "4.9/5"
    },
    description: "Samson is a cybersecurity veteran with over 10 years of experience leading global security initiatives. He has a proven track record of protecting critical infrastructure and mitigating cyber threats for Fortune 500 companies. Samson's expertise spans across network security, compliance, and incident response, making him a trusted advisor for organizations looking to strengthen their security posture.",
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
    title: "Software Deveopment Lead",
    avatar: Fatima,
    verified: true,
    skills: [
      { name: "AI Engineering", icon: "memory" },
      { name: "Data Base", icon: "storage" },
      { name: "Analytics", icon: "insights" },
      { name: "Reactjs / Nodejs", icon: "code" }
    ],
    // projects: [
    //   { title: "Market Prediction Engine", description: "Built real-time forecasting model with 94% accuracy." },
    //   { title: "Supply Chain Optimization", description: "Automated logistics routing saving 12% operational costs." }
    // ],
    metrics: {
      Clients: "85",
      Projects: "30",
      Rating: "4.8/5"
    },
    description: "Fatima is a software development lead with over 8 years of experience in building scalable and high-performance applications. She specializes in full-stack development and AI engineering. Fatima has led multiple successful projects in fintech and enterprise environments, delivering solutions that drive business value and operational efficiency.",
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
 
];
