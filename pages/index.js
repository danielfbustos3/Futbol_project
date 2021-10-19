import HomePageLayout from "components/HomePageLayout";

import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HomePageLayout isOpen={isOpen} toggle={toggle}></HomePageLayout>
    </>
  );
};

export default Home;
