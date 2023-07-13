import React from 'react'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
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
                    <img src={img4} alt="" />
                </div>
                <div className="second_content_description">
                    <div className="description">
                    <h1>StyleIt</h1>
                    <h2>Made In Nepal.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia suscipit praesentium vero totam, minus tempore sint nulla exercitationem dignissimos voluptates iusto in nobis explicabo! Culpa ipsum beatae ducimus nesciunt voluptatem laudantium quidem laborum, tempora fuga natus eius harum quae dolor, blanditiis quibusdam itaque aut quia repellat qui accusantium aspernatur non?</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Home
