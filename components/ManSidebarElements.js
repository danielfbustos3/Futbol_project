import { linksObj } from "./ManSidebarData";
import { useState } from "react";
import ElementsContainer from "./ManSidebarElementsContainer";

const ManSidebarElements = ({ toggle, setPage, myTheme, isOpen }) => {
  return (
    <>
      {linksObj.map((item, index) => {
        return (
          <ElementsContainer
            key={index}
            item={item}
            setPage={setPage}
            myTheme={myTheme}
            isOpen={isOpen}
            toggle={toggle}
          />
        );
      })}
    </>
  );
};

export default ManSidebarElements;
