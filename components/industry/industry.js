import Image from "next/image";
import Link from "next/link";
import { Industries } from "@/utils/constant.utils";

const Industry = () => {
  return (
    <>
      {Industries.map((res) => {
        return (
          <div className="col-lg-2 col-md-6 col-sm-6 col-12" key={res.id}>
            <Link
              className="rbt-cat-box rbt-cat-box-1 text-center"
              href={`#`}
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
                    className="title" style={{textTransform:"uppercase", fontSize:"14px"}}
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
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Industry;
