import React from 'react'
import Navbar from "../assets/components/NavbarUi.jsx"
import HeadUi from "../assets/components/HeadUi.jsx"

function About() {
  return (
    <div>
      <div className="min-h-screen flex justify-center bg-[#ebebeb]">
        <p className="text-[#545454]flex justify-center mt-20 fixed bottom-5">Scroll for more</p>
      <div className="flex flex-col justify-start w-[90%]">
        <HeadUi />
        <Navbar />
        <article className="flex flex-row  text-[#545454]">
          <section className="w-full ">
              <div className="flex flex-col w-full h-full mt-50 ml-30">
                <h2 className="w-full font-playfair italic font-semibold pl-50 text-[12rem] leading-none">About</h2>
                <h2 className="w-full pr-105 text-end text-[10rem] font-semibold leading-none">Me</h2>
                <div className="w-full pl-50">
                  <img
                  className="w-30 mb-10"
                  src="public/cat.png"/>
                </div>
                <div className="w-full pl-52">
                  <p className="w-120 text-[1.5rem] font-semibold">
                    An Active Junior Software Developer and Former Barista with a Passion for <br/> Problem-Solving and Collaboration</p>
                </div>
              </div>
          </section>
          <section className="w-full flex flex-col justify-center items-center mt-50">
            <img
            className="flex justify-center mb-20"
            src="public/bass-profile.jpeg"/>
          </section>
        </article>

        <article className="text-[#545454] flex flex-row mt-50">
          <section className="w-full ml-50">
            <div className="ml-30 mt-50 ">
                <h2 className="font-playfair font-semibold text-[8rem] leading-none">My Creative</h2>
                <h2 className=" text-[6.5rem] leading-none">Toolkit</h2>
                <p className="text-[1.5rem] pl-5 pt-2">Make good things together</p>
              </div>
          </section>
            <section className="w-full flex flex-col">
            <div className="flex justify-end pr-60 pt-20">
              <img src="public/creative-art.png"/>
            </div>
          </section>
        </article>
        <article className="w-full flex justify-center mt-50 mb-50">
            <div className="w-200 flex flex-row gap-5">
              <div>
                <img src="public/html5.svg"/>
              </div>
              <div>
                <img src="public/css3.svg"/>
              </div>
              <div>
                <img src="public/javascript.svg"/>
              </div>
              <div>
                <img src="public/react.svg"/>
              </div>
              <div>
                <img src="public/mongodb.svg"/>
              </div>
              <div>
                <img src="public/tailwind.svg"/>
              </div>
              <div>
                <img src="public/sql.svg"/>
              </div>

            </div>
        </article>
      </div>
      </div>
    </div>
  )
}

export default About