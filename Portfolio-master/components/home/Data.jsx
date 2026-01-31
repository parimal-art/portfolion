import React, { useState, useEffect } from "react";

const Data = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const originalText = "Parimal Maity"; // ✅ your name
  const [displayText, setDisplayText] = useState(originalText);

  useEffect(() => {
    let interval = null;
    let iteration = 0;

    if (isAnimating) {
      interval = setInterval(() => {
        setDisplayText((prev) => {
          return prev
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              if (letter === " ") return " ";
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
        });

        iteration += 1 / 3;

        if (iteration >= originalText.length) {
          clearInterval(interval);
          setIsAnimating(false);
          setDisplayText(originalText);
        }
      }, 30);
    }

    return () => clearInterval(interval);
  }, [isAnimating, originalText]);

  const handleHover = () => {
    setIsAnimating(true);
  };

  return (
    <div className="home__data">
      <h1
        className="home__title font-bold"
        onMouseEnter={handleHover}
        style={{
          fontFamily: "monospace",
          cursor: "pointer",
          transition: "all 0.25s",
          textShadow: isAnimating ? "0 0 8px rgba(0,0,0,0.3)" : "none",
        }}
      >
        {displayText}
      </h1>

      {/* Subtitle */}
      <h3 className="home__subtitle">Aspiring Full Stack Developer</h3>

      {/* Description */}
      <p className="home__description">
        I'm a Computer Science student passionate about building web applications
        and learning new technologies. I enjoy solving problems and creating
        user-friendly projects.
      </p>

      {/* Button */}
      <a href="#contact" className="button button--flex">
        Contact Me
        <svg
          className="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352Z"
            fill="var(--container-color)"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default Data;
