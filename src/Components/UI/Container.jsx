import React from "react";

export const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto w-full max-w-4xl bg-white dark:bg-black ${className}`}
    >
      {children}
    </div>
  );
};
