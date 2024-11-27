import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/utilities/SearchCountResult'
import SideFilter from '../../Components/utilities/SideFilter'
import { Row,Col,Container } from 'react-bootstrap'
import CardProductContainer from '../../Components/Products/CardProductContainer'
import Pagination from '../../Components/utilities/Pagination'
const ShopProductPage = () => {
 return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult title="400 نتجية بحث" />
                <Row className='d-flex flex-row'>
                    <Col sm="10" xs="10" md="11">
                         <CardProductContainer title="" btntitle=""/>
                    </Col>
                    <Col sm="2" xs="2" md="1" className='d-flex'>
                        <SideFilter />
                    </Col>
                  
                </Row>
                    <Pagination />
            </Container>
        </div>
    )
}

export default ShopProductPage
