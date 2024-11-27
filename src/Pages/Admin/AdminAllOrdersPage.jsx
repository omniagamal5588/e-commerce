import React from 'react'
import AdminAllOrders from '../../Components/Admin/AdminAllOrders'
import { Container,Row,Col } from 'react-bootstrap'
import AdminAsideBar from '../../Components/Admin/AdminAsideBar'
import Pagination from '../../Components/utilities/Pagination'

const AdminAllOrdersPage = () => {
  return (
 <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminAsideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminAllOrders />
                    <Pagination />
                </Col>
            </Row>
        </Container>
  )
}

export default AdminAllOrdersPage
