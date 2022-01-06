import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function AddTask({ setTodos, todos }) {
  const [todoText, setTodoText] = useState("");
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
      },
    ]);
    setTodoText("");
  };
  const pageName = "add";
  return (
    <div className='flex flex-row '>
      <Sidebar pageName={pageName} />
      <div className='flex flex-col mx-auto text-center'>
        <h1 className='text-5xl m-5 text-semibold'>Add a task</h1>
        <div className='mt-36'>
          <form onSubmit={handleSubmit} className='flex flex-col'>
            <div className='flex flex-col mb-5 mt-10'>
              <label htmlFor='todotext' className='text-2xl font-semibold'>
                Type the content of your task :
              </label>
              <textarea
                className='border-2 border-black mt-2 h-56 mb-5 w-96'
                value={todoText}
                type='text'
                onChange={handleText}
                required
                id='todotext'
                name='todotext'
              />
            </div>

            <input
              type='submit'
              className='border-2 border-black rounded-xl cursor-pointer'
              value='Send'
            />
          </form>
        </div>
      </div>
    </div>
  );
}
