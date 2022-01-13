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
    <div className='flex flex-row'>
      <Sidebar pageName={pagename} />
      <div className='flex flex-col w-full h-full items-center'>
        <div>
          <h1 className='text-center text-3xl font-bold'>Add a theme</h1>
        </div>
        <div className='mt-48'>
          <form onSubmit={handleSubmit}>
            <label htmlFor='theme' className='block text-lg font-semibold'>
              Put the name of your personal theme :
            </label>
            <input
              type='text'
              className='border border-black block rounded-[8px] text-lg py-2 px-4'
              id='theme'
              name='theme'
              onChange={handleChange}
              value={themeText}
              required
            />
            <input
              type='submit'
              className='border border-black block rounded-[8px] p-2 mt-2'
              value='Add theme'
            />
          </form>
        </div>
      </div>
    </div>
  );
}
