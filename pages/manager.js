import Head from "next/head";
import styled from "@emotion/styled";
import ManagerLayout from "components/ManagerLayout";
import ManagerSidebar from "components/ManagerSidebar";
import ManagerNavbar from "components/ManagerNavbar";
import { useState } from "react";
import Footer from "components/Footer";

const PageLayout = styled.div`
  display: flex;
  height: 100%;
  max-width: 100%;
  background: #0d0d0d;
  transition: all 0.2s ease-in-out;
  margin-left: ${({ isOpen }) => (isOpen ? "15rem" : "0")};
  .layout {
    height: 100%;
    width: 100%;
    display: grid;
    background: grey;
  }
`;

const ManagerPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState("allplayers");

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gemunu+Libre&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ManagerNavbar isOpen={isOpen} toggle={toggle} setPage={setPage} />
      <PageLayout isOpen={isOpen}>
        <ManagerSidebar isOpen={isOpen} toggle={toggle} />
        <div className="layout">
          <ManagerLayout page={page} isOpen={isOpen} />
          <Footer />
        </div>
      </PageLayout>
    </>
  );
};

export default ManagerPage;
