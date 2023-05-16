import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import TodosConetxt from "./context/todosContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodosConetxt>
      <App />
    </TodosConetxt>
  </React.StrictMode>
);
