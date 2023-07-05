import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { auth } from '../../firebase'

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { dispatch } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const data = userCredential.user;
                dispatch({ type: "LOGIN", payload: data })
                navigate('/create')
            })
            .catch((error) => {
                setError(true)
            });
    }

    return (
        <div className="admin-content">
            <Link to='/' className="btn-close">X</Link>

            <form onSubmit={handleSubmit} className='admin-form'>
                <h3 className="text-indigo-500 text-xl font-bold">Login</h3>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="bg-gray-100 p-4 rounded text-center max-sm:mb-4" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="bg-gray-100 p-4 rounded text-center" />
                {error && <p style={{ color: 'red' }}>Wrong email or password</p>}
                <button className='self-center hover:bg-white hover:text-gray-400 border border-3 rounded hover:border-gray-400 p-3 w-60 mt-6 border-indigo-500 bg-indigo-500 text-white font-bold'>Login</button>
            </form>
        </div>
    )
}

export default Login