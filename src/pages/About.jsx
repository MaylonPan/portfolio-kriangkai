import React from 'react'
import HeadUi from "../assets/components/HeadUi.jsx"

function About() {
  return (
    <div>
      <div className="min-h-screen w-screen flex justify-center bg-[#545454]">
        <p className="text-[#ebebeb] flex justify-center mt-20 fixed bottom-5">Scroll for more</p>
      <div className="flex flex-col justify-start w-[90%]">
        <HeadUi />
        <article className="relative flex flex-col md:flex-row md:mt-10 text-[#ebebeb] w-full h-320 ">
          <section className="absolute md:static md:w-1/2">
              <div className="">
                <h2 className="text-[10rem] text-shadow-lg text-black font-playfair font-semibold italic">ABOUT</h2>
                <h2 className="text-[10rem] text-shadow-lg text-black font-semibold">Me</h2>
              </div>
              <div className="hidden md:flex md:">
                <p className="w-110 text-[2.25rem] text-shadow-lg text-white font-semibold ">
                    An Active Software Developer and Former Barista with a Passion for <br/> Problem-Solving and Collaboration</p>
              </div>
          </section>
          <section className="w-full md:w-1/2 border-l-1 border-[#ebebeb] h-600">
            <img
            className="flex justify-center w-full"
            src="/my-picture-red.jpg"/>
          </section>
          <div className="absolute w-full flex justify-end text-end mt-210 md:hidden">
            <p className="w-110 text-[2.25rem] text-shadow-lg text-white font-semibold ">
                    An Active Software Developer and Former Barista with a Passion for <br/> Problem-Solving and Collaboration</p>
          </div>
          
        </article>
{/* Certificates */}
        <article className="border-l-1 border-[#ebebeb] text-[#ebebeb]">
          <div className="ml-8">
            <h2 className="text-[5rem] font-playfair font-semibold italic">Certificates</h2>
            <p className="text-[1.25rem]">Completed General English and Junior Software Developer Program Earned a certificate, Gained practical experience through projects and assessments, demonstrating solid technical skills </p>
          </div>
        </article>

        <div className="border-l-1 border-[#ebebeb] text-[#ebebeb] pt-15">
          <div className="ml-8">
            <h3 className="text-[2rem] font-semibold">JUNIOR SOFTWARE DEVELOPER PROGRAM</h3>
            <p>#Generation Thailand Cohort9</p>
            <ul className="pt-2">
              <li className="flex items-start mb-2">
                <span className="flex-shrink-0 mr-2">
                  <img className="w-3 h-3 mt-1" src="/star.svg"/>
                </span>
                <span>
                  Completed an intensive 15-week course covering core software development principles
                </span>
              </li>
              <li className="flex items-start mb-2">
                <span className="flex-shrink-0 mr-2">
                  <img className="w-3 h-3 mt-1" src="/star.svg"/>
                </span>
                <span>
                  Learned front-end and back-end technologies including HTML, CSS, JavaScript and React
                </span>
              </li>
              <li className="flex items-start mb-2">
                <span className="flex-shrink-0 mr-2">
                  <img className="w-3 h-3 mt-1" src="/star.svg"/>
                </span>
                <span>
                  Built real-world projects such as responsive websites and basic full-stack applications
                </span>
              </li>
              <li className="flex items-start mb-2">
                <span className="flex-shrink-0 mr-2">
                  <img className="w-3 h-3 mt-1" src="/star.svg"/>
                </span>
                <span>
                  Strengthened problem-solving and debugging skills through hands-on assignments and coding challenges
                </span>
              </li>
              <li className="flex items-start mb-2">
                <span className="flex-shrink-0 mr-2">
                  <img className="w-3 h-3 mt-1" src="/star.svg"/>
                </span>
                <span>
                  Gained experience working in teams and presenting project outcomes
                </span>
              </li>
            </ul>
          </div>
        </div>


        <div className="border-l-1 border-[#ebebeb] text-[#ebebeb] pt-10">
          <div className="ml-8">
            <h3 className="text-[2rem] font-semibold">GENERAL ENGLISH PROGRAM  (Dubai, UAE)</h3>
            <ul className="pt-2">
              <li className="flex items-start mb-2">
                <span className="flex-shrink-0 mr-2">
                  <img className="w-3 h-3 mt-1" src="/star.svg"/>
                </span>
                <span>
                  Attended an intensive English language program focused on speaking, listening, reading, and writing skills (6 month)
                </span>
              </li>
              <li className="flex items-start mb-2">
                <span className="flex-shrink-0 mr-2">
                  <img className="w-3 h-3 mt-1" src="/star.svg"/>
                </span>
                <span>
                  Improved communication skills through interaction with international classmates and native-speaking instructors
                </span>
              </li>
              <li className="flex items-start mb-2">
                <span className="flex-shrink-0 mr-2">
                  <img className="w-3 h-3 mt-1" src="/star.svg"/>
                </span>
                <span>
                  Achieved Certificate of Completion – General English Program (Intermediate)
                </span>
              </li>
            </ul>
          </div>
        </div>

{/* Expiriencies */}
        <article className="border-l-1 border-[#ebebeb] text-[#ebebeb] pt-20">
          <div className="ml-8">
            <h2 className="text-[5rem] font-playfair font-semibold italic">Experiences</h2>
            <p className="text-[1.25rem]">I’m motivated to switch careers and have over 3 years of experience in customer service, where I developed strong communication, problem-solving, and teamwork skills. I recently completed a 15-week Junior Developer Program, gaining hands-on experience with HTML, CSS, JavaScript, and React. I really enjoy building user-friendly software and am excited to grow together with a fun, collaborative team.</p>
          </div>
        </article>


        <div className="border-l-1 border-[#ebebeb] text-[#ebebeb] pt-10">
          <div className="ml-8">
            <h3 className="text-[2rem] font-semibold">SOFTWARE TESTER (intern)</h3>
            <ul className="pt-2">
              <li className="flex items-start mb-2">
                <span className="flex-shrink-0 mr-2">
                  <img className="w-3 h-3 mt-1" src="/star.svg"/>
                </span>
                <span>
                  Fast learner with strong analytical and logical thinking
                </span>
              </li>
              <li className="flex items-start mb-2">
                <span className="flex-shrink-0 mr-2">
                  <img className="w-3 h-3 mt-1" src="/star.svg"/>
                </span>
                <span>
                  Effective team communication and collaboration
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-l-1 border-[#ebebeb] text-[#ebebeb] pt-10">
          <div className="ml-8">
            <h3 className="text-[2rem] font-semibold">BARISTA (Full Of Hapiness Cafe, Chiangmai)</h3>
            <ul className="pt-2">
              <li className="flex items-start mb-2">
                <span className="flex-shrink-0 mr-2">
                  <img className="w-3 h-3 mt-1" src="/star.svg"/>
                </span>
                <span>
                  Prepared and served a variety of coffee and tea beverages, including espresso-based drinks, pour-over, and cold brews
                </span>
              </li>
              <li className="flex items-start mb-2">
                <span className="flex-shrink-0 mr-2">
                  <img className="w-3 h-3 mt-1" src="/star.svg"/>
                </span>
                <span>
                  Managed daily operations and worked with team members to solve problems under time pressure
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-l-1 border-[#ebebeb] text-[#ebebeb] pt-10">
          <div className="ml-8">
            <h3 className="text-[2rem] font-semibold">BARTENDER (Thachang, Chiangmai) </h3>
            <ul className="pt-2">
              <li className="flex items-start mb-2">
                <span className="flex-shrink-0 mr-2">
                  <img className="w-3 h-3 mt-1" src="/star.svg"/>
                </span>
                <span>
                  Mixed and served a wide variety of cocktails and beverages according to standard recipes and customer
                </span>
              </li>
              <li className="flex items-start mb-2">
                <span className="flex-shrink-0 mr-2">
                  <img className="w-3 h-3 mt-1" src="/star.svg"/>
                </span>
                <span>
                  Developed strong communication, multitasking, and time management skills
                </span>
              </li>
            </ul>
          </div>
        </div>

{/* toolkits */}
        <article className="text-[#ebebeb] mt-30">
          <div className="mb-30">
            <h2 className="font-playfair font-semibold italic text-[6rem] -mb-10">My Creative</h2>
            <h2 className="font-semibold text-[5rem]">Toolkits</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="w-20 h-20 mx-auto"
              src="/html5.svg"/>
            <img className="w-20 h-20 mx-auto"
              src="/css3.svg"/>
            <img className="w-20 h-20 mx-auto"
              src="/tailwind.svg"/>
            <img className="w-20 h-20 mx-auto"
              src="/javascript.svg"/>
            <img className="w-20 h-20 mx-auto"
              src="/react.svg"/>
            <img className="w-20 h-20 mx-auto"
              src="/mongodb.svg"/>
          </div>
          <div>
            <div>
              <img src="/Try-on-Shoes.gif"/>
            </div>
            <div></div>
          </div>
        </article>
      </div>
      </div>
    </div>
  )
}

export default About