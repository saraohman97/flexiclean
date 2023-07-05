import React from 'react'
import { useNavigate } from 'react-router-dom'

const Post = () => {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate("/")}>Back to list</button>
      {/* <h2>{post.title}</h2>
      <p>{post.message}</p> */}
    </div>
  )
}

export default Post