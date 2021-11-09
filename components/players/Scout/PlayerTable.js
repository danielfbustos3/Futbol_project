import DataTable, { createTheme } from "react-data-table-component";
import CustomLoader from "components/CustomLoader";
import styled from "@emotion/styled";
import { useTheme } from "utils/functions";
import { useState, useEffect } from "react";

const MyStyles = styled.div`
  * {
    color: ${({ myTheme }) => myTheme.textColor};
  }
  .rdt_TableWrapper {
    max-height: 200vh;
  }
  .rdt_TableColExpander {
  }
  .rdt_TableRow {
    background: ${({ myTheme }) => myTheme.backgroundColor};
    &:not(:last-of-type) {
      border-bottom-color: ${({ myTheme }) => myTheme.boxColor};
    }
  }
  .rdt_TableCol {
  }
  .rdt_TableCol_Sortable {
  }
  .rdt_TableCell {
  }
  .rdt_TableHeader {
    background: ${({ myTheme }) => myTheme.backgroundColor};
  }
  .rdt_TableFooter {
  }
  .rdt_TableHead {
  }
  .rdt_TableHeadRow {
    background: ${({ myTheme }) => myTheme.backgroundColor};
    border-bottom-color: ${({ myTheme }) => myTheme.hoverColor};
  }
  .rdt_TableBody {
  }
  .rdt_ExpanderRow {
    background: ${({ myTheme }) => myTheme.backgroundColor};
  }
  .rdt_Pagination {
    background: ${({ myTheme }) => myTheme.backgroundColor};
    color: white;
    border-top-color: ${({ myTheme }) => myTheme.hoverColor};
    button {
      fill: white;
      &:hover {
        background: ${({ myTheme }) => myTheme.boxColor};
      }
    }
  }
`;

const columns = [
  {
    name: "Nombre Completo",
    selector: "FullName",
    sortable: true,
    grow: 2,
  },
  {
    name: "Edad",
    selector: "Age",
    sortable: true,
    grow: 0.5,
  },
  {
    name: "Nacionalidad",
    selector: "Nationality",
    sortable: true,
  },
  {
    name: "Posiciones",
    selector: "Positions",
    sortable: true,
  },
  {
    name: "Puntuación General",
    selector: "Overall",
    sortable: true,
    grow: 0.5,
  },
  {
    name: "Potencial",
    selector: "Potential",
    sortable: true,
    grow: 0.5,
  },
  {
    name: "Club",
    selector: "Club",
    sortable: true,
    grow: 1.5,
  },
  {
    name: "Terminación de contrato",
    selector: "ContractUntil",
    sortable: true,
    grow: 0.5,
  },
  {
    name: "Valor en EUR",
    selector: "ValueEUR",
    sortable: true,
    right: true,
  },
];

const paginacionOpciones = {
  noRowsPerPage: true,
  rangeSeparatorText: "de",
};

const PlayerTable = ({ players }) => {
  const title = `${players.length} Jugadores Encontrados`;
  const myTheme = useTheme();

  const [pending, setPending] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const [tableTheme, setTableTheme] = useState(myTheme);

  useEffect(() => {
    setTableTheme(myTheme);
  }, [myTheme]);

  createTheme(
    "solarized",
    {
      text: {
        primary: "#268bd2",
        secondary: "#2aa198",
      },
      background: {
        default: tableTheme.backgroundColor,
      },
      context: {
        background: "#000000",
        text: "#FFFFFF",
      },
      divider: {
        default: "#073642",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );

  return (
    <MyStyles myTheme={myTheme}>
      <DataTable
        expandableRows
        columns={columns}
        data={players}
        title={title}
        responsive={true}
        // dense={true}
        pagination
        paginationPerPage={30}
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight=""
        progressPending={pending}
        progressComponent={<CustomLoader />}
      />
    </MyStyles>
  );
};

export default PlayerTable;
