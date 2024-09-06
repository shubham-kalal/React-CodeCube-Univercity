import React  from "react";
import Button from "./Button";
import {useState , useEffect } from 'react'


const Navbar = () => {


  
  const [sticky, setsticky] = useState(false)

  useEffect(() => {
  window.addEventListener('scroll' , ()=>{
    window.scrollY > 50? setsticky(true) : setsticky(false)
  })
  }, [])



  return (
    <div className={`fixed w-full  z-50 ${sticky ? 'dark-nav' : ''}`}>
      <nav className="container  flex justify-between items-center  py-4 px-3 text-white">
        <h1 className=" flex gap-2 items-center text-3xl">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 14 14"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m3.096.577l5.91-.003v2.303l-5.91.003a1.25 1.25 0 0 1-.742-.243l-.958-.707a.25.25 0 0 1 0-.402L2.355.82a1.25 1.25 0 0 1 .74-.244Zm8.343 2.298l-1.183.001V.573h1.187c.634.01 1.119.573 1.119 1.15c0 .578-.485 1.142-1.119 1.152zm-5.931 2.31c.335.134.62.281.867.427V14a5.47 5.47 0 0 0-1.24-.7c-.735-.294-1.795-.537-3.412-.537a.5.5 0 0 1-.5-.5V5.075a.5.5 0 0 1 .5-.5c1.72 0 2.91.259 3.785.61M8.864 13.3c-.54.217-.919.466-1.24.699V5.612c.247-.146.533-.293.868-.427c.875-.351 2.065-.61 3.785-.61a.5.5 0 0 1 .5.5v7.188a.5.5 0 0 1-.5.5c-1.617 0-2.677.243-3.413.538Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className="">CodeCube</span>
        </h1>

        <ul className="flex items-center gap-5 max-md:hidden">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="#program">Program</a>
          </li>
          <li>
            <a href=""></a>About Us
          </li>
          <li>
            <a href=""></a>Campus
          </li>
          <li>
            <a href=""></a>Testimonials
          </li>
          <Button>Contact Us</Button>
        </ul>

        <span className="md:hidden text-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 6.001h18m-18 6h18m-18 6h18"
            ></path>
          </svg>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
