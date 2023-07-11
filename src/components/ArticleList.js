import React, { useContext, useEffect, useState } from 'react'
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';

const ArticleList = ({ sQuery }) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const { currentUser } = useContext(AuthContext)

    //read posts
    useEffect(() => {
        setLoading(true)
        const q = query(collection(db, 'posts'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let postsArr = []
            querySnapshot.forEach((doc) => {
                postsArr.push({ ...doc.data(), id: doc.id })
            })
            setPosts(postsArr)
            return () => unsubscribe()
        })
        setLoading(false)
    }, [])

    // delete post
    const handleDelete = async (id) => {
        try {
            setLoading(true)
            await deleteDoc(doc(db, 'posts', id));
            setLoading(false)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h3 className='text-xl text-blue-400 border-b mb-4 pb-2'>Nyheter</h3>
            <div>
                {loading && <p>Loading...</p>}
                {!posts && <p>No posts</p>}
                {/* {posts && posts.map((post) => (
                    <Article key={post.id} post={post} handleDelete={handleDelete} />
                ))} */}
                {posts && posts.map(post => (
                    <div key={post.id} className='flex flex-col gap-2 w-96 mb-10'>
                        <h2 className='text-2xl'>{post.title}</h2>
                        <small className='text-gray-500'>{post.timestamp.toDate().toString()}</small>
                        <img src={post.imgUrl} className='max-h-40 w-full object-cover' alt="" />
                        <button className='btn btn-gray'>Läs mer</button>
                        {currentUser && (
                            <div className='self-end'>
                                <button><BsTrash className='text-xl hover:text-red-500 mr-4' /></button>
                                <button><AiOutlineEdit className='text-xl hover:text-blue-500' /></button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArticleList