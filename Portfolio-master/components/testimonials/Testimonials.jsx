import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./testimonial.css";
import { Data } from "./Data";

const variants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 80 : -80,
    scale: 0.98,
    filter: "blur(4px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
    scale: 0.98,
    filter: "blur(4px)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  }),
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % Data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % Data.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + Data.length) % Data.length);
  };

  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section__title">What People Say</h2>
      <span className="section__subtitle">Testimonials</span>

      <div className="testimonial__container">
        {/* Prev Button */}
        <button
          className="carousel__button carousel__button--prev"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Content */}
        <div className="testimonial__content-wrapper">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="testimonial__card"
            >
              <div className="testimonial__flex">
                <img
                  src={Data[index].image}
                  alt={Data[index].title}
                  className="testimonial__img"
                />

                <div className="testimonial__text-content">
                  <h3 className="testimonial__name">
                    {Data[index].title}
                  </h3>
                  <p className="testimonial__description">
                    {Data[index].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <button
          className="carousel__button carousel__button--next"
          onClick={next}
          aria-label="Next testimonial"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
