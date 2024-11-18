import React from "react";
import Link from "next/link";

const ThankYouMain = () => {
  return (
    <>
      <div className="rbt-call-to-action-area rbt-section-gap pt--120 bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-cta-6 text-center">
                <div className="content">
                  <h1 className="title">Thank You</h1>
                  <p style={{fontSize:"24px"}}>
                    Lets Talk about your Project!! -{" "}
                    <Link href={`tel:+91 73051 60120`}> +91 73051 60120 </Link><br/>
                    We will help find the right solutions and prices for your
                    business.
                  </p>
                  <div className="rbt-button-group justify-content-center">
                    <Link className="rbt-btn btn-gradient" href="/">
                     Back To Home
                    </Link>
                    {/* <Link className="rbt-btn btn-border" href="#">
                      See Features
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouMain;
