import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='absolute bottom-0 w-full bg-gray-100 p-10 flex flex-col gap-2 justify-center items-center'>
      <div className="flex items-center gap-6">
        <Link to='/' className='hover:text-blue-400'>Hem</Link>
        <Link to='/produkter' className='hover:text-blue-400'>Produkter</Link>
        <Link to='/kontakta-oss' className='hover:text-blue-400'>Kontakta oss</Link>
        <Link to={currentUser ? '/skapa' : '/admin'} className='hover:text-blue-400'>Admin</Link>
      </div>

      <small className='text-gray-400'>Copyright © 2015</small>

      <div className="flex items-center gap-6">
        <a href="https://twitter.com/FlexiClean" className='text-2xl hover:text-blue-400'><AiOutlineTwitter /></a>
        <a href="https://www.linkedin.com/in/peder-eneroth-6543a366/" className='text-2xl hover:text-blue-400'><AiFillLinkedin /></a>
        <a href="https://www.youtube.com/@FlexiClean" className='text-2xl hover:text-blue-400'><AiFillYoutube /></a>
      </div>
    </div>
  )
}

export default Footer