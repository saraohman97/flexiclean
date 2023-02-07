import React from 'react'

const ContactsPage = () => {
  return (
    <div className='contacts-page'>
      <div className="container">
        <form>
          <h2>Kontakta Oss</h2>
          <div className="input-group">
            <label htmlFor="name">Ditt namn</label>
            <input type="text" />
          </div>

          <div className="input-group">
            <label htmlFor="email">Din e-postadress</label>
            <input type="email" />
          </div>

          <div className="input-group">
            <label htmlFor="subject">Ämne</label>
            <input type="text" />
          </div>

          <div className="input-group">
            <label htmlFor="email">Din e-postadress</label>
            <textarea name="message" cols="30" rows="10"></textarea>
          </div>

          <button>Skicka meddelande</button>
        </form>


        <div className='contacts-info'>
          <h2>Besök Oss</h2>

          <div className='contacts-info-text'>
            <div>
              <label>Öppettider</label>
              <p>
                må-fr: 07.00-16.00 <br />
                lö: stängt <br />
                sö: stängt
              </p>
            </div>

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

          <div className='test'></div>


        </div>
      </div>
    </div>
  )
}

export default ContactsPage