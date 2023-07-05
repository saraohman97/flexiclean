// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const PostList = () => {
//   const navigate = useNavigate()


//   return (
//     <div className="admin-content">
//       <button className="btn-close" onClick={() => navigate('/')}>X</button>
//       <div className="admin-form">
//         <h1 className='admin-title'>Nyheter</h1>
//         <h4 className='admin-subtitle'>Redigera inlägg</h4>
//         <button onClick={() => navigate('/post/skapa')} className='btn btn-gray btn-admin'>Ny post</button>
//         <div className="posts">
//           {posts ? posts.map(post => (
//             <PostItem key={post.id} post={post} handleDelete={handleDelete} />
//           )) : null}
//           {isLoading && <span className="loader"></span>}
//           {isError && <h2>{`error: ${error.message}`}</h2>}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PostList


// const PostItem = ({ post, handleDelete }) => {
//   const navigate = useNavigate()
//   return (
//     <div className="post" key={post.id}>
//       <img src={post.image} className={post?.image === '' ? 'no-post-image' : 'post-image'} alt="" />

//       <div className={post?.image === '' ? 'post-data-only' : 'post-data'}>
//         <h2>{post.title}</h2>
//         <p>{post.message}</p>
//         <a href={post.link}>Link här.</a>
//         <div className="post-tools">
//           <button className='btn btn-gray' onClick={() => navigate(`/post/${post.id}/uppdatera`)}>Edit</button>
//           <button className='btn btn-blue' onClick={() => handleDelete(post.id)}>Ta bort</button>
//         </div>
//       </div>
//     </div>
//   )
// }