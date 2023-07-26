import { useEffect, useContext, useState } from "react";
import {
  AddBoardModalOverlay,
  AddBoardModalInner,
  Inputs,
  ColumnInputs,
} from "../../styles/AddBoardModal/AddBoardModal";
import { TodosContext } from "../../../context/todosContext";
import XIcon from "../../../assets/x.svg";
import Button from "../../Button/Button";

interface InewBoard {
  boradId: number;
  board_name: string;
  columns: any[];
}

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

const AddBoardModal = () => {
  const { showAddBoardModal, setShowAddBoardModal, boards, setBoards } =
    useContext(TodosContext);
  const [boardName, setBoardName] = useState("");
  const [newBoard, setNewBoard] = useState<InewBoard>({
    boradId: 1,
    board_name: "first board",
    columns: [{ columnId: Number(generateRandomID(8)), column: "", tasks: [] }],
  });

  useEffect(() => {
    const body = document.body;
    body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    setNewBoard({ ...newBoard, board_name: boardName });
  }, [boardName]);

  // Function to add new Column in newBoard state
  // -------------------------------------------------
  const AddNewColumn = () => {
    const newColumn = {
      columnId: Number(generateRandomID(8)),
      column: "",
      tasks: [],
    };
    setNewBoard({ ...newBoard, columns: [...newBoard.columns, newColumn] });
  };

  // Function to delete Column in newBoard state
  // ----------------------------------------------
  const deleteColumn = (id: number) => {
    const updatedColumns = newBoard.columns.filter(
      (col: any) => col.columnId !== id
    );
    setNewBoard({ ...newBoard, columns: updatedColumns });
  };

  // Function to implement column inputs change
  // ---------------------------------------------
  const handleColumnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedColumns = newBoard.columns;
    updatedColumns[index].column = e.target.value;
    setNewBoard({ ...newBoard, columns: updatedColumns });
  };

  // Function to create Board
  // -----------------------------
  const createBoard = () => {
    setBoards([...boards, newBoard]);
    setShowAddBoardModal(false);
  };
  return (
    <AddBoardModalOverlay onClick={() => setShowAddBoardModal(false)}>
      <AddBoardModalInner onClick={(e) => e.stopPropagation()}>
        <h2>Add New Board</h2>
        <Inputs>
          <label htmlFor="board_name">Board Name</label>
          <input
            onChange={(e) => setBoardName(e.target.value)}
            value={boardName}
            type="text"
            placeholder="e.g. Web Design"
          />
          <div>
            <h2>Board Columns</h2>
            {newBoard.columns.map((col, index) => {
              return (
                <ColumnInputs key={index}>
                  <div>
                    <input
                      type="text"
                      onChange={(e) => handleColumnChange(e, index)}
                      // value={col.column}
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
              onClick={AddNewColumn}>
              + Add New Column
            </Button>
            <Button
              marginTop={"20px"}
              disabled={false}
              width={"100%"}
              height={"40px"}
              size={"s"}
              type={"primary"}
              onClick={createBoard}>
              Create New Board
            </Button>
          </div>
        </Inputs>
      </AddBoardModalInner>
    </AddBoardModalOverlay>
  );
};

export default AddBoardModal;
