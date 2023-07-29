import React, { useContext } from "react";
import {
  AddTaskModalOevrlay,
  AddTaskModalInner,
  AddTaskInputs,
  Input,
} from "../../styles/AddTaskModal/AddTaskModal";
import { TodosContext } from "../../../context/todosContext";

const AddTaskModal = () => {
  const { setShowAddTaskModal } = useContext(TodosContext);

  return (
    <AddTaskModalOevrlay onClick={() => setShowAddTaskModal(false)}>
      <AddTaskModalInner onClick={(e) => e.stopPropagation()}>
        <h2>Add New Task</h2>
        <AddTaskInputs>
          <Input>
            <label htmlFor="board_name">Title</label>
            <input type="text" placeholder="e.g. Web Design" />
          </Input>
          <Input>
            <label htmlFor="board_name">Description</label>
            <textarea placeholder="e.g. Web Design" />
          </Input>
        </AddTaskInputs>
      </AddTaskModalInner>
    </AddTaskModalOevrlay>
  );
};

export default AddTaskModal;
