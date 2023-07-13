import React from 'react'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import './home.css'

const Home = () => {
  return (
    <section>
        <div className="container home">
        <div className="first_img">
            <div className="img">
            <img src={img1} alt="" />
            </div>
        </div>
        <div className="contents">
            <div className="second_img">
                <img src={img2} alt="" />
            </div>
            <div className="description">
                <h1>Get to know about us</h1>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Home
