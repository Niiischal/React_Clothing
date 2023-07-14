import React from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import MenList from "./MenList";
import StackedImages from "./StackedImages";
import WomenList from "./WomenList";
import "./home.css";

const Home = () => {
  return (
    <section>
      <div className="container home">
        <div className="contents">
          <div className="item1">
            <img src={img2} alt="" />
          </div>
          <div className="item2">
            <img src={img1} alt="" />
          </div>
          <div className="item3">
            <img src={img3} alt="" />
          </div>
          <div className="item4"></div>
        </div>
        <div className="second_content">
          <h1>Get To Know Us.</h1>
          <div className="second_content_field">
            <div className="second_content_image">
              <img src={img4} alt="" />
            </div>
            <div className="second_content_description">
              <div className="description">
                <h1>StyleIt</h1>
                <h2>Made In Nepal.</h2>
                <p>
                  Welcome to our inclusive clothing store <span>StyleIt</span>,
                  where men, women, and shoe lovers alike can find the perfect
                  pieces to enhance their personal style. With our extensive
                  selection of fashionable apparel and footwear, we offer
                  something for every occasion and taste. Our knowledgeable team
                  is dedicated to providing exceptional service, ensuring that
                  your shopping experience is both enjoyable and rewarding.
                  Discover a world of limitless possibilities as you explore our
                  diverse range of clothing and shoe options, and let us help
                  you unleash your inner fashionista with confidence and style.
                </p>
              </div>
            </div>
          </div>
          <MenList/>
          <WomenList/>
          <StackedImages/>
        </div>
      </div>
    </section>
  );
};

export default Home;
