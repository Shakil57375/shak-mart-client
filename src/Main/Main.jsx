import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import MarqueeHead from "../components/Marquee/Marquee";
import Header from "../Shared/Header/Header";

const Main = () => {
  return (
    <>
      <MarqueeHead></MarqueeHead>
      <Navbar></Navbar>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
