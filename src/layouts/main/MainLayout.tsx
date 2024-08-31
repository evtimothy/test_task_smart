import { Outlet } from "react-router-dom";
import MainFooter from "../footer/MainFooter";
import MainHeader from "../headers/MainHeader";

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </>
  );
};

export default MainLayout;
