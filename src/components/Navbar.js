import logo from '../assets/logotype.png'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineDown } from "react-icons/ai";
import { useState } from 'react';

const Navbar = ({ menuOpen, orderModalOpen, setOrderModalOpen, setMenuOpen, closeBtn }) => {
    const [showDropdown, setShowDropdown] = useState(true)

    return (
        <nav className='bg-gray-100 bg-opacity-95 fixed top-0 w-full z-50'>
            <div className="container mx-auto flex flex-row justify-between items-center">
                <NavLink to='/'><img src={logo} alt="logotype flexiclean blue gray logo" /></NavLink>
                <div className="flex flex-row gap-10 items-center">
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
                    <NavLink to='/beställning' className='w-40 px-4 py-2 border border-blue-400 font-bold text-blue-400 hover:text-white hover:bg-blue-400 rounded-full flex items-center justify-center' onClick={() => setOrderModalOpen(true)}>Beställ</NavLink>
                </div>

                {/* ------Menu------- */}
                {/* {!menuOpen ? (
                    <div className="nav-link menu" onClick={() => setMenuOpen(true)}>
                        <strong>Meny</strong>
                    </div>
                ) : (
                    <div className="menu-content">
                        <div className="btn-close" onClick={() => setMenuOpen(false)}> X</div>
                        <Link to='/' onClick={() => setMenuOpen(false)} className='nav-link'>Hem</Link>
                        <div className='menu-df'>
                            <Link to='/produkter' onClick={() => setMenuOpen(false)} className='nav-link'>Dagvatten- och <br /> granulatfilter</Link>
                            <Link to='/projekt' onClick={() => setMenuOpen(false)} className='nav-link'>Stora projekt</Link>
                            <Link to='/montage' onClick={() => setMenuOpen(false)} className='nav-link'>Montage</Link>
                        </div>
                        <Link to='/dokumentcenter' onClick={() => setMenuOpen(false)} className='nav-link'>Documentcenter</Link>
                        <Link to='/kontakta-oss' onClick={() => setMenuOpen(false)} className='nav-link'>Kontakta oss</Link>
                        <button className='btn btn-gray' onClick={closeBtn}>Beställ</button>
                    </div>
                )} */}
            </div>
        </nav>
    )
}

export default Navbar