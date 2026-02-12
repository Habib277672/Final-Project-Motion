import React from "react";
import { Container } from "../Components/UI/Container";
import { Projects } from "../Components/UI/Projects";

export const Home = () => {
  return (
    <div className="flex min-h-screen justify-start">
      <Container className="min-h-[200vh] px-10 py-4 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Habib Ur Rehman!
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I'm a Frontend Developer with a passion for building scalable and
          efficient systems.I'm currently working as a Frontend Developer at
          Google.
        </p>
        <Projects />
      </Container>
    </div>
  );
};
