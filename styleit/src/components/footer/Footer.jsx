import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { ImLocation } from 'react-icons/im';
import { MdCall } from 'react-icons/md';
import './footer.css';

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
        <h5>Pages</h5>
        <ul>
            <li>
                <a href="/"><p>Home</p></a>
            </li>
            <li>
            <a href="/"><p>Men</p></a>
            </li>
            <li>
            <a href="/"><p>women</p></a>
            </li>
            <li>
            <a href="/"><p>Shoes</p></a>
            </li>
            <li>
            <a href="/"><p>About</p></a>
            </li>
        </ul>
        <div>
        <h4>&copy; StyleIt. All rights reserved</h4>
        </div>
    </div>
    <div className="medias">
        <a href=""><AiFillFacebook className='icons'/></a>
        <a href=""><AiFillInstagram className='icons'/></a>
        <a href=""><AiFillLinkedin className='icons'/></a>
    </div>
</footer>
  )
}

export default Footer
