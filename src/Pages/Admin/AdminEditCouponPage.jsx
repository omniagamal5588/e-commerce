import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminAsideBar from '../../Components/Admin/AdminAsideBar'
import AdminEditCoupon from '../../Components/Admin/AdminEditCoupon'
const AdminEditCouponPage = () => {
    return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminAsideBar />
                </Col>
                <Col sm="9" xs="10" md="10">
                   <AdminEditCoupon />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminEditCouponPage