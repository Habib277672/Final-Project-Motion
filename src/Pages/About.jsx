import React from "react";
import { Container } from "../Components/UI/Container";
export const About = () => {
  return (
    <div className="flex min-h-screen justify-start">
      <Container className="min-h-[200vh] px-10 py-4 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          About Me
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I'm Habib Ur Rehman a React-focused frontend developer based in
          Pakistan, currently building modern, animated, and scalable web
          applications. He is actively working on advanced UI projects,
          including interactive movie and anime streaming platforms, while
          upgrading them with React, animation libraries, and improved component
          architecture.
        </p>
      </Container>
    </div>
  );
};
