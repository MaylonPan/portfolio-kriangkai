import React from 'react'
import Navbar from "../assets/components/NavbarUi.jsx"
import HeadUi from "../assets/components/HeadUi.jsx"


function Contract() {
  return (
    <div>
      <div className="w-screen min-h-screen flex justify-center bg-[#ebebeb]">
      <div className="flex flex-col justify-start w-[90%]">
        <HeadUi />
        <Navbar />
        <article className="flex flex-row  text-[#545454]">
          <section className="w-full min-h-screen mt-40 ml-40">
            <h2 className="font-playfair font-semibold text-[8rem] italic">Let's collaborate</h2>
            <button className="border-2 rounded-4xl py-2 px-4 text-[2rem]">Work with me</button>
          </section>
          <section className="w-full flex flex-col">
            <div className="mt-100 ml-60 mb-20">
              <p className="text-[2rem]">kriangkai.tko@gmail.com</p>
              <p className="text-[2rem]">+66 618025665</p>
            </div>
            <div className="flex gap-10 ml-60">
              <img src="/facebook.svg"
              className="w-10"/>
              <img src="/instagram.svg"
              className="w-13"/>
              <img src="/linkedin.svg"
              className="w-10"/>
              <img src="/github.svg"
              className="w-10"/>
            </div>

          </section>
        </article>
        <article>
          <div></div>
        </article>
      </div>
      </div>
    </div>
  )
}

export default Contract