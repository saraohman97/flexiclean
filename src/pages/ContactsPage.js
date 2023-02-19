import { useState } from 'react'
import ContactsFormInput from '../components/forms/FormInput'

const ContactsPage = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })

  const inputs = [
    {
      id: 1,
      name: 'fullName',
      type: 'text',
      label: 'För- och efternamn',
      errorMessage: 'Du måste ange ett för- och efternamn.',
      // pattern: "^[A-Za-z0-9]$",
      pattern: "(.|)*(.|)*",
      required: true
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      label: 'Email',
      errorMessage: 'Du måste ange en email adress.',
      required: true
    },
    {
      id: 3,
      name: 'subject',
      type: 'text',
      label: 'Ämne',
      errorMessage: 'Du måste ange ett ämne.',
      // pattern: "^[A-Za-z0-9]$",
      required: true
    },
    {
      id: 4,
      name: 'message',
      type: 'text',
      label: 'Meddelande',
      errorMessage: 'Du måste ange ett meddelande.',
      // pattern: "^[A-Za-z0-9]$",
      required: true
    },
  ]

  const handleSubmit = e => {
    e.preventDefault()

    const addMessage = { values }

    fetch('http://localhost:4000/messages', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addMessage)
    }).then(() => {
      console.log(addMessage)
    })
  }

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className='contacts-page'>
      <div className="call-us">
        <h3>Ring oss för process- eller dag-vattenråd:  08-120 17 530</h3>
      </div>
      <div className="container">

        <form onSubmit={handleSubmit}>
          <h2>Kontakta Oss</h2>
          {inputs.map(input => (
            <ContactsFormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}
          <button className='btn'>Skicka</button>
        </form>







        <div className='contacts-info'>

          <h2>Besök Oss</h2>

          <div>
            <label>Öppettider</label>
            <p>
              måndag - fredag: 07.00 - 16.00 ·
              lördag: stängt ·
              söndag: stängt
            </p>
          </div>

          <div className='contacts-info-text'>
            <div>
              <label>Adress</label>
              <p>
                Brandthovdagatan 16 <br />
                721 35 Västerås
              </p>
            </div>

            <div>
              <label>GPS</label>
              <p>
                WGS84: N 59° 36.9505', E 16° 36.5669' <br />
                Decimal: 59.6158, 16.6094
              </p>
            </div>
          </div>

          <iframe width="600" height="500" src="https://maps.google.com/maps?q=Brandthovdagatan%2016%20721%2035%20V%C3%A4ster%C3%A5s&t=&z=13&ie=UTF8&iwloc=&output=embed" title='This is a map to find FlexiClean'></iframe>
        </div>




        {/* 
        <form onSubmit={handleSubmitForm}>
          <h2>Kontakta Oss</h2>
          <div className="input-group">
            <label htmlFor="text">Ditt namn</label>
            <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} />
            {error && <p>{error.fullName}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="email">Din e-postadress</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            {error && <p>{error.email}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="text">Ämne</label>
            <input type="text" value={subject} onChange={e => setSubject(e.target.value)} />
          </div>

          <div className="input-group">
            <label htmlFor="message">Ditt meddelande</label>
            <textarea name="message" cols="30" rows="10" value={message} onChange={e => setMessage(e.target.value)}></textarea>
          </div>

          <button className='btn'>Skicka meddelande</button>
        </form> */}

      </div>
    </div>
  )
}

export default ContactsPage


// frameborder="0" marginHeight="0" marginWidth="0"