import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Overview from "./routes/Home";
import MyTask from "./routes/MyTask";
import CompletedTask from "./routes/CompletedTask";
import AddTask from "./routes/AddTask";
export default function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("todos") != null) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    } else {
      setTodos([]);
    }
  }, []);
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
        <Route path='/completed-tasks' element={<CompletedTask />} />
        <Route
          path='/add'
          element={<AddTask setTodos={setTodos} todos={todos} />}
        />
      </Routes>
    </div>
  );
}
