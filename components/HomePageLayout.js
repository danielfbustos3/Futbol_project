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
