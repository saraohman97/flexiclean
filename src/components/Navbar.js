import logo from '../assets/logotype.png'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineDown } from "react-icons/ai";
import PutOrder from './PutOrder';
import { useState } from 'react';

const Navbar = ({ menuOpen, orderModalOpen, setOrderModalOpen, setMenuOpen, closeBtn }) => {
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <nav>
            <div className="navbar-wrapper">
                <NavLink to='/'><img className='nav-logo' src={logo} alt="logotype flexiclean blue gray grey logo" /></NavLink>
                <div className="nav-links">
                    <div className='nav-link dropdown' onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                        Produkter
                        <AiOutlineDown />
                        {showDropdown && (
                            <div className="dropdown-content" onClick={() => setShowDropdown(false)}>
                                <NavLink to='/produkter' className='nav-link drop'>Dagvatten- och granulatfilter</NavLink>
                                <hr style={{ width: '100%', border: '1px solid rgb(239, 239, 239)' }} />
                                <NavLink to='/projekt' className='nav-link drop'>Stora projekt</NavLink>
                                <hr style={{ width: '100%', border: '1px solid rgb(239, 239, 239)' }} />
                                <NavLink to='/montage' className='nav-link drop'>Montage</NavLink>
                            </div>
                        )}
                    </div>
                    <NavLink to='/dokumentcenter' className='nav-link'>Documentcenter</NavLink>
                    <NavLink to='/kontakta-oss' className='nav-link'>Kontakta oss</NavLink>
                    <NavLink to='/beställning' className='btn btn-gray order' onClick={() => setOrderModalOpen(true)}>Beställ</NavLink>
                </div>
                {/* {orderModalOpen && <PutOrder setOrderModalOpen={setOrderModalOpen} />} */}

                {/* ------Menu------- */}
                {!menuOpen ? (
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
                )}
            </div>
        </nav>
    )
}

export default Navbar