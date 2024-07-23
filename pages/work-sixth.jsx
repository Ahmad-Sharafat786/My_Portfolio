import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Layout from "../src/layouts/Layout";

const WorkSixISotope = dynamic(
  () => import("../src/components/WorkSixISotope"),
  {
    ssr: false,
  }
);
const WorkSixth = () => {
  const [videoToggle, setVideoToggle] = useState(false);
  return (
    <Layout pageClassName={"portfolio-template"}>
      {/* Section Started Heading */}
      <section className="section section-inner started-heading">
        {/* Heading */}
        <div className="container">
          <div className="m-titles align-left">
            <h1
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Covis</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Task Management, ERP</span>
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="v-line v-line-right v-line-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <div className="m-details">
                  <div className="details-label">
                    <span>Year:</span>
                    <strong>
                      <span>2023</span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Technology:</span>
                    <strong>
                      <span>
                        React JS, React Bootstrap, Material UI, Styled
                        Components, Material React Table, Tailwind CSS, RTK
                        toolkit, PropTypes, Reusable Components, Socket.IO,
                        Third Party libraries
                      </span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Categories:</span>
                    <strong>
                      <span> Task Managment System </span>
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 align-right">
                <a
                  target="_blank"
                  href="https://shareefahospital.netlify.app/"
                  className="btn scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>Live Preview</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Image */}
      <div className="section section-inner">
        {/* Image */}
        <div className="m-image-large">
          <div className="image">
            <div
              className="img js-parallax"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/upset-disappoin…g-office-meeting-room-late-night_482257-12307.jpg)",
              }}
            />
          </div>
        </div>
      </div>
      {/* Section - Description */}
      <section className="section section-inner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="post-content">
                <h4>Description</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                  Covis is an advanced task management tool developed using
                  React.js, designed to enhance productivity and streamline
                  workflow management for individuals and teams. With a focus on
                  usability and efficiency, Covis offers a comprehensive suite
                  of features tailored to meet the diverse needs of modern
                  professionals.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                  <strong>Key Features</strong>
                  <ol>
                    <li> Intuitive Task Management</li>
                    <li>Collaboration and Teamwork</li>
                    <li>Advanced Scheduling and Reminders</li>
                    <li>Progress Tracking</li>
                    <li>Customization and Flexibility</li>
                    <li>Analytics and Reporting.</li>
                    <li>Secure and Reliable</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Gallery */}
      <div className="section section-inner">
        <div className="container">
          {/* Section Gallery */}
          <WorkSixISotope />
        </div>
      </div>
      {/* Section - Description */}
      <section className="section section-inner">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="post-content">
                <h4>Conclusion</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                  Covis Task Management Tool aims to empower users with
                  efficient task management capabilities, fostering
                  collaboration and enhancing overall productivity. Whether for
                  individual use or team projects, Covis provides the tools
                  necessary to stay organized and achieve goals effectively.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                  Covis Task Management Tool stands out as a versatile and
                  powerful solution for task management, leveraging the
                  capabilities of React.js to deliver a seamless user
                  experience. With features tailored for both individual users
                  and collaborative teams, Covis enhances productivity by
                  streamlining task creation, organization, and progress
                  tracking. The tool's intuitive interface, advanced scheduling,
                  robust security, and integration capabilities make it a
                  reliable choice for managing workflows efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Video */}
      <div className="section section-inner m-video-large">
        <div className={`video ${videoToggle ? "active" : ""}`}>
          <div
            className="img js-parallax"
            style={{ backgroundImage: "url(assets/images/blog9.jpg)" }}
          />
          <iframe
            className="js-video-iframe"
            src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=0"
          />
          <div className="play" onClick={() => setVideoToggle(true)} />
        </div>
      </div>
      {/* Section - Navigation */}
      <div className="section section-inner m-page-navigation">
        <div className="container">
          <div className="h-titles h-navs">
            <Link legacyBehavior href="/work-single">
              <a>
                <span
                  className="nav-arrow scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <span>Next Project</span>
                </span>
                <span
                  className="h-title splitting-text-anim-2 scroll-animate"
                  data-splitting="chars"
                  data-animate="active"
                >
                  <span>Shareefa Hospital</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default WorkSixth;
