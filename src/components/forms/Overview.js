import React from 'react'

const Overview = ({ data, yes }) => {
  return (
    <div className='flex flex-col gap-6'>
      <div>
        <h3 className='text-text-xl'>Den valda varan: </h3>
        {data.product}
      </div>

      <div>
        <p>Din information</p>
        {data.call ? <p>Du vill bli uppringd innan varan skickas för mer information.</p>
          : <p>Du vill inte bli uppringd.</p>}
        <p>Full namn: {data.firstName} {data.lastName}</p>
        <p>Email: {data.email}</p>
        {data.number && (
          <p>Nummer: {data.number}</p>
        )}
      </div>

      <div>
        {yes ? (
          <div className='flex flex-col'>
            <p>Leverans- och faktura address</p>
            <p>{data.deliveryAdress}</p>
            <p>{data.deliveryPostcode}, {data.deliveryCounty}</p>
            <p>Sverige</p>
          </div>
        ) : (
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col'>
              <p>Leverans address</p>
              <p>{data.deliveryAdress}</p>
              <p>{data.deliveryPostcode}, {data.deliveryCounty}</p>
              Sverige
            </div>

            <div className='flex flex-col'>
              <p>Faktura address</p>
              <p>{data.adress}</p>
              <p>{data.postcode}, {data.county}</p>
              Sverige
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Overview