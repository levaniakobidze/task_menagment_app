import { useEffect, useContext } from "react";
import {
  AddBoardModalOverlay,
  AddBoardModalInner,
} from "../../styles/AddBoardModal/AddBoardModal";
import { TodosContext } from "../../../context/todosContext";

const AddBoardModal = () => {
  const { showAddBoardModal, setShowAddBoardModal } = useContext(TodosContext);

  useEffect(() => {
    const body = document.body;
    body.style.overflow = "hidden";
  }, []);

  return (
    <AddBoardModalOverlay onClick={() => setShowAddBoardModal(false)}>
      <AddBoardModalInner onClick={(e) => e.stopPropagation()}>
        asdasda
      </AddBoardModalInner>
    </AddBoardModalOverlay>
  );
};

export default AddBoardModal;
