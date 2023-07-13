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
        </div>
    </section>
  )
}

export default Home
