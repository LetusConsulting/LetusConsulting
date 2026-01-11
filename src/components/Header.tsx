import { NavLink } from "react-router-dom";
import DataArray from "../assets/icons/data_array.svg?react";
import MenuIcon from "../assets/icons/menu_open.svg?react";

const navItems = [
  { label: "/Services", path: "/services" },
  { label: "/Portfolio", path: "/consultantportfolio" },
  { label: "/About_Us", path: "/about_us" },
  { label: "/Contact_Us", path: "/contact_us" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="flex w-full max-w-[1400px] mx-auto items-center justify-between px-6 py-5 lg:px-12">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 cursor-pointer select-none group"
        >
          <DataArray className="w-6 h-6 text-accent group-hover:rotate-90 transition-transform duration-500" />
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Letus<span className="text-accent">_</span>
          </h2>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
        <nav className="flex gap-8">
  {navItems.map((item) => (
    <NavLink key={item.path} to={item.path}>
      {({ isActive }) => (
        <span
          className={`relative text-sm font-medium transition-colors group cursor-pointer
            ${
              isActive
                ? "text-accent"
                : "text-[#888] hover:text-accent"
            }`}
        >
          {item.label}
          <span
            className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all
              ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
          />
        </span>
      )}
    </NavLink>
  ))}
</nav>


          <NavLink
            to="/contact_us"
            className="border border-white/10 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all bg-white/5"
          >
            Let’s Talk_
          </NavLink>
        </div>

        {/* Mobile */}
        <div className="md:hidden text-white">
          <MenuIcon className="w-6 h-6 cursor-pointer hover:text-accent transition-colors" />
        </div>
      </div>
    </header>
  );
};

export default Header;
