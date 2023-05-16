import React, { Fragment, useContext } from "react";
import { TodosContext } from "../../context/todosContext";
import { EmptyColumnsCont, WithColomnsCont } from "../styles/Columns/Columns";
import Column from "../Column/Column";
import Button from "../Button/Button";

const Columns = () => {
  const { columns } = useContext(TodosContext);

  return (
    <Fragment>
      {!columns ? (
        <EmptyColumnsCont>
          <p>This board is empty. Create a new column to get started.</p>
          <Button
            disabled={false}
            width={"200px"}
            height={"40px"}
            size={"s"}
            type={"primary"}>
            + Add New Column
          </Button>
        </EmptyColumnsCont>
      ) : (
        <WithColomnsCont>
          {columns &&
            columns.map((column: any, index: number) => {
              return <Column column={column} key={index} />;
            })}
        </WithColomnsCont>
      )}
    </Fragment>
  );
};

export default Columns;
