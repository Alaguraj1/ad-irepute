import Image from "next/image";
import Link from "next/link";
import { Industries } from "@/utils/constant.utils";

const Industry = () => {
  return (
    <>
      {Industries.map((res) => {
        return (
          <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={res.id}>
            <div
              className="rbt-cat-box rbt-cat-box-1 text-center"
            >
              <div className="inner" style={{padding:"20px"}}>
                <div className="icons">
                  <Image
                    src={res.img}
                    width={80}
                    height={80}
                    priority
                    alt="Icons Images"
                  />
                </div>
                <div className="content">
                  <h5
                    className="title" style={{textTransform:"uppercase", fontSize:"14px", lineHeight:"18px"}}
                    dangerouslySetInnerHTML={{ __html: res.industry }}
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

export default Industry;
