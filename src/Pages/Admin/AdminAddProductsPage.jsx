import React from 'react'
import AdminAsideBar from '../../Components/Admin/AdminAsideBar'
import AdminAddProducts from '../../Components/Admin/AdminAddProducts'
import{Col , Row , Container} from 'react-bootstrap'
const AdminAddProductsPage = () => {
  return (
     <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminAsideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                   <AdminAddProducts />
                </Col>
            </Row>
        </Container>
  )
}

export default AdminAddProductsPage
