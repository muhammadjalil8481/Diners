import React, { useState } from "react";
import { Navbar, NavLink, Nav } from "react-bootstrap";
// import {Link} from "bootstrap";
import logo from "../../assets/images/logo.svg";
import { BsSearch, BsCart } from "react-icons/bs";
import { IoPersonOutline, IoHeartOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import images from "../../constants/images";
import NavBarHoverMenu from "../NavbarHoverMenu";
import SideBar from "../SideBar";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [navBarHover, setNavBarHover] = useState(false);
  const [toggleProfileSideBar, setToggleProfileSideBar] = useState(false);
  const [toggleCartSideBar, setToggleCartSideBar] = useState(false);
  return (
    <Navbar expand="lg" className={`navbar `}>
      <SideBar
        profile
        heading="CUSTOMER LOGIN:"
        showSideBar={toggleProfileSideBar}
        setShowSideBar={setToggleProfileSideBar}
      />
      <SideBar
        cart
        heading="SHOPPING CART:"
        showSideBar={toggleCartSideBar}
        setShowSideBar={setToggleCartSideBar}
      />
      {searchToggle && (
        <motion.div
          className="d-flex flex-column w-100"
          initial={{ scale: 0.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div className="search-toggle">
            <input type="text" placeholder="Search" />
            <div className="search-si">
              <BsSearch size={20} fill="black" />
            </div>
            <div className="search-ci" onClick={() => setSearchToggle(false)}>
              <MdCancel size={24} />
            </div>
          </motion.div>
          <div className="search-recommend">
            <div className="sr-container">
              <h3>Trending</h3>
              <hr />
              <div className="search-boxes-container">
                <div className="search-boxes">
                  <div className="sb-si">
                    <BsSearch fill="black" size={16} />
                  </div>
                  <p>shirts</p>
                </div>
                <div className="search-boxes">
                  <div className="sb-si">
                    <BsSearch fill="black" size={16} />
                  </div>
                  <p>unstitched</p>
                </div>
                <div className="search-boxes">
                  <div className="sb-si">
                    <BsSearch fill="black" size={16} />
                  </div>
                  <p>trousers</p>
                </div>
                <div className="search-boxes">
                  <div className="sb-si">
                    <BsSearch fill="black" size={16} />
                  </div>
                  <p>pret</p>
                </div>
                <div className="search-boxes">
                  <div className="sb-si">
                    <BsSearch fill="black" size={16} />
                  </div>
                  <p>kameez shalwar</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      {!searchToggle && (
        <div className="navbar-container">
          <Navbar.Brand className="brand">
            <img src={images.brand1} alt="LOGO" />
          </Navbar.Brand>
          <Nav className="ms-auto navbar-links">
            <div className="navbar-link-container">
              <NavLink>
                <div className="list_item navbar-link">MEN</div>
              </NavLink>
              <div className="navbar-link-hover">
                <NavBarHoverMenu />
              </div>
            </div>
            <div class="navbar-link-container">
              <NavLink>
                <div className="list_item navbar-link">WOMEN</div>
              </NavLink>
              <div className="navbar-link-hover">
                <NavBarHoverMenu />
              </div>
            </div>
            <div class="navbar-link-container">
              <NavLink>
                <div className="list_item navbar-link">KIDS</div>
              </NavLink>
              <div className="navbar-link-hover">
                <NavBarHoverMenu />
              </div>
            </div>
            <div class="navbar-link-container">
              <NavLink>
                <div className="list_item navbar-link">FOOTWEAR</div>
              </NavLink>
              <div className="navbar-link-hover">
                <NavBarHoverMenu />
              </div>
            </div>

            <div class="navbar-link-container">
              <NavLink>
                <div className="list_item navbar-link">
                  SALE <label>Sale</label>
                </div>
              </NavLink>
              <div className="navbar-link-hover">
                <NavBarHoverMenu />
              </div>
            </div>
            <div className="navbar-link-container ">
              <NavLink>
                <div className="list_item navbar-link">LOOKBOOK</div>
              </NavLink>
              {/* <div className="navbar-link-hover">
                <NavBarHoverMenu />
              </div> */}
            </div>

            <div class="navbar-link-container">
              <NavLink>
                <div className="list_item navbar-link">
                  NEW ARRIVALS<label className="label-for-new">New</label>
                </div>
              </NavLink>
              <div className="navbar-link-hover">
                <NavBarHoverMenu />
              </div>
            </div>
          </Nav>
          <Nav className="ms-auto navbar-actions">
            <NavLink>
              <div className="mx-3" onClick={() => setSearchToggle(true)}>
                <BsSearch size={24} fill="black" />
              </div>
            </NavLink>
            <NavLink>
              <div className="mx-3">
                <IoPersonOutline
                  size={25}
                  fill="black"
                  color="black"
                  onClick={() => setToggleProfileSideBar(true)}
                />
              </div>
            </NavLink>
            <NavLink>
              <div className="mx-3">
                <IoHeartOutline size={26} fill="black" color="black" />
              </div>
            </NavLink>
            <NavLink>
              <div className="mx-3">
                <BsCart
                  size={25}
                  fill="black"
                  onClick={() => setToggleCartSideBar(true)}
                />
              </div>
            </NavLink>
          </Nav>
          {/* </Navbar.Collapse> */}
        </div>
      )}
    </Navbar>
  );
};

export default NavBar;
