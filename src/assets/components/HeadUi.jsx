import React from 'react'
import { Link } from 'react-router-dom';

function HeadUi() {
  return (
    <div>
      <div className="flex flex-row w-full">
        <div className="w-1/2">
          <h1 className="flex w-full p-6 font-extrabold text-[1.375rem]">
            <Link to="/">
                BbBb</Link>
          </h1>
        </div>
        <div className="hidden p-2 md:flex w-1/2">
          <nav className="w-full h-full">
            <ul className="list-none flex flex-row w-full h-full gap-10 justify-end items-center text-[1.25rem]">
              <li>
                <Link to="/">
                Home</Link></li>
              <li>
                <Link to="/about">
                About</Link></li>
              <li>
                <Link to="/project">
                Project</Link></li>
              <li>
                <Link to="/contact">
                Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-end items-center w-full hover:cursor-pointer md:hidden">
          <img className="w-8 h-8"
          src="/hamburger-menu.svg"/>
        </div>
      </div>
    </div>
  )
}

export default HeadUi