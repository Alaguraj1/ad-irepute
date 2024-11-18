import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import BackToTop from "../backToTop";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleEleven from "@/components/Header/HeaderStyle-Eleven";
import FooterOne from "@/components/Footer/Footer-One";
import ThankYouMain from "@/components/ThakyouMain/ThankYouMain";

const OnlineSchoolPage = () => {
  return (
    <>
      <PageHead title="repute" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleEleven />
          {/* <Cart /> */}
          <ThankYouMain />
          <BackToTop />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default OnlineSchoolPage;
