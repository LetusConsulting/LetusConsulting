import Terminal from "../assets/icons/terminal.svg?react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-black py-12">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Status */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Terminal className="w-5 h-5 text-[#444]" />
            <span className="font-mono text-sm text-[#888]">
              System Status: <span className="text-green-500">Normal</span>
            </span>
          </div>
          <div className="flex gap-6 text-[10px] uppercase font-mono tracking-widest text-[#666]">
            <span>Encryption: AES-256</span>
            <span>Region: Global</span>
          </div>
        </div>

        {/* Socials */}
        <div className="flex gap-8">
          {["GitHub", "LinkedIn", "Twitter"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#666] hover:text-accent transition-colors text-sm font-mono"
            >
              [ {item} ]
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-[#444] text-xs font-mono">
          © 2026 Letus Limited.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
