import styled from "@emotion/styled";
import AttributesListItem from "./AttributesListItem";

const MyLists = styled.div`
  height: 12.5rem;
  width: 100%;
  overflow: scroll;
  z-index: 1;
`;

const Attributes = ({ selAttributes, setSelAttributes, atributosObj }) => {
  return (
    <MyLists>
      {atributosObj.map((item, idx) => {
        if (selAttributes?.includes(item.atributo)) {
          return (
            <AttributesListItem
              key={idx}
              list={"selected"}
              selAttributes={selAttributes}
              setSelAttributes={setSelAttributes}
              item={item}
            />
          );
        } else {
          return (
            <AttributesListItem
              key={idx}
              list={"unselected"}
              selAttributes={selAttributes}
              setSelAttributes={setSelAttributes}
              item={item}
            />
          );
        }
      })}
    </MyLists>
  );
};

export default Attributes;
