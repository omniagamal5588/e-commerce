import React from 'react'
import UserAsideBar from '../../Components/User/UserAsideBar'
import { Col,Row ,Container } from 'react-bootstrap'
import UserAllOrders from '../../Components/User/UserAllOrders'

const UsersAllOrdersPage = () => {
  return (
    <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <UserAsideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                  <UserAllOrders/>
                </Col>
            </Row>
        </Container>
  )
}

export default UsersAllOrdersPage
