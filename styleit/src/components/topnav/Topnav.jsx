import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import "./topnav.css";

const Topnav = () => {
  const [isShown, setIsShown] = useState(false);

  const searchBar = () => {
    return (
      <>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <a href="#" className="btn">
          Search
        </a>
      </>
    );
  };

  const handleOnClick = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <div className="container top">
        <CgProfile className="profile_icon" />
        <h1>StyleIt</h1>
        <div className="search">
          <FiSearch className="search_icon" onClick={handleOnClick} />
          <AiOutlineShoppingCart className="cart_icon" />
          {isShown && <div className="searchBar">{searchBar()}</div>}
        </div>
      </div>
    </>
  );
};

export default Topnav;
