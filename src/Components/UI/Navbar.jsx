import React from "react";
import { Container } from "./Container";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navItems = [
    { title: "About", to: "/about" },
    { title: "Projects", to: "/projects" },
    { title: "Contact", to: "/contact" },
    { title: "Blog", to: "/blog" },
  ];
  return (
    <Container>
      <div className="flex items-center justify-between">
        <NavLink to="/">
          <span>Panda Coders</span>
        </NavLink>
        <div className="flex items-center">
          {navItems?.map((link, id) => {
            return (
              <NavLink to={link.to} key={id}>
                {link.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </Container>
  );
};
