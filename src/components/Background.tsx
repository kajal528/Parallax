import React from "react";
import Testimonials from "./Testimonials";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Background = () => {
  return (
    <section className=" background-gradient max-w-[1920px] mx-auto px-2">
      <Testimonials />
      <Subscribe />
      <Footer />
    </section>
  );
};

export default Background;
