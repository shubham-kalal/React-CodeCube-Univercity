import React from "react";
import Title from "../components/Title";
import TestimonialProps from "../DataProps/Testimonials/TestimonialProps";
import { TestimonialsData } from "../DataProps/Testimonials/TestimonialsData";
const Testomonial = () => {
  return (
    <div className="">
      <Title subTitle="Testimonials" Title="What Students say" />
      <div className="">
        <TestimonialProps propsData={TestimonialsData} />
      </div>
    </div>
  );
};

export default Testomonial;
