import React from 'react'

const ProductInfo = ({ data, setData, error }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label>Förnamn</label>
      <input type="text" className='border' value={data.firstName} onChange={(e) => setData({ ...data, firstName: e.target.value })} />
      {error === 'firstName' && <p className='text-sm text-red-500'>Field cannot be empty</p>}

      <label>Efternamn</label>
      <input type="text" className='border' value={data.lastName} onChange={(e) => setData({ ...data, lastName: e.target.value })} />
      {error === 'lastName' && <p className='text-sm text-red-500'>Field cannot be empty</p>}

      <label>Email</label>
      <input type="email" className='border' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />

      <label>Product</label>
      <select
        name="product"
        id="product"
        className='border'
        value={data.product}
        onChange={(e) => setData({ ...data, product: e.target.value })}
      >
        <option>Välj</option>
        <option value="product1">Product 1</option>
        <option value="product2">Product 2</option>
        <option value="filter1">Filter1</option>
        <option value="filter2">Filter2</option>
      </select>

      <label>Vill du bli uppringd?</label>
      <div className='flex gap-2'>
        <input type="checkbox" className='self-start' value={data.call} onChange={(e) => setData({ ...data, call: e.target.checked })} />
        <p>Ja</p>
      </div>

      {data.call && (
        <>
          <label>Nummer</label>
          <input type="email" className='border' value={data.number} onChange={(e) => setData({ ...data, number: e.target.value })} />
        </>
      )}
    </div>
  )
}

export default ProductInfo