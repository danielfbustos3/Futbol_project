import HomePageLayout from "components/HomePageLayout";

import { useState } from "react";

export default Home = () => {
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
