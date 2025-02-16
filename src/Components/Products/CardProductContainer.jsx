import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../utilities/SubTitle'
import ProductCard from './ProductCard'
import CardContainerHook from '../../Hook/product/card-container-hook'

const CardProductContainer = ({title ,btnTitle ,pathText,products}) => {
    const [favProd] = CardContainerHook()
  return (
    <Container>
      {
        products? ( <SubTitle title={title} btnTitle={btnTitle} pathText={pathText}/>):null
      }
        <Row className='my-2 d-flex justify-content-between'>
           {
                    products ? (
                        products.map((item, index) => <ProductCard favProd={favProd} key={index} item={item} />)
                    ) : null

                }
        </Row>
    </Container>
  )
}

export default CardProductContainer
