import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import BackToTop from "../backToTop";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleEleven from "@/components/Header/HeaderStyle-Eleven";
import OnlineSchool from "@/components/Home-Main/OnlineSchool";
import FooterOne from "@/components/Footer/Footer-One";
import { useEffect } from "react";
import Head from "next/head"; // Import Head from Next.js

const OnlineSchoolPage = () => {
  return (
    <>
      {/* Add Google Tag Manager Script in the Head section */}
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){
                w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NP3ZFVS');`,
          }}
        ></script>
      </Head>

      {/* Your other page components */}
      <PageHead title="repute" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleEleven />
          {/* <Cart /> */}
          <OnlineSchool />
          <BackToTop />
          <FooterOne />
        </Context>
      </Provider>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NP3ZFVS"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }} // Corrected style format
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
    </>
  );
};

export default OnlineSchoolPage;
