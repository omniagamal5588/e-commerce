import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTiltle from '../utilities/SubTitle'
import BrandCard from './BrandCard'
import HomeBrandHook from '../../Hook/brand/home-brand-hook'
import Spinner from 'react-bootstrap/Spinner'


const BrandFeatured = ({ title, btnTitle }) => {
    const [brand,loading] = HomeBrandHook();
        return (
        <Container>
            <SubTiltle title={title} btnTitle={btnTitle}  pathText='/allBrand' />
            <Row className='my-1 d-flex justify-content-between'>
               
                {
                   loading === false ? (
                        brand ? (
                            brand.slice(0, 5).map((item, index) => {
                                return (<BrandCard key={index}  img={item.image} />)
                            })
                        ) : <h4>لا يوجد تصنيفات</h4>
                    ) :  <Spinner animation="border" variant="secondary" />
                }
            </Row>
        </Container>
    )
}

export default BrandFeatured