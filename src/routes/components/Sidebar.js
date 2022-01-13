import { Link } from "react-router-dom";
import Plus from "../../assets/img/plus.svg";
import Home from "../../assets/img/home.svg";
import Clipboard from "../../assets/img/clipboard.svg";

export default function Sidebar({ pageName = "overview" }) {
  const defaultLi =
    "mb-5  text-gray-500 text-lg flex items-center justify-evenly py-2  w-24 md:w-40 lg:w-48";
  const className = pageName;
  return (
    <div className='flex flex-col p-10 border-r border-black font-semibold border-solid h-screen min-w-[15%]'>
      <div className='mb-20'>
        <h1 className='lg:text-4xl md:text-3xl text-xl'>Objectiva</h1>
      </div>
      <div className='flex'>
        <ul className='flex flex-col items-start'>
          <Link to='/'>
            <li
              className={`${defaultLi} ${
                className === "overview" ? "active" : ""
              }`}
            >
              <img src={Home} className='w-11' alt='Home logo' />
              <p className='lg:block hidden'>Overview</p>
            </li>
          </Link>
          <Link to='/mytasks'>
            <li
              className={`${defaultLi} ${
                className === "mytasks" ? "active" : ""
              }`}
            >
              <img src={Clipboard} className='w-11' alt='Clipboard logo' />

              <p className='lg:block hidden'>My task(s)</p>
            </li>
          </Link>
          <br />
          <div className='border-t pt-8  border-black'>
            <Link to='/add'>
              <li
                className={`${defaultLi} ${
                  className === "add" ? "active" : ""
                }`}
              >
                <img src={Plus} className='lg:w-10 w-8' alt='Plus logo' />
                <p className='lg:block hidden'>Add task</p>
              </li>
            </Link>
            <Link to='/addtheme'>
              <li
                className={`${defaultLi} ${
                  className === "addtheme" ? "active" : ""
                }`}
              >
                <img src={Plus} className='lg:w-10 w-8' alt='Plus logo' />
                <p className='lg:block hidden'>Add theme</p>
              </li>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}
