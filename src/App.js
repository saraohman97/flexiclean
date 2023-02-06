import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import DocumentationPage from './pages/DocumentationPage'
import ContactsPage from './pages/ContactsPage'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/documentation' element={<DocumentationPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
