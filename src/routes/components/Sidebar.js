import { useState } from "react";
import { Link } from "react-router-dom";
export default function Sidebar({ pageName = "overview" }) {
  const defaultLi = "mb-5 p-2 text-gray-500 text-lg";
  const className = pageName;
  return (
    <div className='flex flex-col p-10 border-r border-black border-solid h-screen'>
      <div className='mb-20'>
        <h1 className='text-4xl'>Objectiva</h1>
      </div>
      <div className='flex'>
        <ul className='flex flex-col items-start'>
          <li
            className={`${defaultLi} ${
              className == "overview" ? "active" : ""
            }`}
          >
            <Link to='/'>Overview</Link>
          </li>
          <li
            className={`${defaultLi} ${className == "mytasks" ? "active" : ""}`}
          >
            <Link to='/mytasks'>My task(s)</Link>
          </li>
          <br />
          <li
            className={`${defaultLi} ${
              className == "completed-tasks" ? "active" : ""
            }`}
          >
            <Link to='/completed-tasks'>Completed task(s)</Link>
          </li>
          <li className={`${defaultLi} ${className == "add" ? "active" : ""}`}>
            <Link to='/add'>Add task/theme</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
