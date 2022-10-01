import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_id', 'template_id', form.current, 'public_key')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='contact'>
        <h1 className="header-title header-contact">contact</h1>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Name' />
            <input type='email' name='email' placeholder='Email' />
            <input type='text' name='subject' placeholder='Subject' />
            <textarea name='message' placeholder='Message' ></textarea>
            <input type='submit' value="Send" />
        </form>
    </div>
  )
}
