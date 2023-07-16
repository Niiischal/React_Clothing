import React from 'react'
import { NavLink } from 'react-router-dom'
import women1 from '../../assets/women1.jpg'
import women2 from '../../assets/women2.jpg'
import women3 from '../../assets/women3.jpg'
import women4 from '../../assets/women4.jpg'


const WomenList = () => {
  return (
    <section>
    <div className="accordian">
    <div className="first_accordian_title">
      <h1>Women</h1>
      <h5 className="view"><NavLink to
      ="/women">View All></NavLink></h5>
    </div>
    <div className="items_women">
      <div className="items">
      <div
          className="card"
          style={{ width: "16rem", height: "51.6vh" }}
        >
          <img
            className="card-img-top"
            src={women1}
            alt="Card image cap"
            style={{ height: "23.7vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">Spring Jacket</h5>
            <p></p>
            <p className="card-text">Rs 4000/-</p>
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
            src={women2}
            alt="Card image cap"
            style={{ height: "23.7vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">Cropped Top</h5>
            <p></p>
            <p className="card-text">Rs 1700/-</p>
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
            src={women3}
            alt="Card image cap"
            style={{ height: "23.7vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">Checked Coat</h5>
            <p></p>
            <p className="card-text">Rs 6000/-</p>
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
            src={women4}
            alt="Card image cap"
            style={{ height: "23.7vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">Cat-Print Shirt</h5>
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
  </section>
  )
}

export default WomenList
