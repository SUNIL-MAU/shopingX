import React from 'react'
import { Container } from 'react-bootstrap'

function Carousel() {
  return (
    <Container>
      <div id="carouselExampleSlidesOnly" className="carousel my-2 slide" data-mdb-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://mdbootstrap.com/img/new/slides/041.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://mdbootstrap.com/img/new/slides/042.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://mdbootstrap.com/img/new/slides/043.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Carousel
