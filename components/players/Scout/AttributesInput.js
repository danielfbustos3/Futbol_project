import styled from "@emotion/styled";
import { useTheme } from "../../../utils/functions";
import Attributes from "./Attributes";
import { useState } from "react";

const AttributesContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  .attrBox {
    height: 15rem;
    width: 12rem;
    border-radius: 1rem;
    overflow: hidden;
    .title {
      display: flex;
      justify-content: center;
      background: ${({ myTheme }) => myTheme.boxColor};
      border-bottom: ${({ myTheme }) =>
        `0.1rem solid ${myTheme.highlightColor}`};
      align-items: center;
      width: 100%;
      height: 2.5rem;
      font-weight: bold;
      font-size: 0.8rem;
      letter-spacing: 0.1rem;
      z-index: 10;
    }
    .attributesContainer {
      height: 12.5rem;
      width: 100%;
      overflow: hidden;
      z-index: 1;
    }
  }
  .selecAttr {
    padding: 3rem;
    width: 60%;
    h1 {
      font-size: 1.5rem;
      color: ${({ myTheme }) => myTheme.textColor};
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

const atributosObj = [
  {
    atributo: "Aerial Threat",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
  {
    atributo: "Attack Minded",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
  {
    atributo: "Box to Box",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
  {
    atributo: "Pinpoint Crosser",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
  {
    atributo: "Defensive Minded",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
  {
    atributo: "Distance Shooter",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
  {
    atributo: "Dribbler",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
  {
    atributo: "First Team Quality",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
  {
    atributo: "Free Kick Specialist",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
  {
    atributo: "Pacey",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
  {
    atributo: "Penalty Specialist",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
  {
    atributo: "Playmaker",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
  {
    atributo: "Prolific",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
  {
    atributo: "Promising",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
  {
    atributo: "Strong",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
  {
    atributo: "Tall",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
  {
    atributo: "World Class",
    descripcion:
      "Cualquier pinche puta descripcion que sea bien larga y culera para que la gente idiota trate de entender de lo que se trata un buen mame de jugadores de futbol porque ni siquiera saben lo que quieren entonces nos toca escogerles hasta la ropa interior a los pinches putos directores tecnicos.",
  },
];

const AttributesInput = () => {
  const [selAttributes, setSelAttributes] = useState([]);
  const myTheme = useTheme();

  return (
    <AttributesContainer myTheme={myTheme}>
      <div className="attrBox">
        <div className="title">Atributos de jugador:</div>
        <div className="attributesContainer">
          <Attributes
            selAttributes={selAttributes}
            setSelAttributes={setSelAttributes}
            atributosObj={atributosObj}
          />
        </div>
      </div>
      <div className="selecAttr">
        <h1>Atributos Seleccionados:</h1>
        <p>{selAttributes.join(", ")}</p>
      </div>
    </AttributesContainer>
  );
};

export default AttributesInput;
