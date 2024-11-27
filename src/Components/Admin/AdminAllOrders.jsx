import React from 'react'
import AdminAllOrderItem from './AdminAllOrderItem'
import { Row } from 'react-bootstrap'

const AdminAllOrders = () => {
  return (
    <div>
      <div className='admin-content-text'>ادراة جميع الطلبات</div>
      <Row className='justify-contebt-start'>
        <AdminAllOrderItem/>
        <AdminAllOrderItem/>
        <AdminAllOrderItem/>
        <AdminAllOrderItem/>
        <AdminAllOrderItem/>

      </Row>
    </div>
  )
}

export default AdminAllOrders
