import logo from '../assets/logotype.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineDown } from "react-icons/ai";
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [showDropdown, setShowDropdown] = useState(true)
    const { currentUser, dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const logout = () => {
        signOut(auth).then(() => {
            dispatch({ type: "LOGOUT", payload: currentUser })
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <nav className='bg-gray-100 bg-opacity-95 fixed top-0 w-full z-50 h-16 flex items-center'>
            <div className="container mx-auto flex flex-row justify-between items-center max-sm:px-4">
                <NavLink to='/'><img src={logo} className='max-sm:h-8' alt="logotype flexiclean blue gray logo" /></NavLink>
                {currentUser ? (
                    <div>
                        <button className='btn btn-gray'><Link to='/skapa'>Skapa</Link></button>
                        <button onClick={logout} className='btn btn-blue ml-6'>Logout</button>
                    </div>
                ) : (
                    <>
                        <div onClick={() => setMenu(true)}>
                            <AiOutlineMenu className='lg:hidden text-2xl' />
                        </div>
                        <div className="flex flex-row gap-10 items-center max-lg:hidden">
                            <div className='dropdown py-4' onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                                Produkter
                                <AiOutlineDown />
                                {showDropdown && (
                                    <div className="dropdown-content w-10 rounded-lg" onClick={() => setShowDropdown(false)}>
                                        <NavLink to='/produkter' className='py-4 px-2 border-b hover:bg-gray-100 hover:border-b-0 rounded-t-lg'>Dagvatten- och granulatfilter</NavLink>
                                        <NavLink to='/projekt' className='py-4 px-2 border-b w-full hover:bg-gray-100 hover:border-0'>Stora projekt</NavLink>
                                        <NavLink to='/montage' className='py-4 px-2 w-full hover:bg-gray-100 hover:border-0 rounded-b-lg'>Montage</NavLink>
                                    </div>
                                )}
                            </div>
                            <NavLink to='/dokumentcenter'>Documentcenter</NavLink>
                            <NavLink to='/kontakta-oss'>Kontakta oss</NavLink>
                            <button className='w-40 px-4 py-2 border border-blue-400 font-bold text-blue-400 hover:text-white hover:bg-blue-400 rounded-full flex items-center justify-center' onClick={() => navigate('/beställ')}>Beställ</button>
                        </div>
                        {menu && (
                            <>
                                <div onClick={() => setMenu(false)} className='absolute inset-0 h-screen bg-black opacity-80' />
                                <div className='absolute top-0 right-0 bg-white opacity-100 h-screen flex flex-col gap-6 items-end max-sm:p-4 max-sm:w-60 w-96 py-10 px-16'>
                                    <div className='mb-10 text-xl' onClick={() => setMenu(false)}><AiOutlineClose /></div>
                                    <NavLink onClick={() => setMenu(false)} to='/produkter'>Produkter</NavLink>

                                    <div className="flex flex-col gap-2 items-end" onClick={() => setShowDropdown(false)}>
                                        <NavLink to='/produkter' onClick={() => setMenu(false)}>Dagvatten- och <br /> granulatfilter</NavLink>
                                        <NavLink to='/projekt' onClick={() => setMenu(false)}>Stora projekt</NavLink>
                                        <NavLink to='/montage' onClick={() => setMenu(false)}>Montage</NavLink>
                                    </div>

                                    <NavLink to='/dokumentcenter' onClick={() => setMenu(false)}>Documentcenter</NavLink>
                                    <NavLink to='/kontakta-oss' onClick={() => setMenu(false)}>Kontakta oss</NavLink>
                                    <button className='w-40 px-4 py-2 border border-blue-400 font-bold text-blue-400 hover:text-white hover:bg-blue-400 rounded-full flex items-center justify-center' onClick={() => navigate('/beställ')}>Beställ</button>
                                </div>
                            </>
                        )}
                    </>
                )}

            </div>
        </nav>
    )
}

export default Navbar