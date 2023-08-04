import { useEffect, useContext } from "react";
import {
  TaskModalOverlay,
  TaskModalInner,
  SubTasksInner,
  SubTaskCont,
} from "../../styles/Task/Task";
import { TodosContext } from "../../../context/todosContext";

const TaskModal = () => {
  const { selectedTask, setSelectedTask } = useContext(TodosContext);

  // useEffect(() => {
  //   const body = document.body;
  //   body.style.overflow = "hidden";
  // }, []);

  return (
    <TaskModalOverlay onClick={() => setSelectedTask(false)}>
      <TaskModalInner onClick={(e) => e.stopPropagation()}>
        <h3> {selectedTask.title}</h3>
        <p>{selectedTask.description}</p>
        <SubTasksInner>
          <p>Subtasks (0 of {selectedTask.sub_tasks.length})</p>
          {selectedTask.sub_tasks.map((subtask: any, index: number) => {
            return (
              <SubTaskCont key={index}>
                <input type="checkbox" />
                <h5>asd</h5>
              </SubTaskCont>
            );
          })}
        </SubTasksInner>
      </TaskModalInner>
    </TaskModalOverlay>
  );
};

export default TaskModal;
