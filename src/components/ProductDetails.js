import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { productDetailAation } from '../actions/productDetailAction'
import { Container, Row, Col, Button, Image, ListGroup, Form } from 'react-bootstrap'

function ProductDetails({ match , history }) {
    const [qty, setQty] = useState(1)


    const dispatch = useDispatch()

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const productDetail = useSelector(state => state.productDetail)
    const { loading, product, error } = productDetail

    console.log(product)
    useEffect(() => {
        dispatch(productDetailAation(match.params.id))
    }, [dispatch])


    return (
        <div>
            <Container className='my-3'>
                <Link to="/">
                    <Button variant="light" className='my-3' >Go Back</Button>
                </Link>
                <Row>
                    <Col xs={12} lg={4} >
                        <Image src={product?.image} fluid className="border" style={{ height: "30rem" }} />
                    </Col>
                    <Col xs={12} lg={4}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{product?.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <span className="font-weight-bold">Brand:</span>
                                        <span >{product?.brand}</span>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <span className='mr-1'>&#8377;</span>{product?.price}
                            </ListGroup.Item>


                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <span className='font-weight-bold mr-2'>Description:</span>
                                        <span>{product?.description.substring(0, 200)}..</span>
                                    </Col>

                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <span className='font-weight-bold mr-2'>Category:</span>
                                        <span>{product?.category}</span>
                                    </Col>

                                </Row>
                            </ListGroup.Item>



                        </ListGroup>
                    </Col>

                    <Col xs={12} lg={4}>
                        <ListGroup>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><span className='mr-1'>&#8377;</span>{product?.price}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product?.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                                </Row>
                            </ListGroup.Item>

                            {product?.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Quantity:</Col>
                                        <Col>

                                            <Form.Control
                                                as="select"
                                                key={qty}
                                                onChange={(e) => setQty(e.target.value)}

                                            >
                                                {/* {console.log(...Array(product?.countInStock).keys())} */}
                                                {
                                                        [...Array(product?.countInStock).keys()].map(x=> (
                                                            <option 
                                                            key={x+1}
                                                            value={x+1}
                                                            >
                                                            {x+1}
                                                            </option>
                                                        ))
                                                            
                                                }
                                         </Form.Control>



                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}

                            <ListGroup.Item>
                                <Row>
                                    <Button
                                        onClick={addToCartHandler}
                                        className='btn-block'
                                        disabled={product?.countInStock == 0}
                                        type='button'
                                    >
                                        Add To Cart

                                    </Button>
                                </Row>
                            </ListGroup.Item>


                        </ListGroup>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default ProductDetails
