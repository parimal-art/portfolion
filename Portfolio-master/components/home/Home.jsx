import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  const parallaxRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePosition({ x, y });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="home section" id="home">
      {/* Parallax Background */}
      <div className="parallax-container">
        <div
          className="parallax-layer layer-1"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        ></div>

        <div
          className="parallax-layer layer-2"
          style={{
            transform: `translate(${mousePosition.x * 1.5}px, ${
              mousePosition.y * 1.5
            }px)`
          }}
        ></div>

        <div
          className="parallax-layer layer-3"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${
              mousePosition.y * 2
            }px)`
          }}
        ></div>

        <div className="parallax-layer layer-4"></div>
      </div>

      {/* Main Content */}
      <div className="home__container container grid" ref={parallaxRef}>
        <div className="home__content grid">
          <Social />

          <div className="home__img-wrapper">
            <div className="home__img"></div>
            <div className="home__img-glow"></div>
          </div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
