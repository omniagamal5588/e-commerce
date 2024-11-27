import React from 'react'
import UserAllOrderItem from './UserAllOrderItem'
import { Row } from 'react-bootstrap'
const UserAllOrders = () => {
  return (
        <div>
        <div className="admin-content-text pb-4">Omnia Gamal</div>
        <Row className='justify-content-between'>
           <UserAllOrderItem />
           <UserAllOrderItem />
           <UserAllOrderItem />
        </Row>
        </div>
    )
}

export default UserAllOrders
