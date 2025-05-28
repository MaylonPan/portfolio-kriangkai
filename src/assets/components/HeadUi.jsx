import React from 'react'
import { Link } from 'react-router-dom';

function HeadUi() {
  return (
    <div>
      <div className="flex flex-row w-full">
        <div className="w-1/2">
          <h1 className="flex w-full p-6 font-extrabold text-[1.375rem]">
            BbBb
          </h1>
        </div>
        <nav className=" p-2 flex w-1/2">
          <ul className=" list-none flex flex-row justify-end items-center gap-20 w-full mx-20 text-[1.25rem]">
            <li>
              <Link to="/">
              Home</Link></li>
            <li>
              <Link to="/about">
              About</Link></li>
            <li>
              <Link to="/project">
              Projects</Link></li>
            <li>
              <Link to="/contract">
              Contract</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HeadUi