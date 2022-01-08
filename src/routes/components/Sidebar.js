import { Link } from "react-router-dom";
import Plus from "../../assets/img/plus.svg";
import Home from "../../assets/img/home.svg";
import Clipboard from "../../assets/img/clipboard.svg";

export default function Sidebar({ pageName = "overview" }) {
  const defaultLi =
    "mb-5  text-gray-500 text-lg flex items-center justify-evenly py-2  w-48";
  const className = pageName;
  return (
    <div className='flex flex-col p-10 border-r border-black font-semibold border-solid h-screen min-w-[15%]'>
      <div className='mb-20'>
        <h1 className='text-4xl'>Objectiva</h1>
      </div>
      <div className='flex'>
        <ul className='flex flex-col items-start'>
          <li
            className={`${defaultLi} ${
              className === "overview" ? "active" : ""
            }`}
          >
            <img src={Home} className='w-11' alt='Home logo' />
            <Link to='/'>
              <p>Overview</p>
            </Link>
          </li>
          <li
            className={`${defaultLi} ${
              className === "mytasks" ? "active" : ""
            }`}
          >
            <img src={Clipboard} className='w-11' alt='Clipboard logo' />
            <Link to='/mytasks'>My task(s)</Link>
          </li>
          <br />
          <div className='border-t pt-8 border-black'>
            <li
              className={`${defaultLi} ${className === "add" ? "active" : ""}`}
            >
              <img src={Plus} className='w-10' alt='Plus logo' />
              <Link to='/add'>Add task</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
