import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function AddTask({ setTodos, todos, themes }) {
  const [todoText, setTodoText] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const handleText = (e) => {
    setTodoText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: todoText,
        completed: false,
        id: Math.floor(Math.random() * 5025),
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDay(),
        theme: selectedTheme,
      },
    ]);
    setTodoText("");
  };
  const handleTheme = (e) => {
    setSelectedTheme(e.target.value);
  };
  const pageName = "add";
  return (
    <div className='flex flex-row '>
      <Sidebar pageName={pageName} />
      <div className='flex flex-col mx-auto text-center'>
        <h1 className='text-5xl m-5 text-semibold'>Add a task</h1>
        <div className='mt-36'>
          <form onSubmit={handleSubmit} className='flex flex-row items-start'>
            <div className='flex flex-row mb-5 mt-10'>
              <div className='flex flex-col'>
                <label htmlFor='todotext' className='text-2xl font-semibold'>
                  Type the content of your task
                </label>
                <textarea
                  className='border border-black mt-2 ml-2 h-[100px] mb-5 w-[400px] rounded-[10px]'
                  value={todoText}
                  type='text'
                  onChange={handleText}
                  required
                  id='todotext'
                  name='todotext'
                />
                <input
                  type='submit'
                  className='border border-black rounded-[8px] cursor-pointer font-semibold w-48 self-end'
                  value='Send'
                />
              </div>
              <div className='flex flex-col ml-16'>
                <label htmlFor='themes' className='text-xl font-semibold mt-4'>
                  Choose a theme :{" "}
                </label>
                <select
                  onChange={handleTheme}
                  name='themes'
                  className='border border-black text-xl'
                  required
                >
                  <option value=''>Select theme</option>
                  {themes.map((theme) => (
                    <option key={theme.id} value={theme.subject}>
                      {theme.subject}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
