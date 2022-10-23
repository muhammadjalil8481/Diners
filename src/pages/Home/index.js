import React from "react";
import HomeImages from "../../components/HomeImages";
import HomeSlider from "../../components/HomeSlider";
import ProductSlider from "../../components/ProductSlider";
import images from "../../constants/images";
import NavBar from "../../components/NavBar";
import OurBrands from "../../components/OurBrands";
import Footer from "../../components/Footer";
import NavBarHoverMenu from "../../components/NavbarHoverMenu";
import SideBar from "../../components/SideBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      {/* <NavBarHoverMenu /> */}
      {/* <HomeSlider /> */}
      {/* <HomeImages /> */}
      {/* <ProductSlider heading="Kameez Shalwar" image={images.pcImg1} hoverImage={images.pcImg1alt} /> */}
      {/* <ProductSlider heading="Unstitched" image={images.pcImg1} hoverImage={images.pcImg1alt}/> */}
      {/* <ProductSlider heading="Girls Kurti" image={images.pcImg1} hoverImage={images.pcImg1alt}/> */}
      {/* <ProductSlider heading="Footwear" image={images.pcImg1} hoverImage={images.pcImg1alt}/> */}
      {/* <OurBrands /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
