import React from 'react'
import Navbar from "../assets/components/NavbarUi.jsx"
import HeadUi from "../assets/components/HeadUi.jsx"

function Project() {
  return (
    <div>
      <div className="w-screen h-screen flex justify-center bg-[#ebebeb]">
      <div className="flex flex-col justify-start w-[90%]">
        <HeadUi />
        <Navbar />
        <article className="flex flex-row  text-[#545454]">
          <section className="w-full min-h-screen">
            <div className="flex flex-col mt-50 pl-50 w-full">
              <h3 className="text-[5rem] w-120 leading-tight">
                Ecommerce website</h3>
              <button
                className="border-2 p-2 rounded-4xl w-70 text-xl mt-10">
                Go To Website</button>
              <div className="flex w-full justify-center mt-30">
                <h2 className="font-playfair font-semibold text-[6rem]">01</h2>
                <div className="flex flex-col pt-10 pl-10">
                  <h3 className="font-playfair font-semibold text-[2rem]">Customike ?</h3>
                  <h3
                    className="text-[1.25rem] w-87">
                    Custommike? is an online marketplace where you can buy and sell designs for different products.
                    It allows anyone to upload their own artwork to create unique items and increase their worth.</h3>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full flex flex-col justify-center gap-20">
            <div className="w-full flex justify-end pr-20">
              <img
              className="w-250"
              src="/customike1.JPG"/>
            </div>
            <img
            className="w-200"
            src="/customike2.JPG"/>
          </section>
        </article>
      </div>
      </div>
    </div>
  )
}

export default Project