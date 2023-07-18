import { StyledTask } from "../styles/Task/Task";
import { useContext } from "react";
import { TodosContext } from "../../context/todosContext";
const Task = ({ task }: { task: any }) => {
  const { setSelectedTask } = useContext(TodosContext);
  const showTaskModal = (task: any) => {
    setSelectedTask(task);
  };

  return (
    <StyledTask onClick={() => showTaskModal(task)}>
      <p>{task.title}</p>
      <span>{task.description}</span>
    </StyledTask>
  );
};

export default Task;
