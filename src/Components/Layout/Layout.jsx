import React from "react";

export const Layout = ({ children, className = "" }) => {
  return <div className={`mx-auto max-w-4xl ${className}`}>{children}</div>;
};
