import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import "react-image-gallery/styles/css/image-gallery.css"
import ProductText from './ProductText'

const ProductDetails = () => {
  return (
   <Row className='d-flex flex-row py-3'>
   
    <Col lg='4'>
    <ProductGallery/>
    </Col>
     <Col lg='8'>
    <ProductText/>
    </Col>
   </Row>
  )
}

export default ProductDetails
