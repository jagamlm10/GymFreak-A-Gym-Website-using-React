import React from "react";
import { Link } from "react-router-dom";
import { LuCrown } from "react-icons/lu";
import { AiFillCaretRight } from "react-icons/ai";
import { programs } from "../data";
import SectionHead from "./SectionHead";
import Card from "../UI/Card";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <div className="programs__head">
          <SectionHead title="Programs" icon={<LuCrown />} />
        </div>
        <div className="programs__wrapper">
          {programs.map(({ id, icon, title, info, path }) => (
            <Card className="programs__program" key={id}>
              <span>{icon}</span>
              <h4>{title}</h4>
              <small>{info}</small>
              <Link to={path} className="btn sm">
                Learn More <AiFillCaretRight />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
