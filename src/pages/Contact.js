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
    <section className='container mx-auto my-40 px-20 flex gap-10 items-center'>
      <form onSubmit={handleSubmit} className='w-2/5'>
        <h1 className='text-xl mb-4'>Kontakta oss</h1>
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

      <div className="flex-1">
        <div className='flex flex-wrap gap-6 mb-6 items-end'>
          <div>Öppettider:<div>må–fr: 07.00–16.00 <br />lö: stängt <br />sö: stängt</div></div>
          <div>Kontor: <div>Brandthovdagatan 16 <br /> 721 35 Västerås</div></div>
          <div>
            <div>Nummer: 05 75 839 33</div>
            <div>Email: info@flexiclean.eu</div>
          </div>
        </div>

        <div className="flex gap-4">
          <a href="https://twitter.com/FlexiClean" className='text-2xl hover:text-blue-400'><AiOutlineTwitter /></a>
          <a href="https://www.linkedin.com/in/peder-eneroth-6543a366/" className='text-2xl hover:text-blue-400'><AiFillLinkedin /></a>
          <a href="https://www.youtube.com/@FlexiClean" className='text-2xl hover:text-blue-400'><AiFillYoutube /></a>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8072.103529496913!2d16.6098096!3d59.6159307!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e60cdcc4c588b%3A0x32db83df4d85a69d!2sAB%20Aros%20R%C3%B6r%20%26%20Svets!5e0!3m2!1ssv!2sse!4v1689242415700!5m2!1ssv!2sse" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Adress'></iframe>
      </div>
    </section>
  )
}

export default Contact