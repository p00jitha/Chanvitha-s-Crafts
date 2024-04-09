import React from 'react';
import {Navigate, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Home from './components/sample/Home';
import LoginModal from './components/auth/loginModal';
import SignupModal from './components/auth/signupModal';
import Products from './components/sample/Products';
const App = () => {

  return (
        <div className="App">
          <Routes>
				<Route path='/' element={  <Home /> } />
				<Route path='/login' element={<LoginModal/>} />
				<Route path='/signup' element={ <SignupModal/>} />
        <Route path='/products' element={ <Products/>} />
			</Routes>
        </div>
  );
};

export default App;
