import React, { useState } from "react";
import InputField from "../InputField";
import WhiteButton from "../Button/whiteButton";
import BlackButton from "../Button/BlackButton";
import { motion, AnimatePresence } from "framer-motion";

const SideBar = ({
  heading = "Heading",
  profile,
  cart,
  showSideBar = false,
  setShowSideBar = () => null,
}) => {
  // if (!showSideBar) return null;
  return (
    <div className={`${showSideBar && "sidebar-overlay"}`}>
      <AnimatePresence>
        {showSideBar && (
          <motion.div
            className="sidebar"
            initial={{ right: -255, top: 0 }}
            animate={{ right: 0, top: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ right: -255, top: 0, transition: { duration: 0.5 } }}
          >
            <p className="sidebar-close" onClick={() => setShowSideBar(false)}>
              &#10005; Close
            </p>
            <h4 className="sidebar-heading">{heading}</h4>
            <hr className="sidebar-hr" />
            {profile && (
              <>
                <div className="sidebar-input">
                  <InputField
                    label={"Email Address"}
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
                <div className="sidebar-input">
                  <InputField
                    label={"Password"}
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <WhiteButton border text="Login" />
                <p className="sidebar-text">Forgot your password?</p>
                <BlackButton text="Create An Account" />
              </>
            )}

            {cart && (
              <>
                <p className="sidebar-text">Forgot your password?</p>
                <WhiteButton border text="Continue Shopping" />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideBar;
