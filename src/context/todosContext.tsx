import { createContext, useState } from "react";

export const TodosContext = createContext<any | null>(null);

const ContextProvider = ({ children }: any) => {
  const [columns, setColumns] = useState([
    {
      columnId: 1,
      column: "Todo",
      tasks: [
        {
          cardId: 12,
          title: "buy food",
          description: "you have to buy a food",
        },
        {
          cardId: 12,
          title: "make a dinner",
          description: "so, after that you have to make a dinner",
        },
      ],
    },
    {
      columnId: 2,
      column: "Doing",
      tasks: [
        {
          cardId: 16,
          title: "play pes mobile",
          description: "so, after that you have play pes mobile",
        },
      ],
    },
    {
      columnId: 2,
      column: "Doing",
      tasks: [
        {
          cardId: 14,
          title: "go to school",
          description: "you have to go to school",
        },
        {
          cardId: 16,
          title: "play pes mobile",
          description: "so, after that you have play pes mobile",
        },
      ],
    },
    {
      columnId: 2,
      column: "Doing",
      tasks: [
        {
          cardId: 14,
          title: "go to school",
          description: "you have to go to school",
        },
      ],
    },
    {
      columnId: 2,
      column: "Doing",
      tasks: [
        {
          cardId: 14,
          title: "go to school",
          description: "you have to go to school",
        },
        {
          cardId: 16,
          title: "play pes mobile",
          description: "so, after that you have play pes mobile",
        },
      ],
    },
    {
      columnId: 2,
      column: "Doing",
      tasks: [
        {
          cardId: 14,
          title: "go to school",
          description: "you have to go to school",
        },
        {
          cardId: 16,
          title: "play pes mobile",
          description: "so, after that you have play pes mobile",
        },
      ],
    },
    {
      columnId: 2,
      column: "Doing",
      tasks: [
        {
          cardId: 14,
          title: "go to school",
          description: "you have to go to school",
        },
        {
          cardId: 16,
          title: "play pes mobile",
          description: "so, after that you have play pes mobile",
        },
      ],
    },
  ]);

  const addColumn = (newColumn: any) => {
    setColumns([...columns, newColumn]);
  };

  return (
    <TodosContext.Provider value={{ columns, addColumn }}>
      {children}
    </TodosContext.Provider>
  );
};

export default ContextProvider;
