import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav className=" p-2 bg-[#d6d6d6] flex">
          <ul className=" list-none flex flex-row justify-between w-full mx-20 text-[1.25rem]">
            <li>
              <Link to="/">
              <p className="text-xs">01</p>
              Home</Link></li>
            <li>
              <Link to="/about">
              <p className="text-xs">02</p>
              About</Link></li>
            <li>
              <Link to="/project">
              <p className="text-xs">03</p>
              Projects</Link></li>
            <li>
              <Link to="/contract">
              <p className="text-xs">04</p>
              Contract</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar