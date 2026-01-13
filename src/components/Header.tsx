import { NavLink } from "react-router-dom";
import DataArray from "../assets/icons/data_array.svg?react";
import MenuIcon from "../assets/icons/menu_open.svg?react";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import Letus from "../assets/icons/letus_logo.png?react";

import { navigation } from "../data/navigation";

const navItems = navigation.sort((a, b) => a.order - b.order);


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/90 backdrop-blur border-b border-white/10 py-3"
            : "bg-background-dark/80 backdrop-blur-md py-5"
        }`}
      >
        <div className="flex max-w-[1400px] mx-auto items-center justify-between px-6 lg:px-12">
          <NavLink to="/" className="flex items-center gap-2">
            <DataArray className="w-6 h-6 text-accent" />
            <h2 className="text-xl font-bold text-white">
             {/* <Letus className="w-12 h-12" /> */}
             <img src="../assets/icons/letus_logo.png" alt="Letus Logo" className="w-24 h-auto" />
          
            </h2>
          </NavLink>

          {/* Desktop */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-accent font-medium"
                    : "text-[#888] hover:text-accent transition-colors"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
};

export default Header;