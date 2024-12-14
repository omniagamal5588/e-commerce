import React from 'react'
import { Col, Container , Row } from 'react-bootstrap'
import AdminAsideBar from '../../Components/Admin/AdminAsideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import Pagination from '../../Components/utilities/Pagination'
import ViewProductAdminHook from '../../Hook/admin/view-product-admin-hook'


const AdminAllProductsPage = () => {
    const [items, pagination, onPress] = ViewProductAdminHook();
    
    console.log(items)
    if(pagination){
         var pageCount=pagination
    }
    console.log(pageCount)
   

   return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminAsideBar />
                </Col>
                <Col sm="9" xs="10" md="10">
                    <AdminAllProducts products={items} />
                    {
                        pageCount >1 ? ( <Pagination pageCount={pageCount} onPress={onPress} />):null
                    
                    }
                   
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage
