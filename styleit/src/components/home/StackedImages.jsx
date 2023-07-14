import React from 'react'
import s1 from '../../assets/s1.jpg'
import s2 from '../../assets/s2.jpg'
import s3 from '../../assets/s3.jpg'

const StackedImages = () => {
  return (
    <section>
    <div className='stackedImages'>
      <div className="first">
        <img src={s1} alt="" />
      </div>
      <div className="second">
        <img src={s2} alt="" />
      </div>
      <div className="third">
        <img src={s3} alt="" />
      </div>
    </div>

    </section>
  )
}

export default StackedImages
