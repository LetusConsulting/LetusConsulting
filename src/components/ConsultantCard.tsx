// src/components/ConsultantCard.tsx
import React from "react";
import type { Consultant } from "../types/consultant";

interface Props {
  consultant: Consultant;
}

const ConsultantCard: React.FC<Props> = ({ consultant }) => {
  return (
    <div className="group relative rounded-lg border border-white/10 bg-card-dark p-6 md:p-8 hover:border-accent-blue/40 transition-all duration-500">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Avatar Section */}
        <div className="flex-shrink-0 flex flex-col items-center gap-4 mx-auto md:mx-0">
          <div className="relative h-40 w-40 rounded-full border-2 border-[#333] p-1 group-hover:border-accent-blue transition-colors duration-500">
            <img
              src={consultant.avatar} // ✅ fixed from consultant.image
              alt={consultant.name}
              className="h-full w-full rounded-full object-cover grayscale"
            />
          </div>
          {consultant.verified && (
            <div className="flex items-center gap-1 text-xs font-mono text-gray-500 group-hover:text-accent-blue/80 transition-colors">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              <span>Verified</span>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 w-full">
          {/* Name and Metrics */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
            <div>
              <h3 className="text-3xl font-bold text-white group-hover:text-accent-blue transition-colors duration-300">
                {consultant.name}
              </h3>
              <p className="text-primary/60 font-mono text-sm">// {consultant.title}</p>
            </div>

            {/* Metrics */}
            <div className="flex gap-2 flex-wrap">
              {consultant.metrics &&
                Object.entries(consultant.metrics).map(([key, value], idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-black/50 text-xs font-mono text-gray-400 border border-white/10"
                  >
                    {key}: {value}
                  </span>
                ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 mb-6 leading-relaxed">{consultant.description}</p>

          {/* Skills */}
          {consultant.skills && consultant.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {consultant.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex h-8 items-center justify-center gap-x-2 rounded-full border border-white/10 bg-transparent hover:bg-white/5 hover:border-accent-blue/50 pl-4 pr-4 transition-colors cursor-default group/chip"
                >
                  <span className="material-symbols-outlined text-[16px] text-gray-500 group-hover/chip:text-accent-blue transition-colors">
                    {skill.icon}
                  </span>
                  <p className="text-sm font-medium text-gray-300">{skill.name}</p>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {consultant.projects && consultant.projects.length > 0 && (
            <div className="border-t border-white/10 pt-6">
              <h4 className="text-sm font-bold text-gray-500 mb-4 font-mono uppercase tracking-wider">
                Project Log
              </h4>
              <div className="grid grid-cols-[24px_1fr] gap-x-4">
                {consultant.projects.map((project, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center">
                      <div className="h-2 w-2 rounded-full bg-accent-blue mt-2 shadow-[0_0_8px_rgba(56,189,248,0.5)]"></div>
                      {idx < consultant.projects.length - 1 && <div className="w-[1px] bg-white/10 h-full my-1"></div>}
                    </div>
                    <div className="pb-6">
                      <p className="text-white font-medium">{project.title}</p>
                      <p className="text-sm text-gray-500">{project.description}</p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Full Profile Button */}
          <div className="mt-6 flex justify-end">
            <button className="text-sm font-bold text-white hover:text-accent-blue underline decoration-white/20 hover:decoration-accent-blue/30 underline-offset-4 flex items-center gap-1 transition-all">
              Full_Profile <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantCard;
