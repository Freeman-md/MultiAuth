import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const PageLayout = () => {
  return (
    <div>
      <div>
        <Header />

        <Outlet />

        <Footer />
      </div>
    </div>
  );
};
