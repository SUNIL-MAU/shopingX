import React, { useEffect } from 'react'
import {Card,  Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productAction'

export default function Product() {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    console.log(productList)
    const { loading, products, error } = productList
    console.log(error)
    useEffect(() => {
        dispatch(listProducts())
        console.log(dispatch(listProducts()))
    }, [])

    return (
        <div className='productRow '>

            {products.map(product => (
                <Card style={{ width: '18rem' }} fluid className='border rounded m-auto' >
                    <Link to={`product/${product.id}`}>
                    <Card.Img variant="top" src={product.image} fluid className='p-3 border rounded' />
                    </Link>
                    <Card.Body>
                        <Row>
                            <Col ><Card.Title>{product.name}</Card.Title></Col>
                           
                        </Row>
                        <Row>
                            
                            <Col><Card.Title><span className='mr-1'>&#8377;</span>{product.price}</Card.Title></Col>
                        
                        </Row>
                    </Card.Body>
                </Card>))}

        </div>

    )
}
