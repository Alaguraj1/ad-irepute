import Link from "next/link";

import logo from "../../public/images/logo/logo.png";
import logoLight from "../../public/images/dark/logo/logo-light.png";

import CopyRight from "./CopyRight";
import { useAppContext } from "@/context/Context";
import { socialLink } from "@/utils/constant.utils";

const FooterOne = ({ bgColor }) => {
  const { isLightTheme } = useAppContext();

  return (
    <>
      <footer
        className={`rbt-footer footer-style-1 ${
          bgColor ? bgColor : "bg-color-secondary-alt"
        } overflow-hidden`}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <h4 className="mb--20">
                  Ready for Results?
                  <br />
                  Let’s make your business thrive.
                </h4>

                <h2 className="mb--5" style={{ color: "#b80101" }}>
                  Let’s Talk
                </h2>
                <p style={{ fontSize: "22px" }}>
                  {" "}
                  <Link href="mailto:support@irepute.in">
                    support@irepute.in
                  </Link>
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ul className="social-icon social-default justify-content-start">
                    {socialLink?.map((social) => {
                      return (
                        <li key={social.id}>
                          <Link href={social.link} target="_blank">
                            <i className={social.icon}></i>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CopyRight />
      </footer>
    </>
  );
};

export default FooterOne;
