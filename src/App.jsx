// REACT Y ROUTER DOM
import { useState } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";


//  IMPORT COMPONENTS
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import Category from './components/Category/Category';
import Spinner from './components/Spinner/Spinner';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import { QtyProvider } from './context/QtyContext';
import { CartLengthContextProvider } from './context/CartLengthContext';

// IMPORT PAGES
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import DetailPage from './pages/DetailPage';
import ShopPage from './pages/ShopPage';

//  IMPORT LIBRARYS
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // SE UTILIZO UN SPINNER PARA QUE CADA VEZ QUE SE CARGUE LA PAGINA SE MUESTRE HASTA QUE TOME LOS DATOS DE LA API Y NO QUEDE VACIA POR ESA DEMORA
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <>
        <QtyProvider>
          <CartProvider>
            <CartLengthContextProvider>
              <div className='App'>
                <Header />
              </div>
              <div>
                <NavBar />
              </div>
              <div>
                <ItemListConteiner gretting="Aprovecha esta Semana de Hot Week" />
              </div>
              <div>
                {setTimeout(() => {
                  setIsLoading(false)
                }, 1000)};
                {isLoading ? (<Spinner />) :
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/detail/:id" element={<DetailPage />} />
                    <Route path="/category/:categoryId" element={<Category />} />
                    <Route path="/cart" element={<ShopPage />} />
                    <Route path="/error" element={<ErrorPage />} />
                    <Route path="*" element={<Navigate to="/error" />} />
                  </Routes>
                }
              </div>
              <br />
              <div>
                <Footer />
              </div>
            </CartLengthContextProvider>
          </CartProvider>
        </QtyProvider>
      </>
    </Router>
  )
}

export default App
