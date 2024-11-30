import React from "react";
const skills = [
  {
    date: "October 2023",
    org: "Catchy Ideaz",
    courseOrposition: "Front-End Developer",
  },
  { date: "June 2024", org: "MGKVP University", courseOrposition: "BCA" },
  {
    date: "March 2018",
    org: "Shree Agrasen Kanya Inter College",
    courseOrposition: "12th",
  },
  {
    date: "April 2016",
    org: " Shree Agrasen Kanya Inter College",
    courseOrposition: "10th",
  },
];
const Resume = () => {
  return (
    <section className="ftco-section ftco-no-pb" id="resume">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div
            className="col-md-10 heading-section text-center "
            data-aos="fade-down"
          >
            <h1 className="big big-2">Resume</h1>
            <h2 className="mb-4">Resume</h2>
            <p>
              Experienced web developer proficient in front-end and back-end
              technologies, focused on creating dynamic and responsive websites.
            </p>
          </div>
        </div>
        <div className="row">
          {skills.map((item, i) => {
            return (
              <div className="col-md-6" key={i}>
                <div className="resume-wrap " data-aos="fade-up">
                  <span className="date">{item.date}</span>
                  <h2>{item.courseOrposition}</h2>
                  <span className="position">{item.org}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center ">
            <p>
              <a
                href="/GhausiyaKhan-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                download={true}
                className="btn btn-primary py-4 px-5"
              >
                Download CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
