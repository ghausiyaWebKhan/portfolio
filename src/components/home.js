import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import HeroFigure1 from "../assets/img/bg_1.png";
import HeroFigure2 from "../assets/img/bg_2.png";

const Home = () => {
  return (
    <>
      <section id="home" className="hero">
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={false}
          interval={3000}
          showStatus={false}
        >
          <div className="slider-item item">
            <div className="overlay"></div>
            <div className="container">
              <div className="row d-md-flex no-gutters slider-text align-items-center justify-content-center">
                <div
                  className="one-third js-fullheight order-md-last img col-12 col-md-4"
                  data-aos="fade-left"
                >
                  <img
                    src={HeroFigure1}
                    width={600}
                    height={600}
                    alt="Hero figure 1"
                  />
                  <div className="overlay"></div>
                </div>
                <div className="one-forth d-flex align-items-center col-12 col-md-8">
                  <div className="text text-left">
                    <span className="subheading">Hello!</span>
                    <h1 className="mb-4 mt-3">
                      I'm <span>Ghausiya Khan</span>
                    </h1>
                    <h2 className="mb-4">A MERN Stack Developer</h2>
                    <p>
                      <a
                        href="#skills"
                        className="btn btn-white btn-outline-white py-3 px-4 mr-2"
                      >
                        My Skills
                      </a>
                      <a
                        href="#portfolio"
                        className="btn btn-primary py-3 px-4"
                      >
                        My Portfolio
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item item">
            <div className="overlay"></div>
            <div className="container">
              <div className="row d-flex no-gutters slider-text align-items-center justify-content-center">
                <div className="one-third js-fullheight order-md-last align-items-center img col-4">
                  <img
                    src={HeroFigure2}
                    width={600}
                    height={600}
                    alt="Hero figure 1"
                  />
                  <div className="overlay"></div>
                </div>
                <div className="one-forth d-flex align-items-center col-8">
                  <div className="text text-left">
                    <h1 className="mb-4 mt-3">I create Websites & SPA</h1>
                    <p>
                      <a
                        href="#skills"
                        className="btn btn-white btn-outline-white py-3 px-4 mr-2"
                      >
                        My Skills
                      </a>
                      <a
                        href="#portfolio"
                        className="btn btn-primary py-3 px-4"
                      >
                        My Portfolio
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </section>
    </>
  );
};

export default Home;
