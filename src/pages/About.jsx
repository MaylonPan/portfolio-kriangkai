import React from 'react'
import Navbar from "../assets/components/NavbarUi"
import HeadUi from '../assets/components/HeadUi'

function About() {
  return (
    <div>
      <div className="min-h-screen flex justify-center bg-[#ebebeb]">
      <div className="flex flex-col justify-start w-[90%]">
        <HeadUi />
        <Navbar />
        <article className="flex flex-row  text-[#545454]">
          <section className="w-full min-h-screen">
              <div className="flex flex-col justify-center w-full items-center h-full">
                <h2 className="w-full font-playfair italic font-semibold pl-50 text-[12rem] leading-none">About</h2>
                <h2 className="w-full pr-105 text-end text-[10rem] font-semibold leading-none">Me</h2>
                <div className="w-full pl-50">
                  <img
                  className="w-30 mb-10"
                  src="src/assets/images/cat.png"/>
                </div>
                <div className="w-full pl-52">
                  <p className="w-120 text-[1.5rem] font-semibold">
                    An Active Junior Software Developer and Former Barista with a Passion for Problem-Solving and Collaboration</p>
                </div>
              </div>
          </section>
          <section className="w-full flex flex-col justify-center items-center">
            <img
            className="flex justify-center mb-20"
            src="src/assets/images/bass-profile.jpeg"/>
            <div>
              <p className="w-200 text-[1.5rem]">
                I’m a recent graduate from the Generation Bootcamp, with foundation in software development and hands-on programming skills. Before entering tech, I spent two years honing my abilities as a Barista an experience that strengthened my communication and teamwork.</p>
            </div>
          </section>
        </article>
      </div>
      </div>
    </div>
  )
}

export default About