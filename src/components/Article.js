import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';


const Article = ({ post, handleDelete }) => {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className="sidebar-item">
      {post.image && <img src={post.image} className='article-img' alt="FlexiClean nyhetsflöde" />}
      <small className='sidebar-date'>{post.date}</small>
      <h3 className='sidebar-header'>{post.title}</h3>
      <p>{post.message}</p>
      <a href={post.link}><button className='btn btn-gray'>Läs</button></a>
    </div>
  )
}

export default Article