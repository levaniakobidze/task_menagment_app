import { useEffect, useContext } from "react";
import {
  TaskModalOverlay,
  TaskModalInner,
  SubTasksInner,
  SubTaskCont,
} from "../../styles/Task/Task";
import { TodosContext } from "../../../context/todosContext";
import MenuIcon from "../../../assets/mobile_menu.svg";

const TaskModal = () => {
  const {
    selectedTask,
    setShowTaskModal,
    setSelectedTask,
    setShowEditTaskModal,
  } = useContext(TodosContext);

  // useEffect(() => {
  //   const body = document.body;
  //   body.style.overflow = "hidden";
  // }, []);

  return (
    <TaskModalOverlay
      onClick={() => {
        setShowTaskModal(false);
        setSelectedTask(false);
      }}
    >
      <TaskModalInner onClick={(e) => e.stopPropagation()}>
        <h3>
          {selectedTask.title}
          <img
            src={MenuIcon}
            alt="dots"
            onClick={() => {
              setShowTaskModal(false);
              setShowEditTaskModal(true);
            }}
          />
        </h3>
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
