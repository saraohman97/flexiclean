import './App.css';
import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products';
import Documents from './pages/Documents';
import Projects from './pages/Projects';
import Montage from './pages/Montage';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import NewPost from './pages/admin/NewPost';

function App() {
  const { currentUser } = useContext(AuthContext)
  const [order, setOrder] = useState(false)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/' />
  }

  return (
    <div className='overflow-hidden'>

      <Navbar order={order} setOrder={setOrder} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produkter' element={<Products setOrder={setOrder} />} />
        <Route path='/dokumentcenter' element={<Documents />} />
        <Route path='/projekt' element={<Projects />} />
        <Route path='/montage' element={<Montage />} />
        <Route path='/kontakta-oss' element={<Contact />} />

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
