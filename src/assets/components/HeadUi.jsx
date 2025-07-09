import React from 'react'
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import { gsap } from "gsap";

gsap.from("h1,p,li", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

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
              <li className=' animated-underline'>
                <Link to="/">
                Home</Link></li>
              <li className=' animated-underline'>
                <Link to="/about">
                About</Link></li>
              <li className=' animated-underline'>
                <Link to="/project">
                Project</Link></li>
              <li className=' animated-underline'>
                <Link to="/contact">
                Contact</Link></li>
            </ul>
          </nav>
        </div>
        <MobileNav />
      </div>
    </div>
  )
}

export default HeadUi