import {
  StyledColumn,
  ColumnHeader,
  TasksList,
} from "../styles/Columns/Columns";
import Task from "../Task/Task";

function Column({ column, index }: { column: any; index: number }) {
  return (
    <StyledColumn>
      <ColumnHeader colName={column.column}>
        <div></div>
        <p>{column.column}</p>
        <p>({column.tasks.length})</p>
      </ColumnHeader>
      <TasksList>
        {column.tasks.map((task: any, index: any) => {
          return (
            <Task
              columnIndex={index}
              taskIndex={index}
              task={task}
              key={index}
            />
          );
        })}
      </TasksList>
    </StyledColumn>
  );
}

export default Column;
