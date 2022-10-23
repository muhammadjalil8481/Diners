import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import GrayButton from "../Button/GrayButton";
import images from "../../constants/images";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-container">
        <div className="row footer-row">
          <div className="col-2 footer-col">
            <h4>About</h4>
            {/* <ul> */}
            <li>About us</li>
            <li>Contact us</li>
            <li>Corporate</li>
            <li>Bulk Order</li>
            <li>Careers</li>
            <li>Size Guide</li>
            <li>Store Locations</li>
            {/* </ul> */}
          </div>
          <div className="col-2 footer-col">
            <h4>INFORMATION</h4>
            {/* <ul> */}
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Delivery & Orders</li>
            <li>Returns & Refund</li>
            {/* </ul> */}
          </div>
          <div className="col-2 footer-col">
            <h4>My Account</h4>
            {/* <ul> */}
            <li>Login</li>
            <li>Checkout</li>
            <li>Track My Order</li>
            <li>FAQ</li>
            {/* </ul> */}
          </div>
          <div className="col-5 footer-col">
            <h4>STAY CONNECTED</h4>
            <div className="footer-icons ">
              <span className="footer-icon">
                <FaFacebookF size={20} />
              </span>
              <span className="footer-icon">
                <FaTwitter size={20} />
              </span>
              <span className="footer-icon">
                <FaInstagram size={20} />
              </span>
              <span className="footer-icon">
                <FaYoutube size={20} />
              </span>
            </div>
            <h4 className="footer-newsletter">SIGN UP FOR OUR NEWSLETTER</h4>
            <p>Get special discounts & promotions only via email.</p>
            <div className="footer-input-container">
              <input type="text" placeholder="Enter your email address" />
              <span className="mx-2">
                <GrayButton text="Submit" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <div className=" container">
        <div className="footer-bottom">
          <p>© 2020 Diners. All Rights Reserved.</p>
          <div className="footer-bottom-payments ">
            <img src={images.payment1} alt="" />
            <img src={images.payment2} alt="" />
            <img src={images.payment3} alt="" />
            <img src={images.payment4} alt="" />
            <img src={images.payment5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
