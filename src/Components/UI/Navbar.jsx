import React, { useState } from "react";
import { Container } from "./Container";
import { NavLink } from "react-router-dom";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

export const Navbar = () => {
  const navItems = [
    { title: "About", to: "/about" },
    { title: "Projects", to: "/projects" },
    { title: "Contact", to: "/contact" },
  ];

  const [hovered, setHovered] = useState(null);
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState("");
  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["100%", "50%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <motion.nav
        style={{
          boxShadow: scrolled ? "var(--shadow-custom)" : "none",
          width,
          y,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full bg-white px-3 py-2"
      >
        <NavLink to="/">
          <img
            src="/logo.png"
            alt="Avatar"
            width={50}
            height={50}
            className="rounded-full drop-shadow-blue-200 transition hover:scale-[1.02]"
          />
        </NavLink>
        <div className="relative flex items-center">
          {navItems.map((link, id) => (
            <NavLink
              key={id}
              to={link.to}
              className="relative px-3 py-1 text-sm"
              onMouseEnter={(e) => setHovered(e.currentTarget)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="relative z-10">{link.title}</span>
            </NavLink>
          ))}

          {hovered && (
            <motion.div
              layout
              className="pointer-events-none absolute rounded-md bg-neutral-100 dark:bg-neutral-800"
              initial={false}
              animate={{
                width: hovered.offsetWidth,
                height: hovered.offsetHeight,
                x: hovered.offsetLeft,
                y: hovered.offsetTop,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </div>
      </motion.nav>
    </Container>
  );
};
