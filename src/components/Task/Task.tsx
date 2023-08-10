import { StyledTask } from "../styles/Task/Task";
import { useContext } from "react";
import { TodosContext } from "../../context/todosContext";
const Task = ({
  task,
  columnIndex,
  taskIndex,
}: {
  task: any;
  columnIndex: number;
  taskIndex: number;
}) => {
  const { setSelectedTask, setShowTaskModal } = useContext(TodosContext);
  const showTaskHandler = (task: any) => {
    setSelectedTask({ task, columnIndex, taskIndex });
    setShowTaskModal(true);
  };

  return (
    <StyledTask onClick={() => showTaskHandler(task)}>
      <p>{task.title}</p>
      <span>{task.description}</span>
    </StyledTask>
  );
};

export default Task;
