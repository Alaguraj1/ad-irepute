import Image from "next/image";
import Link from "next/link";

import CourseDetails from "../../data/course-details/courseData.json";
import useCategoryCount from "@/context/useCategoryCount";
import { OurResults, Services } from "@/utils/constant.utils";

const CategoryOne = () => {
  // const { categoryCounts } = useCategoryCount(CourseDetails.courseDetails);

  return (
    <>
      {OurResults.map((res) => {
        return (
          <div className="col-lg-3 col-md-6 col-sm-6 col-6" key={res.id}>
            <div
              className="rbt-cat-box rbt-cat-box-1 text-center"
            >
              <div className="inner">
                {/* <div className="icons">
                  <Image
                    src={res.resultImg}
                    width={80}
                    height={80}
                    priority
                    alt="Icons Images"
                  />
                </div> */}
                <div className="content">
                  <h5
                    className="title" style={{textTransform:"uppercase", lineHeight:"28px"}}
                    dangerouslySetInnerHTML={{ __html: res.result }}
                  ></h5>
                  {/* <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      {count} Course{count !== 1 ? "s" : ""}
                      <i className="feather-arrow-right"></i>
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CategoryOne;
