import Head from "next/head";
import styled from "@emotion/styled";
import ManagerLayout from "components/ManagerLayout";
import ManagerSidebar from "components/ManagerSidebar";
import ManagerNavbar from "components/ManagerNavbar";
import { useState, useEffect } from "react";
import ManagerFooter from "components/ManagerFooter";
import { ThemeProvider } from "utils/functions";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, readToken } from "redux/ducks/authenticator";

const PageLayout = styled.div`
  display: flex;
  height: 100%;
  max-width: 100%;
  background: #0d0d0d;
  main {
    margin-left: ${({ isOpen }) => (isOpen ? "10rem" : "3rem")};
    height: 100%;
    width: 100%;
    display: grid;
    transition: all 0.3s ease;
    overflow: hidden;
  }
`;

const ManagerPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authorized.auth);

  useEffect(() => {
    dispatch(readToken());
  }, []);

  useEffect(() => {
    if (!auth) {
      router.push("/signin");
    }
  }, [auth]);

  const [isOpen, setIsOpen] = useState(false);
  const [keepOpen, setKeepOpen] = useState(false);
  const [page, setPage] = useState("allplayers");
  const [showmap, setShowmap] = useState(1);

  const toggleKeepOpen = () => {
    setKeepOpen(!keepOpen);
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider>
      <ManagerNavbar
        isOpen={isOpen}
        toggleKeepOpen={toggleKeepOpen}
        toggle={toggle}
        setPage={setPage}
        showmap={showmap}
        setShowmap={setShowmap}
        page={page}
      />
      <PageLayout isOpen={isOpen}>
        <ManagerSidebar
          isOpen={isOpen}
          setPage={setPage}
          keepOpen={keepOpen}
          toggle={toggle}
          setIsOpen={setIsOpen}
        />
        <main className="main-content">
          <ManagerLayout
            page={page}
            setPage={setPage}
            isOpen={isOpen}
            showmap={showmap}
            setShowmap={setShowmap}
          />
          <ManagerFooter />
        </main>
      </PageLayout>
    </ThemeProvider>
  );
};

export default ManagerPage;
