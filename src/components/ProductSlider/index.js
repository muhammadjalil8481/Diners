import React from "react";
import Carousel from "react-elastic-carousel";
import UnderLineHeading from "../UnderLineHeading";
import ProductCard from "../ProductCard";

const ProductSlider = ({heading="Give Heading",image,hoverImage}) => {
  
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 800, itemsToShow: 3, itemsToScroll: 1 },
    { width: 1100, itemsToShow: 5, itemsToScroll: 1 },
  ];
  return (
    <div className="container product-slider">
      <div className="ps-heading mb-5">
        <UnderLineHeading text={heading} />
      </div>
      <Carousel breakPoints={breakPoints}>
        <ProductCard discount image={image} hoverImage={hoverImage}/>
        <ProductCard image={image} hoverImage={hoverImage}/>
        <ProductCard discount image={image} hoverImage={hoverImage}/>
        <ProductCard discount image={image} hoverImage={hoverImage}/>
        <ProductCard image={image} hoverImage={hoverImage}/>
        <ProductCard discount image={image} hoverImage={hoverImage}/>
        <ProductCard image={image} hoverImage={hoverImage}/>
        <ProductCard discount image={image} hoverImage={hoverImage}/>
        <ProductCard discount image={image} hoverImage={hoverImage}/>
      </Carousel>
    </div>
  );
};

export default ProductSlider;
