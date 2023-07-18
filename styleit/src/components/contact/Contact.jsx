import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import { BsMessenger } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
    const form = useRef();
  
    const sendEmail = () => {
  
      emailjs.sendForm('service_5m038wm', 'template_tft2x55', form.current, 'LJ2_v178sI1TceSLs')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const alertMessage=()=>{
      alert('Form Submitted....');
    }

    const[name, setName]=useState('')
    const[email, setEmail]=useState('')
    const[message, setMessage]=useState('')

    const handleOnClick=()=>{
      sendEmail();
      setName('');
      setEmail('');
      setMessage('');
      alertMessage();
    }

  return (
    <div className="container">
      <section>
        <h1>Get In Touch</h1>
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
            <form ref={form} onSubmit={handleOnClick}>
              <input type="text" name='name' placeholder='Your Full Name'  value={name} onChange={event => setName(event.target.value)} required/>
              <input type="text" name='email' placeholder='Your Email' value={email} onChange={event => setEmail(event.target.value)} required/>
              <textarea name="message"  rows="6" placeholder='Your Message' value={message} onChange={event => setMessage(event.target.value)} required></textarea>
              <button type='submit' className='btn'> Send Message</button>
            </form>
          </div>
        </div>
        
      </section>
      </div>
  )
}

export default Contact
