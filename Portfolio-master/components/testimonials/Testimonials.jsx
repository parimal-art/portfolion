import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./testimonial.css";
import { Data } from "./Data";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % Data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % Data.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + Data.length) % Data.length);
  };

  // smoother variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="testimonial container section" id="testimonials">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What People Say
      </motion.h2>

      <motion.span
        className="section__subtitle"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Testimonial
      </motion.span>

      <div className="testimonial__container">
        <button
          className="carousel__button carousel__button--prev"
          onClick={prevTestimonial}
        >
          &lt;
        </button>

        <AnimatePresence mode="wait" custom={direction}>
          <div className="testimonial__content-wrapper">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="testimonial__card"
            >
              <div className="testimonial__flex">
                <motion.div
                  className="testimonial__image-container"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={Data[currentIndex].image}
                    alt={Data[currentIndex].title}
                    className="testimonial__img"
                  />
                </motion.div>

                <motion.div
                  className="testimonial__text-content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h3 className="testimonial__name">
                    {Data[currentIndex].title}
                  </h3>
                  <p className="testimonial__description">
                    {Data[currentIndex].description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>

        <button
          className="carousel__button carousel__button--next"
          onClick={nextTestimonial}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
