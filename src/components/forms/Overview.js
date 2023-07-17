import React from 'react'

const Overview = ({ data, yes }) => {
  return (
    <div>
      <h3 className='text-text-xl'>Den valda varan: </h3>
      {data.product}

      <p>Din information</p>
      {data.call ? <p>Du vill bli uppringd innan varan skickas för mer information.</p>
        : <p>Du vill inte bli uppringd.</p>}

      <p>Full namn: {data.firstName} {data.lastName}</p>
      <p>Email: {data.email}</p>
      {data.number && (
        <p>Nummer: {data.number}</p>
      )}

      {yes ? (
        <>
          <p>Leverans- och faktura address</p>
          {data.deliveryAdress}
        </>
      ) : (
        <div className='flex gap-4'>
          <div>
            <p>Leverans address</p>
            {data.deliveryAdress}
          </div>

          <div>
            <p>Faktura address</p>
            {data.deliveryAdress}
          </div>
        </div>
      )}
    </div>
  )
}

export default Overview