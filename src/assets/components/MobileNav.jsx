import React from 'react'
import { Link } from 'react-router-dom';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from 'lucide-react'
import { gsap } from "gsap";

gsap.from("li,p", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

function MobileNav() {
  return (
    <div className='md:hidden flex justify-end w-full'>
        <Sheet>
            <SheetTrigger className=' hover:cursor-pointer'>
                <AlignJustify className='size-10 flex h-auto' />
            </SheetTrigger>
            <SheetContent  className='bg-[#333] border-0'>
                <ul className='gap-30 items-center text-white text-2xl flex flex-col mt-50'>
                    <li className='hover:text-gray-500 animated-underline'>
                        <Link to="/">
                        <p>Home</p>
                        </Link>
                    </li>
                    <li className='hover:text-gray-500 animated-underline'>
                        <Link to="/about">
                        <p>About</p>
                        </Link>
                    </li>
                    <li className='hover:text-gray-500 animated-underline'>
                        <Link to="/project">
                        <p>Projects</p>
                        </Link>
                    </li>
                    <li className='hover:text-gray-500 animated-underline'>
                        <Link to="/contact">
                        <p>Contact</p>
                        </Link>
                    </li>
                </ul>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNav