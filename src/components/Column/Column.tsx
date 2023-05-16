import React from "react";
import {
  StyledColumn,
  ColumnHeader,
  TasksList,
} from "../styles/Columns/Columns";
import Task from "../Task/Task";

function Column({ column }: { column: any }) {
  return (
    <StyledColumn>
      <ColumnHeader>
        <div></div>
        <p>{column.column}</p>
      </ColumnHeader>
      <TasksList>
        {column.tasks.map((task: any, index: any) => {
          return <Task task={task} key={index} />;
        })}
      </TasksList>
    </StyledColumn>
  );
}

export default Column;
