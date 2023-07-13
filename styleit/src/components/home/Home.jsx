import React from 'react'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import './home.css'

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
            <div className="item4">
                
            </div>
        </div>
        <div className="second_content">
            <h1>Get To Know Us.</h1>
            <div className="second_content_field">
                <div className="second_content_image">

                </div>
                <div className="second_content_description"></div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Home
