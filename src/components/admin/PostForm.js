import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PostForm = ({ onSubmit, initialValue }) => {
    const current = new Date();
    const navigate = useNavigate()
    const [post, setPost] = useState({
        title: initialValue.title || "",
        message: initialValue.message || "",
        image: initialValue.image || "",
        link: initialValue.link || "",
        date: `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    })

    const handleChangeInput = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(post)
        setPost({
            title: "",
            message: "",
            image: "",
            link: "",
            date: ""
        })
        navigate('/post')
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="input-group">
                <label htmlFor="text" className='label'>Rubrik</label>
                <input name='title' value={post['title']} onChange={handleChangeInput} type="text" className='input-field' />
            </div>
            <div className="input-group">
                <label htmlFor="text" className='label'>Meddelande</label>
                <textarea name='message' value={post['message']} onChange={handleChangeInput} type="text" rows="5" className='input-field' />
            </div>
            <div className='admin-input-wrapper'>
                <div className="input-group">
                    <label htmlFor="text" className='label'>Bild</label>
                    {/* <input type='file' alt='text' accept=".jpg, .jpeg, .png" name='image' value={post['image']} onChange={handleChangeInput} className='input-field' /> */}
                    <input type='text' alt='text' accept=".jpg, .jpeg, .png" name='image' value={post['image']} onChange={handleChangeInput} className='input-field' />
                </div>
                <div className="input-group">
                    <label htmlFor="text" className='label'>Link</label>
                    <input type="text" name='link' value={post['link']} onChange={handleChangeInput} className='input-field' />
                </div>
            </div>

            <div className="btn-admin-wrapper">
                <button onClick={() => navigate('/post')} className='btn btn-gray'>Nyhets lista</button>
                <button type='submit' className='btn btn-blue'>Posta</button>
            </div>
        </form>
    )
}

export default PostForm