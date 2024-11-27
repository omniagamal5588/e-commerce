import React from 'react'
import { Col, Container , Row } from 'react-bootstrap'
import AdminAsideBar from '../../Components/Admin/AdminAsideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import Pagination from '../../Components/utilities/Pagination'
const AdminAllProductsPage = () => {
   return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminAsideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllProducts />
                    <Pagination />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage
