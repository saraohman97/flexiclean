import React from 'react'
import { useNavigate } from 'react-router-dom'
import PostForm from '../../components/admin/PostForm'
// import PostForm from '../../components/admin/PostForm'

const EditPost = () => {
  const navigate = useNavigate()

  return (
    <div className="admin-content">
      <button className="btn-close" onClick={() => navigate('/')}>X</button>
      <div className="admin-form">
        <h1 className='admin-title'>Skriv nyhet</h1>
        <h4 className='admin-subtitle'>Skriv ett nytt inlägg</h4>

        {/* {isLoading && <span className="loader"></span>}
        {isError && <h2>{`error: ${error.message}`}</h2>} */}
        {/* {post ? (<PostForm />) : null} */}
        <PostForm />
      </div>
    </div>
  )
}

export default EditPost