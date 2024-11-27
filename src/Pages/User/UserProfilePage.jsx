import React from 'react'
import UserAsideBar from '../../Components/User/UserAsideBar'
import UserProfile from '../../Components/User/UserProfile'
import { Container,Row ,Col } from 'react-bootstrap'


const UserProfilePage = () => {
   return (
        <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <UserAsideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                  <UserProfile />
                </Col>
            </Row>
        </Container>
    )
}

export default UserProfilePage
