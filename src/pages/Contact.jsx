import React from 'react'
import HeadUi from "../assets/components/HeadUi.jsx"
import { gsap } from "gsap";

gsap.from("h2,p,img,a", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});


function Contract() {
  return (
    <div>
      <div className="w-screen min-h-screen flex justify-center bg-[#ebebeb]">
      <div className="flex flex-col justify-start w-[90%]">
        <HeadUi />
        <article className="flex flex-col text-[#545454]">
          <section className="md:flex md:flex-row">
            <div className="w-full md:w-1/2">
              <h2 className="font-playfair font-semibold text-[5rem] italic md:mt-20">Let's collaborate</h2>
              <p className="text-[2rem]">Make good things together</p>
              <section className="mt-10">
                <a className="text-[2rem] hover:font-semibold underline" target="_blank"
                href="https://www.canva.com/design/DAGjSedhGFM/6rz74wizsEM7Y3wgZI7A8w/view?utm_content=DAGjSedhGFM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7cea175053">Here's My CV</a>
              </section>
            </div>
            <div className="mt-30 md:mt-70 md:w-1/2">
              <div className="text-[1.5rem] font-semibold">
                <p>Kriangkai.tko@gmail.com</p>
                <p>+66 618025665</p>
                <p className="pt-8">Chiangmai, Thailand</p>
              </div>
            </div>
          </section>

          <section className="md:flex md:flex-row">
            <div className="pt-10 flex justify-center md:w-1/2 md:justify-start">
              <img src="/present.gif"/>
            </div>
            <div className="grid grid-cols-2 h-5 mt-10 gap-5 md:grid-cols-4 md:gap-10">
              <a className="animated-underline" target="_blank"
              href="https://www.facebook.com/MaylonPan">Facebook</a>
              <a className="animated-underline"target="_blank"
               href="https://www.instagram.com/itsmaylon?igsh=MTRoY3BmMDQ3emdxag%3D%3D&utm_source=qr">Instagram</a>
              <a className="animated-underline"target="_blank"
               href="https://www.linkedin.com/in/kriangkai/">LinkedIn</a>
              <a className="animated-underline"target="_blank"
               href="https://github.com/MaylonPan">Github</a>
            </div>
          </section>
        </article>
      </div>
      </div>
    </div>
  )
}

export default Contract