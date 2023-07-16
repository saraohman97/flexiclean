import React from 'react'

const SignUp = ({ data, setData }) => {
  return (
    <div className='flex flex-col gap-2'>
      <label>Name</label>
      <input type="text" className='border' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
      <label>Email</label>
      <input type="email" className='border' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}/>
    </div>
  )
}

export default SignUp