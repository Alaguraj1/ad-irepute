import Image from "next/image";
import Link from "next/link";

import BrandData from "../../data/elements/brands.json";
import { OurClients } from "@/utils/constant.utils";

const BrandThree = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-12">
          {/* <div className="section-title text-center mb--40">
                <span className="small-title w-600">{data.title}</span>
              </div> */}
          {/* <ul className="brand-list brand-style-3 justify-content-center justify-content-lg-between">
            {OurClients.map((item, innerIndex) => (
              <li key={innerIndex}>
                <Link href="#">
                  <img src={item.img} priority={true} alt="Brand Image" />
                </Link>
              </li>
            ))}
          </ul> */}
          <img
            src="/images/client/client-1.jpg"
           style={{width:"100%"}}
            alt="Brand Image"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandThree;
