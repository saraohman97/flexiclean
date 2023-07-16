import React, { useContext, useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase'

const Login = ({ setLogin }) => {
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
        <div className='fixed inset-0 z-50 flex justify-center items-center max-sm:mx-4'>
            <div onClick={() => setLogin(false)} className="fixed inset-0 w-full h-screen bg-black bg-opacity-30" />
            
            <form onSubmit={handleSubmit} className='absolute bg-white w-96 mx-auto justify-center rounded p-10 flex flex-col gap-4 max-sm:w-full max-sm:p-4'>
                <button onClick={() => setLogin(false)} className="self-end w-8 h-8 rounded-full flex justify-center items-center hover:bg-blue-300">X</button>

                <h3 className="text-blue-300 text-xl font-bold text-center">Logga in</h3>
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="bg-gray-100 p-4 rounded text-center w-full" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Lösenord" className="bg-gray-100 p-4 rounded text-center w-full" />
                {error && <p style={{ color: 'red' }}>Inkorrekt email eller lösenord</p>}
                <button className='self-center rounded p-3 w-60 mt-6 bg-blue-300 text-white font-bold hover:bg-blue-400'>Logga in</button>
            </form>
        </div>
    )
}

export default Login