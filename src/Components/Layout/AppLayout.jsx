import React from "react";
import { Navbar } from "../UI/Navbar";
import { Footer } from "../UI/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "../UI/Container";
import { Layout } from "./Layout";

export const AppLayout = () => {
  return (
    <>
      {/* <Layout className="bg-neutral-100 antialiased dark:bg-neutral-700"> */}
      <Container>
        <Navbar />
        <Outlet />
      </Container>
      {/* <Footer /> */}
      {/* </Layout> */}
    </>
  );
};
