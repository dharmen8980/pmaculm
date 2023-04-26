import React from "react";
import LoginNavbar from "@/components/LoginNavbar";

const Home = () => {
  return (
    <div className="overflow-y">
      <div>
        <LoginNavbar />
      </div>
      <div className="mt-20 relative w-full lg:h-[350px] sm:h-[250px]">
        <img
          src="/signup.jpg"
          alt="Background image"
          width={600}
          height={600}
          className='w-full lg:h-full sm:h-full'
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <h2 className="text-white sm:text-xl md:text-xl lg:text-3xl font-bold shadow-3xl">
            <p>University of Louisiana at Monroe</p>
            <p>Pre-Medical Advisory Committee</p>         
          </h2>
        </div>
      </div>
      <hr className="border-t-4 border-secondary w-full mx-auto my-1" />
      <div className="flex justify-center items-center gap-4 flex-wrap lg:flex-nowrap">
        <div className="w-full lg:h-[495px] sm:h-[200px] my-2 bg-gradient-to-b from-gray-400 to-white rounded-md hover:shadow-3xl shadow-lg overflow-scroll">
          <p className="text-white text-shadow-white sm:text-xl md:text-xl lg:text-3xl font-bold mx-3 mt-2 shadow-3xl ">
            Committee Purpose: 
          </p>
          <hr className="border-t-4 border-primary w-full mx-auto mt-2 my-1" />
          <p className="mx-2 text-gray-700 justify-center font-semibold">
            Faculty members from across ULM&apos;s campus comprise the Pre-Medical Advisory Committee.
            The faculty members work with pre-medical students during their junior and senior year 
            at ULM to prepare for the Medical School application process. Students from multiple 
            disciplines can take advantage of the committee. Any student applying to Medical School, 
            Dental School, Physician Assistant School, Physical Therapy, Occupational Therapy, 
            Optometry School, or Veterinary School can utilize the committee.
          </p>
        </div>
        <div className="w-full lg:h-[495px] sm:h-[200px] my-2 bg-gradient-to-b from-gray-400 to-white rounded-md hover:shadow-3xl shadow-lg overflow-scroll">
          <p className="text-white text-shadow-white sm:text-xl md:text-xl lg:text-3xl font-bold mx-3 mt-2 shadow-3xl ">
            How to Apply:
          </p>
          <hr className="border-t-4 border-primary w-full mx-auto mt-2 my-1" />

          <p className="mx-2 text-gray-700 justify-center font-semibold">
            The committee is available to interview students during their application process.
            Each student that wishes to be interviewed by the committee must fill out a set of 
            forms available on the website and then turn those into Dr. Wiedemeier, CNSB 326, 
            to set up an interview. The faculty members asked to fill out the faculty evaluations
            for the committee should not be faculty who intend to send an individual letter for 
            the student&apos;s application. The faculty opinions of the student are reflected in the committee letter.
          </p>

        </div>
        <div className="w-full lg:h-[495px] md:h-[400px]sm:h-[200px] my-2 bg-gradient-to-b from-gray-400 to-white rounded-md hover:shadow-3xl shadow-lg overflow-scroll">
            <p className="text-white text-shadow-white sm:text-xl md:text-xl lg:text-3xl font-bold mx-3 mt-2 shadow-3xl ">
              When to Apply:
            </p>
            <hr className="border-t-4 border-primary w-full mx-auto mt-2 my-1" />
            <p className="mx-2 text-gray-700 justify-center font-semibold">
              Students that are applying early decision to medical school, dental school or physician assistant
              schools should interview in the Spring semester. Regular admission candidates for medical school 
              should interview in the Fall semester.
              To be interviewed in the Fall semester of any academic year, completed packets
              must be received by Dr. Wiedemeier between the beginning of school and <b className="text-black font-semibold">October 1</b>. 
              The earlier packets are received, the earlier interviews are scheduled.
              In order to be interviewed in the Spring semester of any academic year, completed 
              packets must be received between <b className="text-black font-semibold">January 15</b> and <b className="text-black font-semibold">February 15</b>. Interviews will not be 
              available if those deadlines are missed.
            </p>       
        </div>
        <div className="w-full lg:h-[495px] sm:h-[200px] my-2 md:my-7 bg-gradient-to-b from-gray-400 to-white rounded-md hover:shadow-3xl shadow-lg overflow-scroll">
           <p className="text-white text-shadow-white sm:text-xl md:text-xl lg:text-3xl font-bold mx-3 mt-2 shadow-3xl ">
            Interview: 
            </p>
            <hr className="border-t-4 border-primary w-full mx-auto mt-2 my-1" />
            <p className="mx-2 text-gray-700 font-semibold justify-center">
              Each interview will last one hour. At the conclusion of the interview, 
              the committee will meet with each candidate. A formal letter of evaluation 
              will be written and can be used in support of each student&apos;s application. 
              Many medical schools prefer committee letters of evaluation. It is the 
              student&apos;s responsibility to determine if committee letters are preferred.
            </p> 
        </div>
      </div>
      <hr className="border-t-4 border-gray-400 w-full mx-auto mt-12"/>
      <div className="mt-4 mx-2 mb-4">
        <b className="text-grey-800 text-xl font-semibold">ULM PMAC Members 2022-2023</b>
        <p className="text-grey-400 font-regular"> 
          Dr. Burton Ashworth, Dr. Kristi Davis, Dr. El-Giar,  Mr. Joshua Gann, Dr. Ron Hill, Dr. Siva Murru, Dr. Matt Overturf,   Ms. Kristin Chandler,  Dr. Allison Wiedemeier. 
        </p>
      </div>
    </div>
  );
};

export default Home;