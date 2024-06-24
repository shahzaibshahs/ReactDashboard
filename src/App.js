import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure to import Routes and BrowserRouter as Router
import Login from './Navbar/Login'; // Make sure this import is correct
import Register from './Navbar/Register';
import Home from './Navbar/Home';
import AddProduct from './Navbar/AddProduct';
import UpdateProduct from './Navbar/UpdateProduct';
import ProductList from './Navbar/ProductList';
import SearchComponent from './Navbar/SearchProduct';
import Protected from './Navbar/Protected';

function App() {
  return (
    <div className="App">
      <Router>
      
        <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Protected Component={Home} />} />
          <Route path='/add-product' element={<Protected Component={AddProduct} />} />
          <Route path='/product-list' element={<Protected Component={ProductList} />} />
          <Route path='/update-product/:id' element={<Protected Component={UpdateProduct} />} />
          <Route path='/search' element={<Protected Component={SearchComponent} />} />

        </Routes>
     
      </Router>
    </div>
  );
}

export default App;
