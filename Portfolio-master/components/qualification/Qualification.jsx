import React from "react";
import { motion } from "framer-motion";
import "./qualification.css";

const Qualification = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const dataVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">My Qualification 🎓</h2>
      <span className="section__subtitle">My Academic Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <motion.div
            className="qualification__content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* ===== Education 1 ===== */}
            <motion.div className="qualification__data" variants={dataVariants}>
              {/* Left */}
              <div>
                <h3 className="qualification__title">
                  B.Tech in CSE (AI & ML)
                </h3>
                <span className="qualification__subtitle">
                  Brainware University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2026
                </div>
              </div>

              {/* Middle (dot only) */}
              <div className="qualification__middle">
                <span className="qualification__round"></span>
              </div>

              {/* Right (empty for first row) */}
              <div></div>
            </motion.div>

            {/* ===== Education 2 ===== */}
            <motion.div className="qualification__data" variants={dataVariants}>
              {/* Left empty */}
              <div></div>

              {/* Middle */}
              <div className="qualification__middle">
                <span className="qualification__round"></span>
              </div>

              {/* Right */}
              <div>
                <h3 className="qualification__title">
                  Higher Secondary (PCM)
                </h3>
                <span className="qualification__subtitle">
                  Sodepur High School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2022
                </div>
              </div>
            </motion.div>

            {/* ===== Education 3 ===== */}
            <motion.div className="qualification__data" variants={dataVariants}>
              {/* Left */}
              <div>
                <h3 className="qualification__title">
                  Madhyamik (Class 10)
                </h3>
                <span className="qualification__subtitle">
                  Sodepur High School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
              </div>

              {/* Middle */}
              <div className="qualification__middle">
                <span className="qualification__round"></span>
              </div>

              {/* Right empty */}
              <div></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
