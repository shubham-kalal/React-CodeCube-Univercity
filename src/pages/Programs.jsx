import React from "react";
import program_1 from "../assets/program1.jpg";
import program_2 from "../assets/program2.jpg";
import program_4 from "../assets/program4.jpg";
import { BiSolidBookContent } from "react-icons/bi";
import { RiContactsBookUploadLine } from "react-icons/ri";
import { SiAdobeacrobatreader } from "react-icons/si";
import Title from "../components/Title";

const Programs = () => {
  return (
    <div id="program">
       <Title subTitle='OUR PROGRAM' Title='What We Offer'/>
       
      <div className="container my-20 flex items-center justify-around px-24">
       
        <div className=" relative group ">
          <img
            src={program_1}
            alt=""
            className=" rounded-xl  basis-1/3 w-[366px] h-[459px]"
          />
          <div className="rounded-xl w-[366px] h-[459px] absolute top-0 left-0 bottom-0 right-0 bg-green-500/30 text-white flex flex-col justify-center gap-3 items-center opacity-0 group-hover:bg-blue-950/70 group-hover:opacity-80 transition-transform">
            <BiSolidBookContent style={{ fontSize: "60px" }} className="transform translate-y-20 group-hover:translate-y-0 duration-500 transition-transform" />
            <p  className="text-xl transform translate-y-20 group-hover:translate-y-0 duration-500 transition-transform delay-100">Graduation degree</p>
          </div>
        </div>
        <div className="w-[366px] h-[459px] relative group ">
          <img src={program_2} alt="" className=" rounded-xl  w-[366px] h-[459px] " />
          <div className="rounded-xl w-[366px] h-[459px] absolute top-0 left-0 bottom-0 right-0 bg-green-500/30 text-white flex flex-col justify-center gap-3 items-center opacity-0 group-hover:bg-blue-950/70 group-hover:opacity-80">
            <RiContactsBookUploadLine style={{ fontSize: "60px" }}  className="transform translate-y-20 group-hover:translate-y-0 duration-500 transition-transform"/>
            <p className="text-xl transform translate-y-20 group-hover:translate-y-0 duration-500 transition-transform delay-100">Master degree</p>
          </div>
        </div>
        <div className="w-[366px] h-[459px] relative group ">
          <img src={program_4} alt="" className=" rounded-xl  basis-1/3 w-[366px] h-[459px]" />
          <div className="rounded-xl w-[366px] h-[459px] absolute top-0 left-0 bottom-0 right-0 bg-green-500/30 text-white flex flex-col justify-center gap-3 items-center opacity-0 group-hover:bg-blue-950/70 group-hover:opacity-80 ">
            <SiAdobeacrobatreader style={{ fontSize: "60px" }}  className="transform translate-y-20 group-hover:translate-y-0 duration-500 transition-transform"/>
            <p className="text-xl transform translate-y-20 group-hover:translate-y-0 duration-500 transition-transform delay-100">Post graduation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
