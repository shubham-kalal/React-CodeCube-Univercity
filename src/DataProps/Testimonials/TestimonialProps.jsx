import React from "react";

const TestimonialProps = ({ propsData }) => {
  return (
    <div className="container flex">
      {propsData.map((testimonialMap) => {
        return (
          <div key={testimonialMap.id}>
            <h2>{testimonialMap.name}</h2>
            <h3>{testimonialMap.institite}</h3>
            <p>{testimonialMap.review}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TestimonialProps;
