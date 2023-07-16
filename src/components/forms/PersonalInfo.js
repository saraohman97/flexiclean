import React from 'react'

const PersonalInfo = ({ data, setData }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label>Adress</label>
      <input type="text" className='border' value={data.adress} onChange={(e) => setData({ ...data, adress: e.target.value })} />
      <label>Card</label>
      <input type="text" className='border' value={data.card} onChange={(e) => setData({ ...data, card: e.target.value })} />
    </div>
  )
}

export default PersonalInfo