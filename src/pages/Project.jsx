import React from 'react'
import HeadUi from "../assets/components/HeadUi.jsx"
import { gsap } from "gsap";

gsap.from("h3,p,img,a", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out"
});

function Project() {
  return (
    <div>
      <div className="w-screen min-h-screen flex justify-center bg-[#ebebeb]">
        <p className="text-[#545454] flex justify-center mt-20 fixed bottom-5">Scroll for more</p>
      <div className="flex flex-col justify-start w-[90%]">
        <HeadUi />
        <article className="flex flex-col text-[#545454] border-b-1 border-[#545454] md:mt-20">
          <section className="w-full">
            <div className="flex flex-col w-full">
              <h3 className="text-[5rem] font-playfair italic -mb-8">Ecommerce</h3>
              <h3 className="text-[4rem]">Website</h3>
            </div>
          </section>

          <section className="mt-20 flex flex-col items-center justify-center gap-20">
            <h3 className="text-[5rem] font-playfair font-semibold italic">Customike?</h3>
            <img className="mb-10" src="/customike-landing.JPG"/>
            <a href="https://seal-over-the-walls.vercel.app/" target="_blank" 
            className="text-[1.25rem] border-1 rounded-3xl py-2 px-4 hover:text-[#ebebeb] hover:bg-[#545454] hover:cursor-pointer
            md:text-[3rem] md:rounded-4xl md:border-2
            ">Go To Website</a>
          </section>

          <section className="mt-80 flex flex-col items-center justify-center gap-10">
            <img src="/customike-how.JPG"/>
            <p className="w-160 text-[1.25rem] text-center md:text-[2rem] md:w-200"
            >Custommike? is an online marketplace where you can buy and sell designs for different products.
It allows anyone to upload their own artwork to create unique items and increase their worth.</p>
          </section>

          <section className="flex flex-col items-center justify-center mt-40 mb-20">
            <h3 className="text-[2rem] font-semibold md:text-[3rem]">How was <span className="italic font-playfair">Customike?</span> created?</h3>
            <div className="mt-10 flex flex-col items-center justify-center gap-10">
              <img className="" src="/customike-create.JPG"/>
              <div className="flex flex-row gap-8 text-[2rem] font-semibold md:text-[3rem]">
                <p className="">Create</p>
                <p className="">Collect</p>
                <p className="">Express</p>
              </div>
              <a href="https://seal-over-the-walls.vercel.app/" target="_blank" 
            className="text-[1.25rem] border-1 rounded-3xl py-2 px-4 hover:text-[#ebebeb] hover:bg-[#545454] hover:cursor-pointer
            md:text-[3rem] md:rounded-4xl md:border-2
            ">Go To Website</a>
            </div>
          </section>
        </article>
        <article className="flex flex-col text-[#545454] border-b-1 md:mt-20">
          <section className="w-full">
            <div className="flex flex-col w-full">
              <h3 className="text-[5rem] font-playfair italic -mb-8">Business</h3>
              <h3 className="text-[4rem]">Website</h3>
            </div>
          </section>
          <section className="mt-20 flex flex-col items-center justify-center gap-20">
            <h3 className="text-[5rem] font-playfair font-semibold italic">Tissus Design Studio</h3>
            <a href="https://tissus-project.vercel.app/" target="_blank"
            className="text-[1.25rem] border-1 rounded-3xl py-2 px-4 hover:text-[#ebebeb] hover:bg-[#545454] hover:cursor-pointer
            md:text-[3rem] md:rounded-4xl md:border-2
            ">Go To Website</a>
            <img className="mb-10" src="/tissus1.JPG"/>
            <img className="mb-10" src="/tissus2.JPG"/>
            <img className="mb-10" src="/tissus3.JPG"/>
            <a href="https://tissus-project.vercel.app/" target="_blank"
            className="text-[1.25rem] border-1 rounded-3xl py-2 px-4 hover:text-[#ebebeb] hover:bg-[#545454] hover:cursor-pointer
            md:text-[3rem] md:rounded-4xl md:border-2
            ">Go To Website</a>
          </section>
        </article>
      </div>
      </div>
    </div>
  )
}

export default Project