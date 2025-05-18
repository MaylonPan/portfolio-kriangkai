import React from 'react'
import Navbar from "../assets/components/NavbarUi.jsx"
import HeadUi from "../assets/components/HeadUi.jsx"

function Home() {
  return (
    <div>
      <div className="min-h-screen flex justify-center bg-[#ebebeb]">
      <div className="flex flex-col justify-start w-[90%]">
        <HeadUi />
        <Navbar />
        <article className="flex flex-row  text-[#545454]">
          <section className="w-full min-h-screen">
            <div className="flex flex-col justify-center w-full items-center h-full">
              <h2 className="w-full font-playfair italic font-semibold pl-10 text-[12rem] leading-none">KRIANGKAI</h2>
              <h2 className="w-full text-end text-[10rem] font-semibold leading-none">THAIKON</h2>
              <div className="w-full flex justify-end">
                <p className="w-120 text-[1.5rem] mr-43">
                  A web developer is not just about writing code or building websites it's about combining creativity, 
  a passion for problem-solving and a love for technology</p>
              </div>
            </div>
          </section>
          <section className="w-full flex justify-center items-center">
            <img
            className="flex justify-center w-200 h-150"
            src="../../public/coding.gif"/>
          </section>
        </article>
      </div>
    </div>
    </div>
  )
}

export default Home