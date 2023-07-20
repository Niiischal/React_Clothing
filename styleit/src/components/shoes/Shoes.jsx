import React from 'react'
import women1 from '../../assets/women1.jpg'
import women10 from '../../assets/women10.jpg'
import women11 from '../../assets/women11.jpg'
import women12 from '../../assets/women12.jpg'
import women2 from '../../assets/women2.jpg'
import women3 from '../../assets/women3.jpg'
import women4 from '../../assets/women4.jpg'
import women5 from '../../assets/women5.jpg'
import women6 from '../../assets/women6.jpg'
import women7 from '../../assets/women7.jpg'
import women8 from '../../assets/women8.jpg'
import women9 from '../../assets/women9.jpg'
import './shoes.css'
const Shoes = () => {
  return (
    <section>
      <div className="container Shoes">
      <h1>Shoes Collection</h1>
        <div className="mens_items">
          <div className="card" style={{width: '15rem', height:'70vh'}}>
            <img className="card-img-top" src={women1} alt="" />
            <div className="card-body">
            <h5 className="card-title">Spring Jacket</h5>
            <p></p>
            <p className="card-text">Rs 4000/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={women2} alt="" />
            <div className="card-body">
            <h5 className="card-title">Cropped Top</h5>
            <p></p>
            <p className="card-text">Rs 1700/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={women3} alt="" />
            <div className="card-body">
            <h5 className="card-title">Checked Coat</h5>
            <p></p>
            <p className="card-text">Rs 6000/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem', height:'70vh'}}>
            <img className="card-img-top" src={women4} alt="" />
            <div className="card-body">
            <h5 className="card-title">Cat-Print Shirt</h5>
            <p></p>
            <p className="card-text">Rs 2100/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={women5} alt="" />
            <div className="card-body">
            <h5 className="card-title">Split Joint Outerwear</h5>
            <p></p>
            <p className="card-text">Rs 2800/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={women6} alt="" />
            <div className="card-body">
            <h5 className="card-title">Denim mixed Jacket</h5>
            <p></p>
            <p className="card-text">Rs 4500/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={women7} alt="" />
            <div className="card-body">
            <h5 className="card-title">Raw Edge Jeans</h5>
            <p></p>
            <p className="card-text">Rs 2500/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem', height:'70vh'}}>
            <img className="card-img-top" src={women8} alt="" />
            <div className="card-body">
            <h5 className="card-title">Wide Leg Jeans</h5>
            <p></p>
            <p className="card-text">Rs 2500/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={women9} alt="" />
            <div className="card-body">
            <h5 className="card-title">Courduroy Crop Jacket </h5>
            <p></p>
            <p className="card-text">Rs 4000/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={women10} alt="" />
            <div className="card-body">
            <h5 className="card-title">Pathchwork Puffer</h5>
            <p></p>
            <p className="card-text">Rs 4500/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={women11} alt="" />
            <div className="card-body">
            <h5 className="card-title">Blouse Pants Sets</h5>
            <p></p>
            <p className="card-text">Rs 6000/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={women12} alt="" />
            <div className="card-body">
            <h5 className="card-title">Trench Vest</h5>
            <p></p>
            <p className="card-text">Rs 3900/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
        </div>      
      </div>
    </section>
  )
}

export default Shoes
