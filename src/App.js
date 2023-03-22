import { Route, Routes,} from 'react-router-dom';
import './App.css';

import Navbar from './component/Navbar/Navbar';
import Home from './component/pages/Home/Home'
import Services from './component/pages/Services/Services'
import Product from './component/pages/Products/Product'
import SighUp from './component/pages/SighUp/SightUp'
import Footer from './component/Footer/Footer'
import Login from './component/pages/Login/Login'

function App() {
  return (
    <>  
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/sighup" element={<SighUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
