import React from 'react'
import { Link } from 'react-router-dom'

const DeliveryInfo = ({ data, setData, setOrder }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label>Faktura adress</label>
      <input type="text" className='border' value={data.deliveryAdress} onChange={(e) => setData({ ...data, deliveryAdress: e.target.value })} />
      <small>Gatuadress, husnummer</small>

      <label>Ort</label>
      <input type="text" className='border' value={data.deliveryCounty} onChange={(e) => setData({ ...data, deliveryCounty: e.target.value })} />

      <label>Postnummer</label>
      <input type="text" className='border' value={data.deliveryPostcode} onChange={(e) => setData({ ...data, deliveryPostcode: e.target.value })} />

      <label>Land</label>
      <input type="text" className='border' value='Sverige' disabled={true} />
      <Link to='/kontakta-oss' onClick={() => setOrder(false)} className='text-xs text-blue-600 underline'>Det går bara att beställa inom Sverige. Kontakta oss för samarbeten utanför Sverige. </Link>
    </div>
  )
}

export default DeliveryInfo