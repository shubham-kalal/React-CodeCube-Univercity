import React from "react";
import bannerimg from "../assets/images/banner bg image.avif";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <div
        className=" w-full h-screen bg-cover bg-center "
        style={{
          backgroundImage: `linear-gradient(to right,#090520b3, #0a071db3), url(${bannerimg})`,
        }}
      >
         <Navbar />
        <div className="container text-white w-full text-center max-w-3xl flex flex-col justify-center items-center h-screen ">
         

            <h1 className="text-6xl leading-snug">We Ensure better education for a better future</h1>
            <p className="text-xl leading-normal mt-3 mb-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quo
              architecto dicta atque nobis aut dignissimos, necessitatibus eum
              minus aliquam ex ipsum quos enim nulla dolorem eligendi?
              
            </p>
            <Button style={{display:'flex' , alignItems:'center', gap:"10px",justifyContent:"center", fontSize:'18px' ,}}>


              Explore more
              <FaArrowRightLong style={{fontSize:'20px'}} />
           
            </Button>
          </div>
        </div>
      </div>

  );
};

export default Banner;
