import React from "react";
import HireMeBg from "../assets/img/young-girl-with-headphones.jpg";
const HireMe = () => {
  return (
    <section
      className="ftco-section ftco-hireme img margin-top"
      style={{ backgroundImage: `url(${HireMeBg})` }}
    >
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-8 text" data-aos="fade-right">
            <h2>
              I'm <span>Available</span> for freelancing
            </h2>
            <p>
              I'm currently available for freelance opportunities! If you're
              looking for a dedicated web developer to bring your ideas to life,
              feel free to reach out.
            </p>
            <p className="mb-0">
              <a href="#contact" className="btn btn-primary py-3 px-5">
                Hire me
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
