import React from 'react'
import AdminEditProduct from '../../Components/Admin/AdminEditProduct'
import { Container,Row, Col } from 'react-bootstrap'
import AdminAsideBar from '../../Components/Admin/AdminAsideBar'

const AdminEditProductPage = () => {
 return (<Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminAsideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                    <AdminEditProduct />
                </Col>
            </Row>
        </Container>)

     
}

export default AdminEditProductPage
