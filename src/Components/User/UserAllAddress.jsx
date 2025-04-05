import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserAddressCard from './UserAddressCard'
import ViewAddressHook from '../../Hook/user/view-adddress-hook'

const UserAllAddress = () => {
    const [response] = ViewAddressHook();
    if(response.data)
        console.log(response.data)
  return (
        <div>
            <div className="admin-content-text pb-4">دفتر العنوانين</div>
         {
                response.data ? (response.data.map((item, index) => {
                    return <UserAddressCard key={index} item={item} />
                })) : <h6>لا يوجد عنوانين حتى الان</h6>
            }

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address">اضافه عنوان جديد</button>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default UserAllAddress
