import { useState } from 'react'

const ContactsPage = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmitForm = e => {
    e.preventDefault()

    const addMessage = {fullName, email, subject, message}

    fetch('http://localhost:4000/messages', {
      method: "POST",
      headers: {"Content-Type": "application/json"}, 
      body: JSON.stringify(addMessage)
    }).then(() => {
      console.log(addMessage)
    })
  }

  return (
    <div className='contacts-page'>
      <div className="container">
        <form onSubmit={handleSubmitForm}>
          <h2>Kontakta Oss</h2>
          <div className="input-group">
            <label htmlFor="text">Ditt namn</label>
            <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} />
          </div>

          <div className="input-group">
            <label htmlFor="email">Din e-postadress</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
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
      </div>
    </div>
  )
}

export default ContactsPage


// frameborder="0" marginHeight="0" marginWidth="0"