import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Componants/Home';
import Nav from './Componants/Nav';
import Product from './Componants/Products';
import Singleproduct from './Componants/Singleproduct';
import Notfound from './Componants/Notfound';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path='/products' element={<Product/>}/>
        <Route path='/products/:id' element={<Singleproduct/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
