import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../utilities/SubTitle'
import ProductCard from './ProductCard'

const CardProductContainer = ({title ,btnTitle ,pathText}) => {
  return (
    <Container>
        <Row>
        <SubTitle title={title} btnTitle={btnTitle} pathText={pathText}/>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </Row>
    </Container>
  )
}

export default CardProductContainer
