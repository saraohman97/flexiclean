import React, { useState } from 'react'
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [message, setMessage] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    body: ''
  })
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChangeInput = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.user_name === '' || message.user_email === '' || message.subject === '' || message.body === '') {
      setError(true)
    }
    else {
      emailjs.sendForm('service_wp153qc', 'template_kpw777i', e.target, 'bxhMD_7j9kjdXdrQf')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

      setError(false)
      setSuccess(true)
      message.user_name = ''
      message.user_email = ''
      message.subject = ''
      message.body = ''
    }
  }

  return (
    <section className='section contact'>
      <form onSubmit={handleSubmit} className='contact-form'>
        <h1 className='contact-title'>Kontakta oss</h1>
        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>Fälten kan inte vara tomma. </p>}
        {success && <p style={{ color: 'green', marginBottom: '1rem' }}>Ditt meddelande har skickats. </p>}

        <div className='input-group'>
          <label htmlFor="name" className='label'>Fullständigt namn</label>
          <input
            name='user_name'
            value={message['user_name']}
            onChange={handleChangeInput}
            type="text"
            className='input-field'
          />
        </div>

        <div className='input-group'>
          <label htmlFor="text" className='label'>Email</label>
          <input
            name='user_email'
            value={message['user_email']}
            onChange={handleChangeInput}
            type="text"
            className='input-field'
          />
        </div>

        <div className='input-group'>
          <label htmlFor="subject" className='label'>Ärende</label>
          <input
            name='subject'
            value={message['subject']}
            onChange={handleChangeInput}
            type="text"
            className='input-field'
          />
        </div>

        <div className='input-group'>
          <label htmlFor="message" className='label'>Meddelande</label>
          <textarea
            name='body'
            value={message['body']}
            onChange={handleChangeInput}
            cols="30"
            rows="10"
            className='input-field'
          />
        </div>

        <button type='submit' className='btn btn-gray'>Skicka meddelande</button>
      </form>

      <div className="contact-img">
        <div className="contact-social">
          <a href="https://twitter.com/FlexiClean"><AiOutlineTwitter size='2rem' color='#205065' /></a>
          <a href="https://www.linkedin.com/in/peder-eneroth-6543a366/"><AiFillLinkedin size='2rem' color='#205065' /></a>
          <a href="https://www.youtube.com/@FlexiClean"><AiFillYoutube size='2rem' color='#205065' /></a>
        </div>
        <div className="contact-info">
          <div className='contact-info-title'>Kontaktuppgifter</div>
          <div>Nummer: 05 75 839 33</div>
          <div>Email: info@flexiclean.eu</div>
          <div>Kontor: <div>Brandthovdagatan 16 <br /> 721 35 Västerås</div></div>
          <div>Öppettider:<div>må–fr: 07.00–16.00 <br />lö: stängt <br />sö: stängt</div></div>
        </div>
      </div>
    </section>
  )
}

export default Contact