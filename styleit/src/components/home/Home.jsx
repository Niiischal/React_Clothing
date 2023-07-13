import React from 'react'
import img1 from '../../assets/img1.jpg'
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
        </div>
    </section>
  )
}

export default Home
