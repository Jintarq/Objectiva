import Sidebar from "./components/Sidebar";
export default function MyTask({ todos, filteredTodos, setTodos, setStatus }) {
  const pageName = "mytasks";
  let i = 0;
  const handleDone = (item) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === item.id) {
          return {
            ...todo,
            completed: !item.completed,
          };
        } else {
          return todo;
        }
      })
    );
  };
  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => todo.id !== item.id));
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className='flex flex-row w-full h-full'>
      <Sidebar pageName={pageName} />
      <div className='flex flex-col w-full bg-[#17181F]'>
        <div className='w-full bg-[#20212C] p-8'>
          <h1 className='w-full text-4xl text-slate-200 font-bold'>Tasks</h1>
        </div>
        <div className='mx-auto mt-36 lg:min-w-[1250px] md:min-w-[500px]'>
          <ul className='p-5'>
            <div className='mb-10'>
              <h1 className='text-3xl border-b border-black w-full mb-2 pb-3 text-slate-200'>
                Here is your tasks :
              </h1>
              <select
                onChange={statusHandler}
                id='selector'
                className='border border-black rounded-[15px] px-2'
              >
                <option value='all'>Select task's specification</option>
                <option value='completed'>Show completed</option>
                <option value='uncompleted'>Show uncompleted</option>
              </select>
            </div>

            {filteredTodos.map((todo) => {
              i++;
              return (
                <div
                  key={todo.id}
                  className='flex bg-[#20212C] px-4 mb-8 text-lg rounded-[24px]'
                >
                  <li className='flex flex-row pt-4 ml-5 mb-5 items-center'>
                    <h2 className='mr-5 border-r border-black pr-4 font-semibold text-slate-400'>
                      N°{i} {todo.theme === undefined ? "" : `- ${todo.theme}`}
                    </h2>
                    <a className='border-r border-black pr-4 max-w-[1200px] text-slate-200'>
                      {todo.text}
                    </a>
                    <div className='pl-4'>
                      <a
                        className='mr-4 text-green-500'
                        onClick={() => handleDone(todo)}
                      >
                        {todo.completed ? "Undo" : "Done"}
                      </a>
                      <a
                        className='text-red-600'
                        onClick={() => handleDelete(todo)}
                      >
                        Delete it
                      </a>
                      <a className=''></a>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
