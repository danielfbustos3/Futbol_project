import styled from "@emotion/styled";
import Head from "next/head";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import InfoSection from "./InfoSection";
import ProfileSection from "./ProfileSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "./InfoSectData";
import Footer from "./Footer";

export default function PageLayout({ isOpen, toggle }) {
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

      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <ProfileSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />

      <Footer />
    </>
  );
}
