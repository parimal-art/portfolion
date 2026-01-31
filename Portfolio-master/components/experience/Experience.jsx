/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./experience.css";

const Experience = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="section experience section" id="experience">
      <h2 className="section__title">Experience 💼</h2>
      <span className="section__subtitle">My professional journey</span>

      <div className="exp__container container grid">

        {/* ===== Blockchain Intern ===== */}
        <div className="exp__content">
          <div>
            <i className="uil uil-bitcoin-circle exp__icon"></i>
            <h3 className="exp__title">
              Blockchain <br /> Development <br /> Intern
            </h3>
          </div>

          <div>
            <span className="exp__comp">BlockseBlock (Remote)</span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(1)}>
            View More <i className="uil uil-arrow-right exp__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
            <div className="exp__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

              <h3 className="exp__modal-title">
                Blockchain Development Intern <br /> June 2025 – July 2025
              </h3>

              <p className="exp__modal-description">
                Worked as a Blockchain Development Intern at BlockseBlock, focusing on decentralized applications and Web3 technologies.
              </p>

              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Learned Rust programming and Internet Computer Protocol (ICP).
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Built and deployed a decentralized social media application using Rust and React.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Worked with smart contract canisters and Web3 tools on ICP platform.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Gained hands-on experience with dApps and blockchain-based data management.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== Intel Industrial Training ===== */}
        <div className="exp__content">
          <div>
            <i className="uil uil-processor exp__icon"></i>
            <h3 className="exp__title">
              Intel Industrial <br /> Training <br /> Trainee
            </h3>
          </div>

          <div>
            <span className="exp__comp">Intel (Online)</span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(2)}>
            View More <i className="uil uil-arrow-right exp__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
            <div className="exp__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

              <h3 className="exp__modal-title">
                Intel Industrial Training <br /> Feb 2025 – Apr 2025
              </h3>

              <p className="exp__modal-description">
                Completed Intel Industrial Training program focused on computer vision and AI-based applications.
              </p>

              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Developed a virtual sunglasses try-on application using OpenCV and OpenVINO.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Achieved 95% real-time face detection accuracy.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Worked on real-time image processing and model optimization.
                  </p>
                </li>

                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Gained practical experience in AI and computer vision technologies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
