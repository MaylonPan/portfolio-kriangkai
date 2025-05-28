import React from 'react'
import Navbar from "../assets/components/NavbarUi.jsx"
import HeadUi from "../assets/components/HeadUi.jsx"

function Home() {
  return (
    <div>
      <div className="min-h-screen w-screen flex justify-center bg-[#ebebeb]">
      <div className="flex flex-col justify-start w-[90%]">
        <HeadUi />
        <article>
          <div className="flex flex-col mt-20 text-[#545454]">
            <h2 className="font-playfair italic font-bold text-[15rem] leading-60 pl-70">KRIANGKAI</h2>
            <h2 className="flex justify-end  font-roboto text-[15rem] leading-60 pr-70">THAIKON</h2>
          </div>
        </article>
        <article className="flex flex-row w-full justify-between items-center mt-20">
          <div className="w-full flex justify-center">
            <p className="w-80 text-center font-semibold">A FULLSTACK DEVELOPER FROM CHIANGMAI CITY, THAILAND</p>
          </div>
          <div className="w-full flex justify-center">
            <img src="/coding.gif"
            className="h-100"/>
          </div>
          <div className="w-full flex justify-center">
            <p className="w-100 text-center font-semibold">DEDICATED TO FORGING MEMORABLE AND VISUALLY IMPACTFUL DIGITAL PRESENCES.</p>
          </div>
        </article>
      </div>
    </div>
    </div>
  )
}

export default Home