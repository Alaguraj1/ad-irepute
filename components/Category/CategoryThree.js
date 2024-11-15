import Image from "next/image";
import Link from "next/link";
import { Services } from "@/utils/constant.utils";

const CategoryThree = () => {
  return (
    <>
      {Services.map((res) => {
        return (
          <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={res.id}>
            <Link
              className="rbt-cat-box rbt-cat-box-1 text-center"
              href={`#`}
            >
              <div className="inner">
                <div className="icons">
                  <Image
                    src={res.cateSmallImg}
                    width={80}
                    height={80}
                    priority
                    alt="Icons Images"
                  />
                </div>
                <div className="content">
                  <h5
                    className="title"
                    dangerouslySetInnerHTML={{ __html: res.service }}
                  ></h5>
                  {/* <div className="read-more-btn">
                    <span className="rbt-btn-link">
                      {count} Course{count !== 1 ? "s" : ""}
                      <i className="feather-arrow-right"></i>
                    </span>
                  </div> */}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default CategoryThree;
