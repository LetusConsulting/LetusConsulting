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
         <div className="flex justify-center gap-6">
        {/* Twitter / X */}
        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-white hover:text-gray-400 transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.656l-5.21-6.817-5.964 6.817H1.69l7.73-8.835L1.25 2.25h6.823l4.713 6.231 5.458-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white hover:text-gray-400 transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.447 20.452H17.21V14.82c0-1.343-.027-3.071-1.872-3.071-1.873 0-2.159 1.46-2.159 2.972v5.73H9.943V9h3.104v1.561h.044c.432-.818 1.49-1.682 3.067-1.682 3.278 0 3.88 2.158 3.88 4.967v6.606zM5.337 7.433a1.804 1.804 0 110-3.607 1.804 1.804 0 010 3.607zM6.96 20.452H3.713V9H6.96v11.452z" />
          </svg>
        </a>
      </div>
        {/* <div className="flex gap-8">
          {["GitHub", "LinkedIn", "Twitter"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#666] hover:text-accent transition-colors text-sm font-mono"
            >
              [ {item} ]
            </a>
          ))}
        </div> */}

        {/* Copyright */}
        <div className="text-[#444] text-xs font-mono">
          © 2026 Letus Limited.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
