import React from "react";
import "./gallery.css";
import HeaderImage from "../../images/header_bg_3.jpg";
import Header from "../../components/Header";
const Gallery = () => {
  const images = [];
  for (let i = 1; i <= 15; i++) {
    images.push(require("../../images/gallery" + i + ".jpg"));
  }
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
        viverra nibh, in malesuada orci. Aliquam in viverra metus, semper
        imperdiet justo.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
