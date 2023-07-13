import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products';
import Documents from './pages/Documents';
import Projects from './pages/Projects';
import Montage from './pages/Montage';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PutOrder from './components/PutOrder';
import Login from './pages/admin/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import NewPost from './pages/admin/NewPost';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [orderModalOpen, setOrderModalOpen] = useState(false)
  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/' />
  }

  const closeBtn = () => {
    setOrderModalOpen(true)
    setMenuOpen(false)
  }
  return (
    <div className='overflow-hidden'>

      <Navbar orderModalOpen={orderModalOpen} menuOpen={menuOpen} setOrderModalOpen={setOrderModalOpen} setMenuOpen={setMenuOpen} closeBtn={closeBtn} />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/produkter' element={<Products setOrderModalOpen={setOrderModalOpen} />} />
        <Route path='/dokumentcenter' element={<Documents />} />
        <Route path='/projekt' element={<Projects />} />
        <Route path='/montage' element={<Montage />} />
        <Route path='/kontakta-oss' element={<Contact />} />

        <Route path='/beställning' element={<PutOrder setOrderModalOpen={setOrderModalOpen} />} />

        <Route path='/admin' element={<Login />} />

        <Route path='/skapa' element={
          <RequireAuth>
            <NewPost />
          </RequireAuth>
        } />

        <Route path='/skapa/:id' element={
          <RequireAuth>
            <NewPost />
          </RequireAuth>
        } />
      </Routes>

      <Footer />

      <ScrollToTop />
      <ToastContainer />
    </div>
  );
}

export default App;
