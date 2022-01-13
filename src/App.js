import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Overview from "./routes/Home";
import MyTask from "./routes/MyTask";
import AddTask from "./routes/AddTask";
import AddTheme from "./routes/AddTheme";
export default function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [themes, setThemes] = useState(
    JSON.parse(localStorage.getItem("themes")) || []
  );
  const [todosToday, setTodosToday] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    setTodosToday(
      todos.filter(
        (todo) =>
          todo.year === new Date().getFullYear() &&
          todo.month === new Date().getMonth() &&
          todo.day === new Date().getDay()
      )
    );
  }, [todos]);
  useEffect(() => {
    localStorage.setItem("themes", JSON.stringify(themes));
  }, [themes]);
  const changeStatus = () => {
    if (status === "all") {
      setFilteredTodos(todos);
    } else if (status === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
    } else if (status === "uncompleted") {
      setFilteredTodos(todos.filter((todo) => todo.completed === false));
    }
  };
  useEffect(() => {
    changeStatus();
  }, [todos, status]);
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Overview todos={todos} todosToday={todosToday} />}
        />
        <Route
          path='/mytasks'
          element={
            <MyTask
              todos={todos}
              filteredTodos={filteredTodos}
              setTodos={setTodos}
              setStatus={setStatus}
            />
          }
        />
        <Route
          path='/add'
          element={
            <AddTask setTodos={setTodos} todos={todos} themes={themes} />
          }
        />
        <Route
          path='/addtheme'
          element={<AddTheme setThemes={setThemes} themes={themes} />}
        />
      </Routes>
    </div>
  );
}
