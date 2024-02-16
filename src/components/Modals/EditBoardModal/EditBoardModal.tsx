import { useEffect, useContext, useState } from "react";
import {
  EditBoardModalOverlay,
  EditBoardModalInner,
  Inputs,
  ColumnInputs,
} from "../../styles/EditBoardModal/EditBoardModal";
import { TodosContext } from "../../../context/todosContext";
import XIcon from "../../../assets/x.svg";
import Button from "../../Button/Button";

// interface InewBoard {
//   boradId: number;
//   board_name: string;
//   columns: any[];
// }

// Function to generate random ID
function generateRandomID(length: number) {
  const charset = "0123456789";
  let randomID = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomID += charset[randomIndex];
  }

  return randomID;
}

const EditBoardModal = () => {
  const { setShowEditBoardModal, boards, setBoards, selectedBoard } =
    useContext(TodosContext);
  //   const [boardToEdit, setNewBoard] = useState<InewBoard>({
  //     boradId: 1,
  //     board_name: "first board",
  //     columns: [{ columnId: Number(generateRandomID(8)), column: "", tasks: [] }],
  //   });

  const [boardToEdit, setBoardToEdit] = useState({
    boradId: 1,
    board_name: "first board",
    columns: [{ columnId: Number(generateRandomID(8)), column: "", tasks: [] }],
  });

  useEffect(() => {
    setBoardToEdit(boards[selectedBoard]);
  }, [selectedBoard]);

  // useEffect(() => {
  //   const body = document.body;
  //   body.style.overflow = "hidden";
  // }, []);

  // Function to add new Column in newBoard state
  // -------------------------------------------------
  const AddNewColumn = () => {
    const newColumn = {
      columnId: Number(generateRandomID(8)),
      column: "",
      tasks: [],
    };
    setBoardToEdit({
      ...boardToEdit,
      columns: [...boardToEdit.columns, newColumn],
    });
  };

  // Function to delete Column in newBoard state
  // ----------------------------------------------
  const deleteColumn = (id: number) => {
    const updatedColumns = boardToEdit.columns.filter(
      (col: any) => col.columnId !== id
    );
    setBoardToEdit({ ...boardToEdit, columns: updatedColumns });
  };

  // Function to implement column inputs change
  // ---------------------------------------------
  const handleColumnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedColumns = boardToEdit.columns;
    updatedColumns[index].column = e.target.value;
    setBoardToEdit({ ...boardToEdit, columns: updatedColumns });
  };

  // Function to create Board
  // -----------------------------

  const saveChanges = () => {
    console.log("saved");
    const updated = boards;
    updated[selectedBoard] = boardToEdit;
    setBoards(updated);
    setShowEditBoardModal(false);
  };

  return (
    <EditBoardModalOverlay onClick={() => setShowEditBoardModal(false)}>
      <EditBoardModalInner onClick={(e) => e.stopPropagation()}>
        <h2>Add New Board</h2>
        <Inputs>
          <label htmlFor="board_name">Board Name</label>
          <input
            onChange={(e) =>
              setBoardToEdit({ ...boardToEdit, board_name: e.target.value })
            }
            value={boardToEdit?.board_name}
            type="text"
            placeholder="e.g. Web Design"
          />
          <div>
            <h2>Board Columns</h2>
            {boardToEdit.columns.map((col, index) => {
              return (
                <ColumnInputs key={index}>
                  <div>
                    <input
                      type="text"
                      onChange={(e) => handleColumnChange(e, index)}
                      value={col.column}
                      placeholder="e.g. Web Design"
                    />
                    <img
                      onClick={() => deleteColumn(col.columnId)}
                      src={XIcon}
                      alt="x"
                    />
                  </div>
                </ColumnInputs>
              );
            })}
            <Button
              marginTop={"20px"}
              disabled={false}
              width={"100%"}
              height={"40px"}
              size={"s"}
              type={"secondary"}
              onClick={AddNewColumn}
            >
              + Add New Column
            </Button>
            <Button
              marginTop={"20px"}
              disabled={false}
              width={"100%"}
              height={"40px"}
              size={"s"}
              type={"primary"}
              onClick={saveChanges}
            >
              Save Changes
            </Button>
          </div>
        </Inputs>
      </EditBoardModalInner>
    </EditBoardModalOverlay>
  );
};

export default EditBoardModal;
