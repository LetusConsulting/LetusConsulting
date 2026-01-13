import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; path: string }[];
};

const MobileMenu = ({ isOpen, onClose, navItems }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            className="fixed top-0 right-0 w-[80%] h-full bg-[#0a0a0a] z-50 p-10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
          >
            <nav className="flex flex-col gap-8 mt-20">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className="text-xl font-bold text-white hover:text-accent transition-colors"
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
