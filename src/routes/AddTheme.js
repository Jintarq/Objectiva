import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function AddTheme({ setThemes, themes }) {
  const [themeText, setThemeText] = useState("");
  const handleChange = (e) => {
    setThemeText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setThemes([
      ...themes,
      {
        subject: themeText,
        id: Math.floor(Math.random() * 5025),
      },
    ]);
    setThemeText("");
  };
  const pagename = "addtheme";
  return (
    <div className='flex flex-row w-full h-full'>
      <Sidebar pageName={pagename} />
      <div className='flex flex-col w-full'>
        <div className='w-full border-b border-black p-8 text-4xl text-slate-200 bg-[#20212C]'>
          <p className='font-bold'>Add task</p>
        </div>
        <div className='flex flex-col h-full items-center w-full bg-[#17181F]'>
          <div className='bg-[#20212C] p-8 m-8'>
            <form onSubmit={handleSubmit}>
              <label
                htmlFor='theme'
                className='block text-lg font-semibold text-slate-200 mb-2'
              >
                Put the name of your personal theme :
              </label>
              <input
                type='text'
                className='border border-white block rounded-[8px] text-black focus:outline-0 mb-2 text-lg py-2 px-4'
                id='theme'
                name='theme'
                onChange={handleChange}
                value={themeText}
                required
              />
              <input
                type='submit'
                className='border border-white block rounded-[8px] p-2 mt-4 mb-2 text-slate-200'
                value='Add theme'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
