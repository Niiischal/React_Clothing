import React from 'react'
import shoe11 from '../../assets/img4.jpg'
import shoe1 from '../../assets/shoe1.jpg'
import shoe10 from '../../assets/shoe10.jpg'
import shoe12 from '../../assets/shoe12.jpg'
import shoe2 from '../../assets/shoe2.jpg'
import shoe3 from '../../assets/shoe3.jpg'
import shoe4 from '../../assets/shoe4.jpg'
import shoe5 from '../../assets/shoe5.jpg'
import shoe6 from '../../assets/shoe6.jpg'
import shoe7 from '../../assets/shoe7.jpg'
import shoe8 from '../../assets/shoe8.jpg'
import shoe9 from '../../assets/shoe9.jpg'
import './sneakers.css'
const Sneakers = () => {
  return (
    <section>
      <div className="container Shoes">
      <h1>Sneakers Collection</h1>
        <div className="sneakers_items">
          <div className="card" style={{width: '15rem', height:'75vh'}}>
            <img className="card-img-top" src={shoe1} alt="" />
            <div className="card-body">
            <h5 className="card-title">Rikki Brown Platform Loafer</h5>
            <p></p>
            <p className="card-text">Rs 9000/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={shoe2} alt="" />
            <div className="card-body">
            <h5 className="card-title">Nike Dunk Low "Fossil Rose"</h5>
            <p></p>
            <p className="card-text">Rs 6700/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={shoe3} alt="" />
            <div className="card-body">
            <h5 className="card-title">Nike SB Dunk Low "Pink Box"</h5>
            <p></p>
            <p className="card-text">Rs 6700/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem', height:'75vh'}}>
            <img className="card-img-top" src={shoe4} alt="" />
            <div className="card-body">
            <h5 className="card-title">Desigual Black Ankle Boots</h5>
            <p></p>
            <p className="card-text">Rs 7000/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={shoe5} alt="" />
            <div className="card-body">
            <h5 className="card-title">Unisex Chunky Sneakers</h5>
            <p></p>
            <p className="card-text">Rs 6500/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={shoe6} alt="" />
            <div className="card-body">
            <h5 className="card-title">Ronnie Fieg for Clarks Originals</h5>
            <p></p>
            <p className="card-text">Rs 8000/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={shoe7} alt="" />
            <div className="card-body">
            <h5 className="card-title">Tehran Suede Patch Chunky Shoes</h5>
            <p></p>
            <p className="card-text">Rs 11000/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem', height:'75vh'}}>
            <img className="card-img-top" src={shoe8} alt="" />
            <div className="card-body">
            <h5 className="card-title">Tossu By Camper</h5>
            <p></p>
            <p className="card-text">Rs 2500/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={shoe9} alt="" />
            <div className="card-body">
            <h5 className="card-title">ReebokClassics Club C 85 Vintage</h5>
            <p></p>
            <p className="card-text">Rs 7000/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={shoe10} alt="" />
            <div className="card-body">
            <h5 className="card-title">Adidas Yezzy Slides</h5>
            <p></p>
            <p className="card-text">Rs 3500/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={shoe11} alt="" />
            <div className="card-body">
            <h5 className="card-title">Custom Off-White X Air Jordan 1 Low</h5>
            <p></p>
            <p className="card-text">Rs 8000/-</p>
            <a href="#" className="btn">
              Add To Cart
            </a>
            </div>
          </div>
          <div className="card" style={{width: '15rem'}}>
            <img className="card-img-top" src={shoe12} alt="" />
            <div className="card-body">
            <h5 className="card-title">Double-Strap Buckled Platform Sandals</h5>
            <p></p>
            <p className="card-text">Rs 6500/-</p>
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

export default Sneakers
