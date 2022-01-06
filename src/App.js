import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Overview from "./routes/Home";
import MyTask from "./routes/MyTask";
import AddTask from "./routes/AddTask";
export default function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Overview todos={todos} />} />
        <Route
          path='/mytasks'
          element={<MyTask todos={todos} setTodos={setTodos} />}
        />
        <Route
          path='/add'
          element={<AddTask setTodos={setTodos} todos={todos} />}
        />
      </Routes>
    </div>
  );
}
