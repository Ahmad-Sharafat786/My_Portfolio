import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Layout from "../src/layouts/Layout";

const WorkFourthISotope = dynamic(
  () => import("../src/components/WorkFourthISotope"),
  {
    ssr: false,
  }
);
const WorkThird = () => {
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
              <span>Innotech</span>
            </h1>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>Healthcare, ERP</span>
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
                        Next JS, React Bootstrap, Material UI, Styled
                        Components, Material React Table, Tailwind CSS, RTK
                        toolkit, PropTypes, Reusable Components
                      </span>
                    </strong>
                  </div>
                  <div className="details-label">
                    <span>Categories:</span>
                    <strong>
                      <span> Hospital Managment System </span>
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
                  "url(https://img.freepik.com/free-vector/medical-infographic-with-photo_23-2148368620.jpg)",
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
                  The Health Management System is a comprehensive web
                  application developed using React.js, designed to streamline
                  and enhance the healthcare management process. This system
                  aims to facilitate efficient patient care by providing
                  healthcare providers with a suite of digital tools to manage
                  patient information, document clinical notes, conduct virtual
                  consultations, and communicate in real-time.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                  <strong>Frontend:</strong>
                  <ol>
                    <li>
                      {" "}
                      React.js for building a dynamic and responsive user
                      interface.
                    </li>
                    <li>Material-UI</li>
                    <li>React Bootstrap and Styled components.</li>
                    <li>
                      React & Material Icons for incorporating various icons.
                    </li>
                    <li>PropTypes for type-checking of component props.</li>
                    <li>Redux toolkit for managing application state.</li>
                    <li>React Hook form for validation</li>
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
          <WorkFourthISotope />
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
                  The Health Management System exemplifies the transformative
                  potential of modern web technologies in the healthcare sector.
                  By integrating features like patient information management,
                  SOAP notes, virtual consultations, and real-time chat, this
                  system significantly enhances the efficiency and quality of
                  patient care. Developed with React.js, Material-UI, Redux,
                  Node.js, Express.js, MongoDB, and WebRTC, the application is
                  robust, responsive, and scalable.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="post-content">
                <p>
                  This project demonstrates how digital solutions can streamline
                  clinical workflows, improve patient outcomes, and facilitate
                  effective communication between healthcare providers and
                  patients. The Health Management System not only simplifies the
                  administrative burden on healthcare professionals but also
                  ensures that patients receive timely and personalized care,
                  setting a new standard for digital health management.
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
                  <span>Medical AI</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default WorkThird;
