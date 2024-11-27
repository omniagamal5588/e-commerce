import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminAsideBar from '../../Components/Admin/AdminAsideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'


import AdminAddBrand from '../../Components/Admin/AdminAddBrand'
const AdminAddBrandPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminAsideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                     <AdminAddBrand />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAddBrandPage