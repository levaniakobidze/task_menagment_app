import { StyledTask } from "../styles/Task/Task";

function Task({ task }: { task: any }) {
  return (
    <StyledTask>
      <p>{task.title}</p>
      <span>{task.description}</span>
    </StyledTask>
  );
}

export default Task;
