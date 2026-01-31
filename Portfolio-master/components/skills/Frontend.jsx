import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Web & Development Skills</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-html5"></i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-css3"></i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-javascript"></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-react"></i>
            <div>
              <h3 className="skills__name">React.js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-nodejs"></i>
            <div>
              <h3 className="skills__name">Node.js</h3>
              <span className="skills__level">Andvaned</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-tailwind-css"></i>
            <div>
              <h3 className="skills__name">Tailwind CSS</h3>
              <span className="skills__level">Intermidiate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxs-data"></i>
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermidiate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bxl-mongodb"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
