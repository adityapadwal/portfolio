import React from 'react'
import {MdMailOutline} from 'react-icons/md'
import {FaWhatsappSquare} from 'react-icons/fa'
import {SiMicrosoftoutlook} from 'react-icons/si'
import './contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
// import * as emailjs from "emailjs-com"

const Contact = () => {

  const form = useRef();
    const sendEmail = (e) => 
    {
      e.preventDefault();
  
      emailjs.sendForm('service_43rx63l', 'template_vf4u3is', form.current, 'M8OVKoo7665C9BQzA')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

        e.target.reset();
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        <div className='contact__options'>
            <article className='contact__option'>
              <MdMailOutline className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>EMAIL ID: adityapadwal02@gmail.com</h5>
              <a href="mailto:adityapadwal02@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
            </article>

            <article className='contact__option'>
              <SiMicrosoftoutlook className='contact__option-icon'/>
              <h4>Outlook</h4>
              <h5>EMAIL ID: aditya.padwal3102@outlook.com</h5>
              <a href="mailto:aditya.padwal3102@outlook.com" target="_blank" rel="noreferrer">Send a message</a>
            </article>

            <article className='contact__option'>
              <FaWhatsappSquare className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+91 9673112471</h5>
              <a href="https://wa.me/+919673112471?text=" target="_blank" rel="noreferrer">Send a message</a>
            </article>
        </div>  

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder='Your Email'/>
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        
      </div>
    </section>
  );
} 

export default Contact