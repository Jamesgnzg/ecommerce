import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const MainLayout: React.FC = (): ReactElement => {
  return (
    <div className="scroll-smooth pb-20">
      <Header />
      <Outlet />
      <NavBar />
    </div>
  );
};

export default MainLayout;
