import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import TeamData from "../../data/elements/team.json";
import TeamHead from "./TeamHead";
import { Industries } from "@/utils/constant.utils";

const TeamEight = ({ head }) => {
  return (
    <>
      <div className="container">
        {/* {head === undefined ? (
          <TeamHead
            title="Team (Carousel Style)."
            desc="Awesome Carousel Style."
          />
        ) : (
          ""
        )} */}

        <div className="row row--15">
          <div className="col-lg-12">
            <Swiper
              className="swiper team-slide-activation rbt-arrow-between rbt-dot-bottom-center"
              modules={[Navigation, Pagination]}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                el: ".rbt-swiper-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".rbt-arrow-left",
                prevEl: ".rbt-arrow-right",
              }}
              breakpoints={{
                575: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 4,
                },
              }}
            >
              {Industries?.map((ind)  => (
                  <SwiperSlide className="swiper-wrapper" key={ind.id}>
                      <div className="swiper-slide" key={ind.id}>
                        <div className="team team-style--bottom variation-2">
                          <div className="thumbnail">
                            <Link href="#">
                              <Image
                                src={ind.img}
                                width={415}
                                height={555}
                                priority
                                alt="Blog Images"
                              />
                            </Link>
                          </div>
                          <div className="content">
                            <div className="inner">
                              <h4 className="title" style={{fontWeight:"500", fontSize:"24px"}}>
                                <Link href="#">{ind.industry}</Link>
                              </h4>
                              <p className="designation" style={{lineHeight:"22px"}}>{ind?.type}</p>
                            </div>
                            <div className="icon-right">
                              <Link href="#">
                                <i className="feather-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                   
                  </SwiperSlide>
                ))}
              <div className="rbt-swiper-arrow rbt-arrow-left">
                <div className="custom-overfolow">
                  <i className="rbt-icon feather-arrow-left"></i>
                  <i className="rbt-icon-top feather-arrow-left"></i>
                </div>
              </div>

              <div className="rbt-swiper-arrow rbt-arrow-right">
                <div className="custom-overfolow">
                  <i className="rbt-icon feather-arrow-right"></i>
                  <i className="rbt-icon-top feather-arrow-right"></i>
                </div>
              </div>

              <div
                className="rbt-swiper-pagination"
                style={{ bottom: "0" }}
              ></div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamEight;
