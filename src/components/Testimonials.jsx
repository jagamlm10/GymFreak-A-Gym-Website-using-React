import React from "react";
import { useState } from "react";
import SectionHead from "./SectionHead";
import Card from "../UI/Card";
import { testimonials } from "../data";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const Testimonials = () => {
  const [index, setindex] = useState(0);
  const { name, job, avatar, quote } = testimonials[index];
  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className={"testimonials__head"}
        />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h4>{name}</h4>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button
            className="testimonials__btn"
            onClick={() => setindex((prev) => (prev + 1) % testimonials.length)}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="testimonials__btn"
            onClick={() =>
              setindex(
                (prev) => (prev - 1 + testimonials.length) % testimonials.length
              )
            }
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
