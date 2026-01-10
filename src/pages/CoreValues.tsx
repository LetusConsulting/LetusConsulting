// =============================
// CoreValuesPage.tsx
// Wired to existing Header / Footer layout
// Uses SVG icon pipeline + Framer Motion
// Accent system: #206381 / #38BDF8
// =============================

import { motion } from "framer-motion";
import Terminal from "../assets/icons/terminal.svg?react";
import Shield from "../assets/icons/shield_lock.svg?react";
import Code from "../assets/icons/code.svg?react";
import Users from "../assets/icons/group.svg?react";

// =============================
// FeatureCard
// =============================

type FeatureCardProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  span?: boolean;
};

const FeatureCard = ({ icon: Icon, title, description, span }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`p-6 rounded-2xl bg-card-dark border border-white/5 hover:border-accent/40 transition-all ${
        span ? "sm:col-span-2" : ""
      }`}
    >
      <Icon className="w-8 h-8 text-accent mb-4" />
      <h4 className="text-white font-bold mb-2">{title}</h4>
      <p className="text-sm text-[#888] leading-relaxed">{description}</p>
    </motion.div>
  );
};

// =============================
// ValueBlock
// =============================

type ValueBlockProps = {
  version: string;
  title: string;
  subtitle: string;
  description: string;
  reverse?: boolean;
  features: FeatureCardProps[];
};

const ValueBlock = ({
  version,
  title,
  subtitle,
  description,
  reverse,
  features,
}: ValueBlockProps) => {
  return (
    <section className="border-b border-white/5 last:border-none">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`max-w-[960px] mx-auto px-6 py-28 flex flex-col gap-16 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Text */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-card-dark border border-white/5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono text-[#888]">{version}</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {title}: <br />
            <span>{subtitle}</span>
          </h3>

          <p className="text-[#888] leading-relaxed max-w-md">{description}</p>
        </div>

        {/* Features */}
        <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// =============================
// CoreValuesPage
// =============================

const CoreValuesPage = () => {
  return (
    <div className="w-full bg-background-dark text-white">
      {/* HEADER is already global in layout */}

      {/* HERO */}
      <section className="py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-[960px] mx-auto rounded-2xl border border-white/5 bg-black/80 backdrop-blur-md p-14"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            &gt; defining_our_<span className="text-accent">principles</span>
            <span className="animate-pulse">_</span>
          </h1>
          <p className="text-[#888] max-w-2xl mx-auto">
            Our operating system for success. The source code of our culture.
          </p>
        </motion.div>
      </section>

      {/* SOURCE HEADER */}
      <div className="max-w-[960px] mx-auto px-6">
        <div className="border-b border-white/5 py-6 flex items-center gap-2 text-accent font-mono text-sm">
          <Terminal className="w-4 h-4" />
          // THE_SOURCE_CODE
        </div>
      </div>

      {/* VALUES */}
      <ValueBlock
        version="v1.0.0"
        title="Value_01"
        subtitle="Debug Reality"
        description="We don't patch bugs — we re-architect systems. Truth over comfort."
        features={[
          {
            icon: Code,
            title: "Root Cause Analysis",
            description: "We debug systems at their source, not the surface.",
          },
          {
            icon: Shield,
            title: "Clean Code",
            description: "Simplicity scales. Complexity decays.",
          },
          {
            icon: Terminal,
            title: "Continuous Integration",
            description: "Always shipping. Always improving.",
            span: true,
          },
        ]}
      />

      <ValueBlock
        version="v2.1.0"
        title="Value_02"
        subtitle="Open Source Minds"
        reverse
        description="Knowledge compounds when shared. Transparency is a core dependency."
        features={[
          {
            icon: Users,
            title: "Radical Transparency",
            description: "No black boxes. No silos.",
          },
          {
            icon: Code,
            title: "Collaborative Commits",
            description: "We build better together.",
          },
          {
            icon: Terminal,
            title: "Fork & Merge",
            description: "Ideas evolve through collaboration.",
            span: true,
          },
        ]}
      />

      <ValueBlock
        version="v3.0.beta"
        title="Value_03"
        subtitle="User_01 First"
        description="Empathy is our primary dependency. Humans before machines."
        features={[
          {
            icon: Users,
            title: "Human-Centric Design",
            description: "Technology should feel invisible.",
            span: true,
          },
          {
            icon: Shield,
            title: "UX Obsession",
            description: "Friction is a bug.",
          },
          {
            icon: Terminal,
            title: "Feedback Loops",
            description: "Input dictates output.",
          },
        ]}
      />
 {/* CTA */}
      <section className="max-w-[960px] mx-auto px-6 py-32">
        <div className="relative rounded-2xl bg-card-dark border bg-[#0e0e0e]   border-white/5  hover:border-white/10 transition-colors p-12 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] bg-[size:20px_20px]" />

          <div className="relative z-10">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
              <Terminal className="w-6 h-6 text-accent" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to push to production?
            </h3>

            <p className="text-[#888] max-w-lg mx-auto mb-8">
              Whether you want to join our team or start a project, let’s write
              the future together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-full bg-accent text-black font-bold hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition">
                Commit to Letus
              </button>
              <button className="px-8 py-3 rounded-full border border-border-dark text-white hover:bg-border-dark transition">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER is already global in layout */}
    </div>
  );
};

export default CoreValuesPage;
