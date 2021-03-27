import React from 'react'
import Carousel from './Carousel'
import Product from './Product'
import { Container } from 'react-bootstrap'
function Home() {
    return (
        <div style={{minHeight:'400vh'}} >
            <Carousel />
            <hr />
            <h3 className=" pl-3 text-left">Product List</h3>
            <hr />
            <Product />

        </div>
    )
}

export default Home
