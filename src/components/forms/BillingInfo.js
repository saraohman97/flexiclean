import React from 'react'
import { Link } from 'react-router-dom'

const BillingInfo = ({ data, setData, setOrder, yes, setYes }) => {

  const handleChange = (event) => {
    setYes(event.target.checked);
  }

  return (
    <div className='flex flex-col gap-2'>
      <label>Är faktura adressen samma som leveransadressen?</label>
      <div className='flex gap-2'>
        <input type="checkbox" name='yes' onChange={handleChange} />
        <p>Ja</p>
      </div>

      <label>Faktura adress</label>
      <input type="text" className='border' disabled={yes ? true : false} value={yes ? data.deliveryAdress : data.adress} onChange={(e) => setData({ ...data, adress: e.target.value })} />
      <small>Gatuadress, husnummer</small>

      <label>Ort</label>
      <input type="text" className='border' disabled={yes ? true : false} value={yes ? data.deliveryCounty : data.county} onChange={(e) => setData({ ...data, county: e.target.value })} />

      <label>Postnummer</label>
      <input type="text" className='border' disabled={yes ? true : false} value={yes ? data.deliveryPostcode : data.postcode} onChange={(e) => setData({ ...data, postcode: e.target.value })} />

      <label>Land</label>
      <input type="text" className='border' value='Sverige' disabled={true} />
      <Link to='/kontakta-oss' onClick={() => setOrder(false)} className='text-xs'>Det går bara att beställa inom Sverige. Kontakta oss för samarbeten utanför Sverige. </Link>
    </div>
  )
}

export default BillingInfo