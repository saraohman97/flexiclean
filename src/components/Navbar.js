import { Link, NavLink } from 'react-router-dom'
import NavbarDropdownContent from './NavbarDropdownContent'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='d-flex gap'>

                <Link to='/'>
                    <img src="https://h24-original.s3.amazonaws.com/252829/24390025-9spXt.png" className='nav-logo' alt="" />
                </Link>

                <div className="nav-links">
                    <NavLink to='/products' className='nav-link dropdown'>Produkter <i className="fa-solid fa-chevron-down"></i> <NavbarDropdownContent /></NavLink>

                    <NavLink to='/documentation' className='nav-link'>Dokumentation</NavLink>
                    <NavLink to='/contacts' className='nav-link'>Kontakt Oss</NavLink>
                </div>
            </div>
            <div className='d-flex gap'>
                <i className="fa-solid fa-right-to-bracket"></i> <p>Boka filtertyg</p>
            </div>
        </div>
    )
}

export default Navbar