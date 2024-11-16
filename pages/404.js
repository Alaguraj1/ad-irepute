import PageHead from "./Head";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import NotFound from "@/components/NotFound/NotFound";
import HeaderStyleEleven from "@/components/Header/HeaderStyle-Eleven";

const ErrorPage = () => {
  return (
    <Provider store={Store}>
      <Context>
        <PageHead title="Page not found - Online Courses & Education NEXTJS14 Template" />
        <HeaderStyleEleven />

        <NotFound />

        <Separator />
        <FooterOne />
      </Context>
    </Provider>
  );
};

export default ErrorPage;
