import React from 'react'
import Title from '../components/Title'
import gallery_1 from '../assets/gallery1.jpg'
import gallery_5 from '../assets/gallery5.jpg'
import gallery_3 from '../assets/gallery3.jpg'
import gallery_4 from '../assets/gallery4.jpg'
import Button from "../components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
const Campus = () => {
  return (
    <div className='container my-20 text-center w-[90%] '>
         <Title subTitle='Gallery' Title='Campus Photos'/>
         <div className="flex items-center justify-between mb-20 mt-20 ">
            <img src={gallery_1} alt="" className='w-[23%]  rounded-xl '/>
            <img src={gallery_5} alt="" className='w-[23%] rounded-xl '/>
            <img src={gallery_3} alt="" className='w-[23%] rounded-xl '/>
            <img src={gallery_4} alt="" className='w-[23%] rounded-xl '/>
         </div>
         <div className="flex flex-col justify-center items-center ">

         <Button  style={{display:'flex' , alignItems:'center', gap:"10px",justifyContent:"center", fontSize:'18px', color:'white', background:'rgb(33, 46, 160)'}}>
See more here
<FaArrowRightLong style={{fontSize:'20px',}} />
         </Button>
         </div>
    </div>
  )
}

export default Campus