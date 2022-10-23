import React, { useState } from "react";
import images from "../../constants/images";
import ReactStars from "react-rating-stars-component";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductCard = ({ discount,image,hoverImage }) => {
  const [rating, setRating] = useState(0);
  const [onHover, setOnHover] = useState(false);
  const [isFav, setIsFav] = useState(false);
  const sizes = ["S", "M", "L"];
  return (
    <div
      className="pc-card"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      {discount && <span className="pc-card-discount">-25%</span>}
      {onHover && (
        <span
          className={`pc-card-fav ${isFav && "color-pink"}`}
          onClick={() => setIsFav(!isFav)}
        >
          <FavoriteIcon />
        </span>
      )}
    {    onHover &&  <div className="pc-card-sizes">
        
        {sizes.map((size) => (
          <span className="pc-card-size">{size}</span>
        ))}
      </div>
}
      {/* } */}
      <div className="pc-card-img">
        {!onHover && (
          <motion.img
            src={image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, type: "fade" }}
          />
        )}
        {onHover && (
          <motion.img
            src={hoverImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, type: "fade" }}
          />
        )}
      </div>
      <div className="pc-card-info">
        <h4 className="pc-card-info-cat">D Man</h4>
        <h4 className="pc-card-info-title">Formal Shalwar Suit for Men</h4>

        <h4 className="pc-card-info-price">
          {discount && (
            <span className="pc-card-info-price-discount">Rs.5,390.00 PKR</span>
          )}
          &nbsp;
          <span className={`${!discount && "color-green"}`}>
            Rs.4,042.50 PKR
          </span>
        </h4>
      </div>
      <div className="pc-card-ratings">
        <ReactStars
          count={5}
          onChange={(value) => setRating(value)}
          value={rating}
          size={21}
          activeColor="#ffd700"
          color="rgb(1, 1, 1, 0.2)"
        />
        ,
      </div>
    </div>
  );
};

export default ProductCard;
