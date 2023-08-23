import { Outlet } from "react-router-dom";
import Header from "../components/header/Headers";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;