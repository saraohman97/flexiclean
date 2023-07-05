import React from 'react'
import { useNavigate } from 'react-router-dom'
import PostForm from '../../components/admin/PostForm'

const AddPost = () => {
    const navigate = useNavigate()

    return (
        <div className="admin-content">
            <button className="btn-close" onClick={() => navigate('/')}>X</button>
            <div className="admin-form">
                <h1 className='admin-title'>Skriv nyhet</h1>
                <h4 className='admin-subtitle'>Skriv ett nytt inlägg</h4>

                <PostForm />
            </div>
        </div>
    )
}

export default AddPost