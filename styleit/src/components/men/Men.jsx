import React from "react";
import men1 from '../../assets/men1.jpg';
import men10 from '../../assets/men10.jpg';
import men11 from '../../assets/men11.jpg';
import men12 from '../../assets/men12.jpg';
import men2 from '../../assets/men2.jpg';
import men3 from '../../assets/men3.jpg';
import men4 from '../../assets/men4.jpg';
import men5 from '../../assets/men5.jpg';
import men6 from '../../assets/men6.jpg';
import men7 from '../../assets/men7.jpg';
import men8 from '../../assets/men8.jpg';
import men9 from '../../assets/men9.jpg';
import "./men.css";

const Men = () => {
  return (
    <section>
      <div className="container Men">
        <h1>Men's Clothes</h1>
        <div className="mens_items">
          <div className="card" style={{width: '15rem', height:'70vh'}}>
            <img className="card-img-top" src={men1} alt="" />
            <div className="card-body">
            <h5 className="card-title">Summer Knit Shirt</h5>
            <p></p>
            <p className="card-text">Rs 3000/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={men2} alt="" />
            <div className="card-body">
            <h5 className="card-title">Lace Loose Shirt</h5>
            <p></p>
            <p className="card-text">Rs 2800/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={men3} alt="" />
            <div className="card-body">
            <h5 className="card-title">Brown Corduroy Pants</h5>
            <p></p>
            <p className="card-text">Rs 2500/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem', height:'70vh'}}>
            <img className="card-img-top" src={men4} alt="" />
            <div className="card-body">
            <h5 className="card-title">Linen SS Shirt Sand</h5>
            <p></p>
            <p className="card-text">Rs 2100/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={men5} alt="" />
            <div className="card-body">
            <h5 className="card-title">Flower Denim Jacket</h5>
            <p></p>
            <p className="card-text">Rs 5000/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={men6} alt="" />
            <div className="card-body">
            <h5 className="card-title">Bode Shirt</h5>
            <p></p>
            <p className="card-text">Rs 3200/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={men7} alt="" />
            <div className="card-body">
            <h5 className="card-title">Knited Stirpped Shirt</h5>
            <p></p>
            <p className="card-text">Rs 2300/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem', height:'70vh'}}>
            <img className="card-img-top" src={men8} alt="" />
            <div className="card-body">
            <h5 className="card-title">Senior Cord</h5>
            <p></p>
            <p className="card-text">Rs 5500/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={men9} alt="" />
            <div className="card-body">
            <h5 className="card-title">Paper pattern Denim </h5>
            <p></p>
            <p className="card-text">Rs 4000/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={men10} alt="" />
            <div className="card-body">
            <h5 className="card-title">Colorful Pullover</h5>
            <p></p>
            <p className="card-text">Rs 3500/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={men11} alt="" />
            <div className="card-body">
            <h5 className="card-title">HipHop Sweatpants</h5>
            <p></p>
            <p className="card-text">Rs 2500/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={men12} alt="" />
            <div className="card-body">
            <h5 className="card-title">Loose Fit  Sweatpants</h5>
            <p></p>
            <p className="card-text">Rs 2000/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Men;
