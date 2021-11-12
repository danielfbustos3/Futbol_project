import DataTable, { createTheme } from "react-data-table-component";
import CustomLoader from "components/CustomLoader";
import styled from "@emotion/styled";
import { useTheme } from "utils/functions";
import { useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";
import TableExpander from "./TableExpander";

const MyStyles = styled.div`
  * {
    color: ${({ myTheme }) => myTheme.textColor};
  }
  .rdt_TableWrapper {
    max-height: 200vh;
    width: 100%;
    min-width: 20%;
  }
  .rdt_TableColExpander {
  }
  .rdt_TableRow {
    background: ${({ myTheme }) => myTheme.backgroundColor};
    &:not(:last-of-type) {
      border-bottom-color: ${({ myTheme }) => myTheme.boxColor};
    }
    button {
      height: 75%;
      width: 75%;
      background: ${({ myTheme }) => myTheme.backgroundColor};
      border-radius: 50%;
      &:hover {
        background: ${({ myTheme }) => myTheme.hoverColor};
      }
    }
  }
  .rdt_TableCol {
  }
  .rdt_TableCol_Sortable {
    .__rdt_custom_sort_icon__ svg {
      height: 1.2rem;
      width: 1.2rem;
    }
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
    background: ${({ myTheme }) => myTheme.backgroundColor};
  }
  .rdt_ExpanderRow {
    height: 16rem;
    padding: 0 1%;
    overflow: hidden;
    background: ${({ myTheme }) => myTheme.backgroundColor};
  }
  .rdt_Pagination {
    background: ${({ myTheme }) => myTheme.backgroundColor};
    color: ${({ myTheme }) => myTheme.textColor};
    border-top-color: ${({ myTheme }) => myTheme.hoverColor};
    select {
      font-size: 0.8rem;
      option {
        font-size: 0.8rem;
      }
    }
    button {
      fill: ${({ myTheme }) => myTheme.textColor};
      &:hover {
        background: ${({ myTheme }) => myTheme.boxColor};
      }
    }
  }
`;

const columns = [
  {
    name: "Nombre Completo",
    selector: (row) => row.FullName,
    sortable: true,
    grow: 2,
  },
  {
    name: "Edad",
    selector: (row) => row.Age,
    sortable: true,
    grow: 0.5,
  },
  {
    name: "Nacionalidad",
    selector: (row) => row.Nationality,
    sortable: true,
  },
  {
    name: "Posiciones",
    selector: (row) => row.Positions,
    sortable: true,
  },
  {
    name: "Puntuación General",
    selector: (row) => row.Overall,
    sortable: true,
    grow: 0.5,
  },
  {
    name: "Potencial",
    selector: (row) => row.Potential,
    sortable: true,
    grow: 0.5,
  },
  {
    name: "Club",
    selector: (row) => row.Club,
    sortable: true,
    grow: 1.5,
  },
  {
    name: "Terminación de contrato",
    selector: (row) => row.ContractUntil,
    sortable: true,
    grow: 0.5,
  },
  {
    name: "Valor",
    selector: (row) =>
      `€ ${row.ValueEUR.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
    sortable: true,
    right: true,
  },
];

const paginacionOpciones = {
  rowsPerPageText: "Filas por página",
  noRowsPerPage: false,
  rangeSeparatorText: "de",
};

const PlayerTable = ({ players }) => {
  const title = `${players?.length} Jugadores Encontrados`;
  const myTheme = useTheme();

  const [pending, setPending] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <MyStyles myTheme={myTheme}>
      <DataTable
        expandableRows
        expandableRowsComponent={TableExpander}
        expandOnRowClicked={true}
        // expandableRowsHideExpander={true}
        columns={columns}
        data={players}
        title={title}
        responsive={true}
        // dense={true}
        pagination
        paginationPerPage={30}
        paginationRowsPerPageOptions={[30, 60, 90, 150, 200]}
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight=""
        progressPending={pending}
        progressComponent={<CustomLoader />}
        sortIcon={<BiChevronDown />}
      />
    </MyStyles>
  );
};

export default PlayerTable;
