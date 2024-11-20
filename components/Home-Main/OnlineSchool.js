import React, { useEffect } from "react";
import Image from "next/image";
import sal from "sal.js";
import { motion } from "framer-motion";
import Typed from "typed.js";
import Link from "next/link";
import CategoryThree from "../Category/CategoryThree";
import rightShape from "../../public/images/banner/right-shape.png";
import topShape from "../../public/images/banner/top-shape.png";
import OnlineSchoolForm from "./OnlineSchoolForm";
import CategoryOne from "../Category/CategoryOne";
import BrandThree from "../Brand/Brand-Three";
import Industry from "../industry/industry";

const OnlineSchool = () => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  const marqueeVariants = {
    animate: {
      x: [0, -1036],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 6,
          ease: "linear",
        },
      },
    },
  };

  useEffect(() => {
    const typeitInstance = new Typed(".is-visible", {
      strings: [
        "Your Brand in Spotlight",
        "Websites that WOW",
        "Sales that Scale",
        "Creatives that Speak",
        "Sites Seen at the Top",
        "Leads that Convert",
      ],
      typeSpeed: 80,
      backSpeed: 60,
      startDelay: 200,
      loop: Infinity,
      showCursor: false,
    });

    return () => {
      typeitInstance.destroy();
    };
  }, []);

  return (
    <>
      <div
        className="rbt-banner-area rbt-banner-3 header-transperent-spacer"
        style={{ paddingTop: 80 }}
        id="Banner"
      >
        <div className="wrapper">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-lg-7 "
                style={{ display: "flex", alignItems: "center" }}
              >
                <div className="banner-content ">
                  <div className="inner">
                    {/* <div className="section-title text-start">
                      <span className="subtitle bg-pink-opacity">GET</span>
                    </div> */}

                    <div className="section-title text-start">
                      <h5 className="title" style={{fontSize:"26px"}}>Get</h5>
                    </div>

                    <h1 className="title">
                      <span className="header-caption ms-2">
                        <span className="cd-headline clip is-full-width">
                          <span>
                            <b className="is-visible theme-gradient cd-words-wrapper banner-animation-text"></b>
                          </span>
                        </span>
                      </span>
                    </h1>

                    <p className="description">
                      Repute is a results-driven Digital Marketing Agency
                      committed to driving growth and sales for your business.
                      With our tailored strategies, we maximize your brand's
                      visibility and expand your
                      <span style={{ color: "#b80101" }}> ROI by 3x</span> .
                    </p>
                    {/* <div className="rating mb--20">
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a className="px-1" href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a className="px-1" href="#">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-star"></i>
                      </a>
                    </div> */}
                    {/* <div className="rbt-like-total">
                      <div className="profile-share">
                        <a
                          href="#"
                          className="avatar"
                          data-tooltip="RainbowIT"
                          tabIndex="0"
                        >
                          <Image
                            src={client1}
                            width={55}
                            height={55}
                            alt="education"
                          />
                        </a>
                        <a
                          href="#"
                          className="avatar"
                          data-tooltip="Mark"
                          tabIndex="0"
                        >
                          <Image
                            src={client2}
                            width={55}
                            height={55}
                            alt="education"
                          />
                        </a>
                        <a
                          href="#"
                          className="avatar"
                          data-tooltip="Jordan"
                          tabIndex="0"
                        >
                          <Image
                            src={client3}
                            width={55}
                            height={55}
                            alt="education"
                          />
                        </a>
                        <div className="more-author-text">
                          <h5 className="total-join-students">
                            Join Over 3000+ Students
                          </h5>
                          <p className="subtitle">
                            Have a new ideas every week.
                          </p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mt-0">
                <OnlineSchoolForm />
              </div>
            </div>
          </div>
        </div>
        <div className="shape-wrapper">
          <div className="left-shape">
            <Image
              src={rightShape}
              width={1205}
              height={808}
              alt="Banner Images"
            />
          </div>
          <div className="top-shape">
            <Image
              src={topShape}
              width={1163}
              height={156}
              alt="Banner Images"
            />
          </div>
          <motion.div
            className="track"
            variants={marqueeVariants}
            animate="animate"
          >
            <div className="marque-images edumarque"></div>
          </motion.div>
        </div>
      </div>

      <div className="rbt-categories-area  bg-color-secondary-alt rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                {/* <span className="subtitle bg-primary-opacity">
                  Course Category
                </span> */}
                <h3
                  className="title"
                  style={{ color: "#b80101", fontWeight: "500" }}
                >
                  Strategies that Work, Results that Speak
                </h3>
              </div>
            </div>
          </div>
          <div className="row g-4 g-md-5 mt--0">
            <CategoryOne />
          </div>
          {/* <div className="row">
            <div className="col-lg-12">
              <div className="read-more-btn text-center mt--40">
                <Link
                  className="rbt-btn btn-border-gradient hover-icon-reverse radius-round btn-md"
                  href="archive"
                >
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">VIEW ALL CATEGORIES</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="rbt-brand-area bg-color-white rbt-section-gap">
        <div className="container mb--30">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                {/* <span className="subtitle bg-primary-opacity">
                  EDUCATION FOR EVERYONE
                </span> */}
                <h3
                  className="title"
                  style={{ color: "#b80101", fontWeight: "500" }}
                >
                  Trusted by the Best - Our Esteemed Clients
                </h3>
              </div>
            </div>
          </div>
        </div>
        <BrandThree />
      </div>

      {/* <div className="rbt-testimonial-area bg-color-red rbt-section-gap overflow-hidden">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    EDUCATION FOR EVERYONE
                  </span>
                  <h2
                    className="title"
                    style={{ fontWeight: "500", color: "#b80101" }}
                  >
                    Trusted by the Best <br />- Our Esteemed Clients
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TestimonialTwo />
      </div> */}

      {/* <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row mb--60 g-5 align-items-end">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title text-start">
                <span className="subtitle bg-primary-opacity">Live Course</span>
                <h2 className="title">Special live course</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="read-more-btn text-start text-md-end">
                <Link
                  className="rbt-btn btn-gradient hover-icon-reverse radius-round"
                  href="#"
                >
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">VIEW ALL COURSES</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <Card
              col="col-lg-4 col-md-6 col-sm-6 col-12"
              mt="mt--30"
              start={0}
              end={3}
              isDesc={true}
              isUser={true}
            />
          </div>
        </div>
      </div> */}

      <div className="rbt-categories-area bg-color-secondary-alt rbt-section-gap">
        <div className="container">
          <div className="row mb--0 g-5 align-items-center">
            <div className="col-lg-9 col-md-12 col-12">
              <div className="section-title text-lg-start text-center">
                {/* <span className="subtitle bg-primary-opacity">Our Events</span> */}
                <h3
                  className="title mb--20"
                  style={{ color: "#b80101", fontWeight: "500" }}
                >
                  Your Trusted Partner in Digital Success
                </h3>
                <p>
                  With 19+ years of experience in uplifting brands, Repute will
                  go above and beyond to make your brand achieve success online.
                  Our expertise, along with our perfect-pitched strategies will
                  help you grow in the digital world. Let's make your brand
                  stand out.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12">
              <div className="read-more-btn text-center text-lg-end">
                <Link
                  className="rbt-btn btn-gradient hover-icon-reverse radius-round"
                  href="#Banner"
                >
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">GET IN TOUCH</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-4 g-md-5 mt--20">
            <CategoryThree />
          </div>
        </div>
      </div>

      <div className="rbt-team-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row mb--0">
            <div className="col-lg-12">
              <div className="section-title text-center">
                {/* <span className="subtitle bg-pink-opacity">
                    Histudy Feature
                  </span> */}
                <h3
                  className="title"
                  style={{ color: "#b80101", fontWeight: "500" }}
                >
                  Building Success Across Industries
                </h3>
              </div>
            </div>
          </div>
          <div className="row g-4 g-md-5 mt--0">
            <Industry />
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineSchool;
