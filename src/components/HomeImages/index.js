import React, { useState } from "react";
import images from "../../constants/images";
import WhiteButton from "../Button/whiteButton";
import { motion, AnimatePresence } from "framer-motion";

const HomeImages = () => {
  const [onHover, setOnHover] = useState("");

  return (
    <div className="container home-category">
      <div className="row home-category-row">
        {/* 1 */}
        <motion.div className="col-md-6 home-category-col">
          <div className="overflow-hidden home-category-image">
            <img src={images.catImage1} />
            <div
              className="home-category-overlay"
              onMouseEnter={() => setOnHover("men")}
              onMouseLeave={() => setOnHover("")}
            ></div>
          </div>
          <AnimatePresence>
            {onHover === "men" && (
              <motion.div
                className="home-category-col-button"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                exit={{ opacity: 0, y: 150, transition: { duration: 0.5 } }}
                key="btn"
                onMouseEnter={() => setOnHover("men")}
                onMouseLeave={() => setOnHover("")}
              >
                <WhiteButton text="Shop Now" />
              </motion.div>
            )}
          </AnimatePresence>
          <h2 className="home-category-name">men</h2>
        </motion.div>
        {/* 2 */}
        <motion.div className="col-md-6 home-category-col">
          <div className="overflow-hidden home-category-image">
            <img src={images.catImage2} />
            <div
              className="home-category-overlay"
              onMouseEnter={() => setOnHover("women")}
              onMouseLeave={() => setOnHover("")}
            ></div>
          </div>
          <AnimatePresence>
            {onHover === "women" && (
              <motion.div
                className="home-category-col-button"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                exit={{ opacity: 0, y: 150, transition: { duration: 0.5 } }}
                key="btn"
                onMouseEnter={() => setOnHover("women")}
                onMouseLeave={() => setOnHover("")}
              >
                <WhiteButton text="Shop Now" />
              </motion.div>
            )}
          </AnimatePresence>
          <h2 className="home-category-name">women</h2>
        </motion.div>
        <motion.div className="col-md-6 home-category-col">
          <div className="overflow-hidden home-category-image">
            <img src={images.catImage3} />
            <div
              className="home-category-overlay"
              onMouseEnter={() => setOnHover("footwear")}
              onMouseLeave={() => setOnHover("")}
            ></div>
          </div>
          <AnimatePresence>
            {onHover === "footwear" && (
              <motion.div
                className="home-category-col-button"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                exit={{ opacity: 0, y: 150, transition: { duration: 0.5 } }}
                key="btn"
                onMouseEnter={() => setOnHover("footwear")}
                onMouseLeave={() => setOnHover("")}
              >
                <WhiteButton text="Shop Now" />
              </motion.div>
            )}
          </AnimatePresence>
          <h2 className="home-category-name">footwear</h2>
        </motion.div>
        <motion.div className="col-md-6 home-category-col">
          <div className="overflow-hidden home-category-image">
            <img src={images.catImage4} />
            <div
              className="home-category-overlay"
              onMouseEnter={() => setOnHover("kids")}
              onMouseLeave={() => setOnHover("")}
            ></div>
          </div>
          <AnimatePresence>
            {onHover === "kids" && (
              <motion.div
                className="home-category-col-button"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                exit={{ opacity: 0, y: 150, transition: { duration: 0.5 } }}
                key="btn"
                onMouseEnter={() => setOnHover("kids")}
                onMouseLeave={() => setOnHover("")}
              >
                <WhiteButton text="Shop Now" />
              </motion.div>
            )}
          </AnimatePresence>
          <h2 className="home-category-name">Kids</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeImages;
