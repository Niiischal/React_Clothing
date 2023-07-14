import React from 'react'
import shoe1 from '../../assets/shoe1.jpg'
import shoe2 from '../../assets/shoe2.jpg'
import shoe3 from '../../assets/shoe3.jpg'
import shoe4 from '../../assets/shoe4.jpg'

const ShoeList = () => {
  return (
    <section>
    <div className="accordian_shoe">
    <div className="first_accordian_title">
      <h1>Shoe</h1>
      <h5 className="view"><a href="">View All></a></h5>
    </div>
    <div className="items_women">
      <div className="items">
      <div
          className="card"
          style={{ width: "16rem", height: "51.6vh" }}
        >
          <img
            className="card-img-top"
            src={shoe1}
            alt="Card image cap"
            style={{ height: "25vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">Rikki Brown Platform Loafer</h5>
            <p></p>
            <p className="card-text">Rs 9000/-</p>
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
            src={shoe2}
            alt="Card image cap"
            style={{ height: "25vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">Nike Dunk Low "Fossil Rose"</h5>
            <p></p>
            <p className="card-text">Rs 6700/-</p>
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
            src={shoe3}
            alt="Card image cap"
            style={{ height: "25vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">Nike SB Dunk Low "Pink Box"</h5>
            <p></p>
            <p className="card-text">Rs 6700/-</p>
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
            src={shoe4}
            alt="Card image cap"
            style={{ height: "25vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">Desigual Black Ankle Boots</h5>
            <p></p>
            <p className="card-text">Rs 7000/-</p>
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

export default ShoeList
