
import Header from './components/Header'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import CartDisplay from './components/CartDisplay'

import { BrowserRouter as Router, Route } from "react-router-dom";

import React from 'react'
// import { Container, Button, Row, Col } from 'react-bootstrap'


function App() {

  return (
    <div>

      <Router>
        <Header />
        <Route path='/' component={Home} exact />
        <Route path='/product/:id' component={ProductDetails}/>
        <Route path='/cart/:id?' component={CartDisplay} />
      </Router>
      <br /><br />
      <hr />
      <h6 className=" pl-3 text-center ">Copyright © ShopingX</h6>
      <hr />
    </div>

  );
}

export default App;
