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
                navigate('/skapa')
            })
            .catch((error) => {
                setError(true)
            });
    }

    return (
        <div className="absolute inset-0 flex justify-center items-center w-full h-screen bg-black z-50">

            <form onSubmit={handleSubmit} className='bg-white w-96 mx-auto justify-center rounded p-10 flex flex-col gap-4'>
            <Link to='/' className="self-end">X</Link>
                <h3 className="text-blue-300 text-xl font-bold text-center">Login</h3>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="bg-gray-100 p-4 rounded text-center w-full" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="bg-gray-100 p-4 rounded text-center w-full" />
                {error && <p style={{ color: 'red' }}>Wrong email or password</p>}
                <button className='self-center rounded p-3 w-60 mt-6 bg-blue-300 text-white font-bold hover:bg-blue-400'>Login</button>
            </form>
        </div>
    )
}

export default Login