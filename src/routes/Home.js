import Sidebar from "./components/Sidebar";
import { Link } from "react-router-dom";
import Idea from "../assets/img/idea.svg";
import Todo from "../assets/img/note.svg";
import List from "../assets/img/list.svg";
export default function Overview({ todos, todosToday }) {
  const pageName = "overview";
  let remainingTasks = 0;
  let completedTasks = 0;
  let achieve = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed === false) {
      remainingTasks++;
    }
  }
  for (let y = 0; y < todos.length; y++) {
    if (todos[y].completed !== false) {
      completedTasks++;
    }
  }
  if (remainingTasks > 0) {
    achieve = Math.floor(
      (completedTasks / (remainingTasks + completedTasks)) * 100
    );
  } else if (remainingTasks === 0 && completedTasks > 0) {
    achieve = completedTasks * 100;
  } else {
    achieve = 0;
  }
  const NoTask = () => {
    return (
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl  w-80 text-center font-bold'>
          Ups... Didn't find task for today...
        </h1>
        <div className='ml-12'>
          <img src={Idea} className='w-60 rotate-12' alt='Idea logo' />
          <p className='text-slate-500 font-bold text-2xl rotate-12 w-44 mt-4 pb-12'>
            Want to add an idea ?
          </p>
        </div>
        <Link to='/add'>
          <p className='text-lg border border-black w-48 rounded-[18px] p-4 text-center bg-white'>
            <span className='text-2xl m-1'>+</span> Create an idea
          </p>
        </Link>
      </div>
    );
  };
  const TasksOfToday = () => {
    return (
      <div className='flex flex-col justify-center items-center h-full max-w-md'>
        <h1 className='text-2xl text-center font-bold'>
          Here is your today's tasks :
        </h1>
        <ul className='m-8'>
          {todosToday.map((todo) => (
            <li className='text-center text-lg m-6' key={todo.id}>
              {todo.text}
            </li>
          ))}
        </ul>
        <Link to='/mytasks'>
          <p className='text-lg border border-black w-48 rounded-[18px] p-4 text-center bg-white'>
            Consult others tasks
          </p>
        </Link>
      </div>
    );
  };
  console.log(todosToday);
  return (
    <div className='flex flex-row w-full h-full'>
      <Sidebar pageName={pageName} />
      <div className='w-full flex flex-col'>
        <div className='w-full border-b border-black p-8 text-4xl'>
          <p className='font-semibold'>Dashboard</p>
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center my-auto justify-evenly'>
          <div className='p-4 pt-8 pb-10 border rounded-[28px] bg-violet-400 m-4'>
            {todosToday === null || todosToday.length === 0 ? (
              <NoTask />
            ) : (
              <TasksOfToday />
            )}
          </div>
          <div className='flex flex-col lg:w-[690px] w-[450px] border border-grey shadow-lg bg-stone-100 rounded-[24px]'>
            <h2 className='border-b border-black text-3xl p-4'>Task summary</h2>
            <div className='flex flex-row mx-20 mt-6 mb-2 justify-center flex-wrap items-center lg:justify-between'>
              <div className='bg-violet-400 rounded-[24px] flex flex-col justify-center items-center p-4'>
                <img
                  src={Todo}
                  alt='Todo logo'
                  className='w-32 mb-12 rounded-full border-4 border-black bg-white'
                />
                <p className='text-center w-full mb-2 text-[20px] font-semibold'>
                  Remaining tasks : {remainingTasks}
                </p>
              </div>
              <div className='bg-green-600 rounded-[24px] flex flex-col justify-center items-center p-4'>
                <img
                  src={List}
                  alt='List logo'
                  className='w-32 mb-12 rounded-full border-4 border-black bg-white'
                />
                <p className='text-center w-full mb-2 text-[20px] font-semibold'>
                  Completed tasks : {completedTasks}
                </p>
              </div>
            </div>
            <Link to='/mytasks'>
              <p className='font-semibold text-lg text-center border border-black mx-40 my-8 p-4 rounded-[48px] cursor-pointer'>
                Consult your tasks !
              </p>
            </Link>

            <p className='text-3xl border-t border-black p-4'>
              You've done : {achieve}% of your tasks !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
