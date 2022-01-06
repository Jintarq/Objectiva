import Sidebar from "./components/Sidebar";
import { Link } from "react-router-dom";
export default function Overview({ todos }) {
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
    achieve = Math.floor(completedTasks / remainingTasks) * 100;
  } else if (remainingTasks === 0 && completedTasks > 0) {
    achieve = completedTasks * 100;
  } else {
    achieve = 0;
  }
  return (
    <div className='flex flex-row w-full h-full'>
      <Sidebar pageName={pageName} />
      <div className='w-full flex flex-col'>
        <div className='w-full border-b border-black p-8 text-4xl'>
          <p className='font-semibold'>Dashboard</p>
        </div>
        <div className='flex flex-row justify-center items-center my-auto justify-evenly'>
          <div className='p-4 pt-8 pb-10 flex flex-col justify-center items-center border rounded-[28px] bg-violet-400'>
            <h1 className='text-2xl  w-80 text-center font-bold'>
              Ups... Didn't find task for today...
            </h1>
            <p className='text-slate-500 font-bold text-2xl rotate-12 w-44 text-center pt-44 pb-12'>
              Want to add an idea ?
            </p>
            <Link to='/add'>
              <p className='text-lg border border-black w-48 rounded-[18px] p-5 text-center bg-white'>
                <span className='text-2xl'>+</span> Create an idea
              </p>
            </Link>
          </div>
          <div>
            <div className='border rounded-[24px] border-grey shadow-lg bg-stone-100'>
              <h2 className='border-b border-black text-3xl p-4'>
                Task summary
              </h2>
              <div className='flex flex-row justify-between px-20 pt-6 pb-2'>
                <div className='bg-violet-400 p-5 rounded-[24px] m-5'>
                  <p className='text-center w-full pt-36 pb-2 text-[20px] font-semibold'>
                    Remaining tasks : {remainingTasks}
                  </p>
                </div>
                <div className='bg-green-600 p-5 rounded-[24px] m-5'>
                  <p className='text-center w-full pt-36 pb-2 text-[20px] font-semibold'>
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
    </div>
  );
}
