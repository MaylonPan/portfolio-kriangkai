import React from 'react'
import Navbar from "../assets/components/NavbarUi"
import HeadUi from '../assets/components/HeadUi'


function Contract() {
  return (
    <div>
      <div className="min-h-screen flex justify-center bg-[#ebebeb]">
      <div className="flex flex-col justify-start w-[90%]">
        <HeadUi />
        <Navbar />
        <article>
          <h2>HI</h2>
        </article>
      </div>
      </div>
    </div>
  )
}

export default Contract