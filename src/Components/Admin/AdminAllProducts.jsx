import React from 'react'
import AdminAllProductsCard from './AdminAllProductsCard'
import { Row } from 'react-bootstrap'
const AdminAllProducts = ({products}) => {
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع المنتجات</div>
            <Row className='justify-content-start'>
                {
                    products?(
                        products.map((item , index)=>  <AdminAllProductsCard  key={index} item={item} />)
                    ):<h2>لا يوجد منتجات حني الان</h2>
                }
               
            </Row>
            
        </div>
    )
}

export default AdminAllProducts
