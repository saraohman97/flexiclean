import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import BookModal from './bookModal/BookModal'
import NavbarDropdownContent from './NavbarDropdownContent'

const Navbar = () => {

    const [openBookModal, setOpenBookModal] = useState(false)

    const handleBookIconClick = () => {
        openBookModal
            ? setOpenBookModal(false)
            : setOpenBookModal(true)
    }


    return (
        <>
            {openBookModal && <div className='book-overlay' onClick={handleBookIconClick}></div>}
            <div className='navbar'>
                <div className='d-flex'>

                    <Link to='/'>
                        <img src="https://h24-original.s3.amazonaws.com/252829/24390025-9spXt.png" className='nav-logo' alt="" />
                    </Link>

                    <div className="nav-links">
                        <NavLink to='/products' className='nav-link dropdown'>Produkter <i className="fa-solid fa-chevron-down"></i> <NavbarDropdownContent /></NavLink>

                        <NavLink to='/documentation' className='nav-link'>Dokumentation</NavLink>
                        <NavLink to='/contacts' className='nav-link'>Kontakta Oss</NavLink>
                    </div>
                </div>
                <div className='d-flex nav-book-icon' onClick={handleBookIconClick}>
                    <i className="fa-solid fa-right-to-bracket"></i> <p>Beställ Filterpåse</p>
                </div>
                {openBookModal && <BookModal handleBookIconClick={handleBookIconClick} />}
            </div>
        </>
    )
}

export default Navbar