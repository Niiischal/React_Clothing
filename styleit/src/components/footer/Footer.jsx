import React from 'react'
import { GrMail } from 'react-icons/gr'
import { ImLocation } from 'react-icons/im'
import { MdCall } from 'react-icons/md'
import './footer.css'

const Footer = () => {
  return (
<footer>
    < div className="location">
        <h5>StyleIt</h5>
        <ul>
            <li>
            <a href="/"><p><ImLocation/>  Maitidevi, Kathmandu</p></a>
            </li>
            <li>
            <a href="/"><p><MdCall/> +977 9807936169</p></a>
            </li>
            <li>
            <a href="/"><p><GrMail/>   nischal.khatiwada745@gmail.com</p></a>
            </li>
        </ul>
    </div>
    <div className="navigation">

    </div>
</footer>
  )
}

export default Footer
