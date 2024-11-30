import React from "react";
import AboutFigure from "../assets/img/about.jpg";

const About = () => {
  return (
    <section className="ftco-about img ftco-section ftco-no-pb" id="about">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay"></div>
              <div
                className="img d-flex align-self-stretch align-items-center"
                style={{ backgroundImage: `url(${AboutFigure})` }}
              ></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section " data-aos="fade-left">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About Me</h2>
                <p>
                  I am a passionate and detail-oriented web developer with a
                  strong foundation in both front-end and back-end development.
                </p>
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex">
                    <span>Name:</span> <span>Ghausiya Khan</span>
                  </li>
                  <li className="d-flex">
                    <span>Date of birth:</span> <span>April 01, 1996</span>
                  </li>
                  <li className="d-flex">
                    <span>Address:</span> <span>Varanasi, India</span>
                  </li>
                  <li className="d-flex">
                    <span>Zip code:</span> <span>221001</span>
                  </li>
                  <li className="d-flex">
                    <span>Email:</span> <span>ghausiyakhan415@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="counter-wrap  d-flex mt-md-3">
              <div className="text">
                <p className="mb-4">
                  <span className="number" data-number="120">
                    4
                  </span>
                  <span> Project complete</span>
                </p>
                <p>
                  <a
                    href="/GhausiyaKhan-Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download={true}
                    className="btn btn-primary py-3 px-3"
                  >
                    Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
