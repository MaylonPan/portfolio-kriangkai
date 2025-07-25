import React from 'react'
import HeadUi from "../assets/components/HeadUi.jsx"
import { gsap } from "gsap";

gsap.from("h2,p,a,img", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

function Home() {
  return (
    <div>
      <div className="min-h-screen w-screen flex justify-center bg-[#ebebeb]">
      <div className="flex flex-col justify-start w-[90%]">
        <HeadUi />
        <article className="flex justify-center">
          <div className="flex flex-col mt-10 w-500 text-[#545454]">
            <h2 className="font-playfair italic font-bold text-[5rem] md:-mb-30 md:text-[10rem] lg:text-[14rem]">KRIANGKAI</h2>
            <h2 className="flex justify-end font-roboto text-[5rem] md:-mb-30 md:text-[10rem] lg:text-[14rem]">THAIKON</h2>
          </div>
        </article>


        <article className="flex flex-col w-full items-center md:hidden">
          <div className="flex flex-col text-center items-center my-20 gap-5 font-semibold text-[#545454]">
            <p className="w-80">A FULLSTACK DEVELOPER FROM CHIANGMAI CITY, THAILAND</p>
            <p className="w-90">DEDICATED TO FORGING MEMORABLE AND VISUALLY IMPACTFUL DIGITAL PRESENCES.</p>
          </div>
          <div>
            <img src="/coding.gif"
            className="h-90 w-120"/>
          </div>
        </article>


        <article className="hidden md:flex flex-row w-full justify-between items-center mt-20">
          <div className="w-full flex justify-center">
            <p className="lg:w-80 text-center font-semibold">A FULLSTACK DEVELOPER FROM CHIANGMAI CITY, THAILAND</p>
          </div>
          <div className="mt-30 w-400 flex justify-center">
            <img src="/coding.gif"
            className=""/>
          </div>
          <div className="w-full flex justify-center">
            <p className="lg:w-100 text-center font-semibold">DEDICATED TO FORGING MEMORABLE AND VISUALLY IMPACTFUL DIGITAL PRESENCES.</p>
          </div>
        </article>
        <div className="text-center mt-20 md:mt-0">
          <a className="text-[2rem] hover:font-semibold underline" target="_blank"
                href="https://www.canva.com/design/DAGjSedhGFM/yjIGgUqX4oMKJGKz_2_d2g/edit?utm_content=DAGjSedhGFM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Here's My CV</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home