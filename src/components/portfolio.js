import React from "react";
import YoutubeClone from "../assets/project/youtube-clone.jpg";
import GraphDashboard from "../assets/project/graph-dashboard.jpg";
import Testimonial from "../assets/project/testimonials.jpg";
import TKGroup from "../assets/project/tk-groups.jpg";

const Portfolio = () => {
  const portfolioItems = [
    {
      figure: YoutubeClone,
      name: "Youtube Clone",
      info: "SPA / MERN Stack",
      link: "https://beamish-narwhal-97a34d.netlify.app/",
      UIWidth: "col-md-6",
    },
    {
      figure: GraphDashboard,
      name: "Graph Dashboard",
      info: "SPA / MERN Stack",
      link: "https://frabjous-moonbeam-c4a490.netlify.app/",
      UIWidth: "col-md-6",
    },
    {
      figure: Testimonial,
      name: "Testimonials UI",
      info: "HTML Component / JS",
      link: "https://silly-kataifi-0cd7f7.netlify.app/",
      UIWidth: "col-md-4",
    },
    {
      figure: TKGroup,
      name: "TK Groups",
      info: "Wordpress",
      link: "https://tkgroups.in/",
      UIWidth: "col-md-8",
    },
  ];
  return (
    <section className="ftco-section ftco-project" id="portfolio">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ">
            <h1 className="big big-2">Portfolio</h1>
            <h2 className="mb-4">Our Portfolio</h2>
            <p>
              Projects that showcase my ability to build dynamic, responsive
              websites and applications, utilizing modern web technologies
            </p>
          </div>
        </div>
        <div className="row">
          {portfolioItems.map((item, i) => {
            return (
              <div className={item.UIWidth} key={i} data-aos="fade-down">
                <div
                  className="project img  d-flex justify-content-center align-items-center"
                  style={{
                    backgroundImage: `url(${item.figure}) `,
                    backgroundPosition: "top",
                  }}
                >
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3>
                      <a href={item.link} target="_blank">
                        {item.name}
                      </a>
                    </h3>
                    <span>{item.info}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
