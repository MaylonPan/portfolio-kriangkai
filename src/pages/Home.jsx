import React from 'react'
import Navbar from "../assets/components/NavbarUi.jsx"
import HeadUi from "../assets/components/HeadUi.jsx"

function Home() {
  return (
    <div>
      <div className="h-screen w-screen flex justify-center bg-[#ebebeb]">
      <div className="flex flex-col justify-start w-[90%]">
        <HeadUi />
        <Navbar />
        <article className="flex flex-col md:flex-row text-[#545454]">
          <section className="w-full md:w-1/2 min-h-screen">
            <div className="flex flex-col justify-center w-full items-center h-full">
              <h2 className="font-playfair italic font-semibold md:mr-60 sm:text-[3rem] md:text-[4rem] lg:text-[6rem] leading-none">KRIANGKAI</h2>
              <h2 className="w-full text-[3rem] sm:text-[3rem] md:text-[5rem] lg:text-[6rem] font-semibold leading-none">THAIKON</h2>
              <div className="w-full flex justify-end">
                <p className="w-120 text-[1.5rem] md:text-[1rem] mr-43">
                  A web developer is not just about writing code or building websites it's about combining creativity,
  a passion for problem-solving and a love for technology</p>
              </div>
            </div>
          </section>
          <section className="w-1/2 flex justify-center items-center">
            <img
            className="flex justify-center max-w h-auto"
            src="/coding.gif"/>
          </section>
        </article>
      </div>
    </div>
    </div>
  )
}

export default Home