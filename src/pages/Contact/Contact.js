import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div className='contact'>
        <h1 className="header-title header-contact">contact</h1>
        <form className='contact-form' onSubmit={() => {return false}}>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='Subject' />
            <textarea name='text' placeholder='Description' ></textarea>
            <input type='submit' />
        </form>
    </div>
  )
}
