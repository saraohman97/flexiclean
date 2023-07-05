import { Link } from 'react-router-dom'
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {

  return (
    <div className='footer'>
      <div className="footer-links">
        <Link to='/' className='footer-link'>Hem</Link>
        <Link to='/produkter' className='footer-link'>Produkter</Link>
        <Link to='/kontakta-oss' className='footer-link'>Kontakta oss</Link>
        <Link to='/logga-in' className='footer-link'>Admin</Link>
      </div>

      <small className='copyright'>Copyright © 2015</small>

      <div className="footer-icons">
        <a href="https://twitter.com/FlexiClean" className='footer-icon'><AiOutlineTwitter /></a>
        <a href="https://www.linkedin.com/in/peder-eneroth-6543a366/" className='footer-icon'><AiFillLinkedin /></a>
        <a href="https://www.youtube.com/@FlexiClean" className='footer-icon'><AiFillYoutube /></a>
      </div>
    </div>
  )
}

export default Footer