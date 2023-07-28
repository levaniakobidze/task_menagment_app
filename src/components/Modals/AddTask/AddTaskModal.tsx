import React, { useContext } from "react";
import {
  AddBoardModalInner,
  AddBoardModalOverlay,
} from "../../styles/AddBoardModal/AddBoardModal";
import { TodosContext } from "../../../context/todosContext";

const AddTaskModal = () => {
  const { setShowAddTaskModal } = useContext(TodosContext);

  return (
    <AddBoardModalOverlay onClick={() => setShowAddTaskModal(false)}>
      <AddBoardModalInner>
        <h2>asda</h2>
      </AddBoardModalInner>
    </AddBoardModalOverlay>
  );
};

export default AddTaskModal;
