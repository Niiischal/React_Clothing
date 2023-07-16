import React from 'react'
import { BsMessenger } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import './contact.css'

const Contact = () => {
  return (
    <div className="container">
      <section>
        <h1>Lets Get Connected</h1>
        <div className="contact_content">
          <div className="connection">
            <article>
            <MdEmail className='icon'/>
              <h4>Email</h4>
              <h5>nischal.khatiwada745@gmail.com</h5>
              <a href="mailto: nischal.khatiwada745@gmail.com" target='_blank'>Send an email</a>
            </article>
            <article>
            <BsMessenger className='icon'/>
              <h4>Messenger</h4>
              <h5>Nischal Khatiwada</h5>
              <a href="https://m.me/khatiwada.Nishal" target='_blank'>Send a message</a>
            </article>
          </div>
          <div className="form">
            <form action="submit">
              <input type="text" name='name' placeholder='Your Full Name' required/>
              <input type="text" name='email' placeholder='Your Email' required/>
              <textarea name="message"  rows="6" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn'> Send Message</button>
            </form>
          </div>
        </div>
        
      </section>
      </div>
  )
}

export default Contact
