import React from "react";
import aboutimage from "../assets/about-image.jpg";
import { FaCirclePlay } from "react-icons/fa6";
import Title from "../components/Title";

const About = () => {
  return (
    <div className="container flex justify-between items-center my-36 mx-auto ">
      <div id="left" className="basis-[40%] relative">
        <img src={aboutimage} alt="" className="w-full rounded-xl "/>
        <FaCirclePlay className="text-6xl text-blue-600 absolute top-[45%] left-[45%] "/>
      </div>
      <div id="right" className="basis-[56%]">

      <Title  subTitle='ABOUT UNIVERCITY' Title="Nurturing Tomorrow's Leaders Today"  />
      
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto distinctio totam quasi. Nesciunt, ullam maiores culpa consequuntur expedita sint assumenda quo dolor fugiat ametducimus ois autem recnima officia deleniti eveniet excepturi, expedita a voluptas sequi ad impedit. Omnis, adipisci id quas autem eius ratione optio officia delectus nam beatae voluptatem voluptatum fuga totam ullam.</p>
        <p>Lorem ipsum dolor sit amelit. Amet corrupti aperiam earum ipsam, dolorem exercitationem modi incidunt at alias hic maiores. Saepe, quidem perspiciatis! Modi repelleniam soluta aliquam aperiam ipsam possimus culpa ab cumque ipsaquas voluptatem officiis sudantium quibusdam aliquid illum ipsa quo quis, et quos vel maiores fugit earum. Praesentium.</p>
        <p>Lorem ipsum dolor sit, amet consectetelit. Laudantium culpa a officia corrupti earum ut? Consequuntur, quibusdam. A quos dolorum sed nemo quia tempora dolorem, id blaelectus ab totam et earum sint eaqupsum optio eum sapiente.</p>
      </div>
    </div>
  );
};

export default About;
