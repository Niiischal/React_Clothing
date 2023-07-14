import React from 'react'
import men1 from '../../assets/men1.jpg'
import men2 from '../../assets/men2.jpg'
import men3 from '../../assets/men3.jpg'
import men4 from '../../assets/men4.jpg'

const MenList = () => {
  return (
    <div className="accordian_second">
    <div className="first_accordian_title">
      <h1>Men</h1>
      <h5 className="view"><a href="">View All></a></h5>
    </div>
    <div className="items_men">
      <div className="items">
      <div
          className="card"
          style={{ width: "16rem", height: "51.6vh" }}
        >
          <img
            className="card-img-top"
            src={men1}
            alt="Card image cap"
            style={{ height: "25vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">Summer Knit Shirt</h5>
            <p></p>
            <p className="card-text">Rs 3000/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
          </div>
        </div>
      </div>
      <div className="items">
      <div
          className="card"
          style={{ width: "16rem", height: "51.6vh" }}
        >
          <img
            className="card-img-top"
            src={men2}
            alt="Card image cap"
            style={{ height: "25vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">Lace Loose Shirt</h5>
            <p></p>
            <p className="card-text">Rs 2800/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
          </div>
        </div>
      </div>
      <div className="items">
      <div
          className="card"
          style={{ width: "16rem", height: "51.6vh" }}
        >
          <img
            className="card-img-top"
            src={men3}
            alt="Card image cap"
            style={{ height: "25vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">Brown Corduroy Pants</h5>
            <p></p>
            <p className="card-text">Rs 2500/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
          </div>
        </div>
      </div>
      <div className="items">
      <div
          className="card"
          style={{ width: "16rem", height: "51.6vh" }}
        >
          <img
            className="card-img-top"
            src={men4}
            alt="Card image cap"
            style={{ height: "25vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">Linen SS Shirt Sand</h5>
            <p></p>
            <p className="card-text">Rs 2100/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MenList
