import { createContext, useState } from "react";

export const TodosContext = createContext<any | null>(null);

const ContextProvider = ({ children }: any) => {
  const [selectedTask, setSelectedTask] = useState(false);
  const [showAddBoardModal, setShowAddBoardModal] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(0);
  const [boards, setBoards] = useState([
    {
      boradId: 1,
      board_name: "first boardsss",
      columns: [
        {
          columnId: 1,
          column: "Todo",
          tasks: [
            {
              cardId: 12,
              title: "buy food",
              description:
                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
              sub_tasks: [
                {
                  sub_task_id: 4,
                  sub_task_title: "food must be fresh",
                  sub_completed: false,
                },
                {
                  sub_task_id: 3,
                  sub_task_title: "food must be new",
                  sub_completed: false,
                },
              ],
            },
            {
              cardId: 12,
              title: "make a dinner",
              description: "so, after that you have to make a dinner",
              sub_tasks: [
                {
                  sub_task_id: 4,
                  sub_task_title: "food must be fresh",
                  sub_completed: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  console.log(boards[selectedBoard]);

  // const [columns, setColumns] = useState<any>([]);
  const addColumn = (newColumn: any) => {
    // setColumns([...columns, newColumn]);
  };

  return (
    <TodosContext.Provider
      value={{
        boards,
        setBoards,
        addColumn,
        selectedTask,
        setSelectedTask,
        showAddBoardModal,
        setShowAddBoardModal,
        selectedBoard,
        setSelectedBoard,
      }}>
      {children}
    </TodosContext.Provider>
  );
};

export default ContextProvider;
