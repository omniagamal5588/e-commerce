import React from 'react'
import BrandCard from './BrandCard'

import { Container, Row, Spinner } from 'react-bootstrap';

const BrandContainer = ({ data , loading }) => {
    console.log('data in brand container is = ', data)
   
    return (
        <Container>
            <div className="admin-content-text mt-2 ">كل الماركات</div>
            <Row className='my-1 d-flex justify-content-between'>

                {
                    loading === false ? (
                        data ? (
                            data.map((item, index) => {
                                return (<BrandCard key={index} img={item.image} />)
                            })
                        ) : <h4>لا يوجد ماركات</h4>
                    ) : <Spinner animation="border" variant="primary" />
                }

            </Row>
        </Container>



//  <Container>
//             <div className="admin-content-text mt-2 ">كل الماركات</div>
//             <Row className='my-1 d-flex justify-content-between'>

//                 {
//                     loading === false ? (
//                         data ? (
//                             data.map((item, index) => {
//                                 return (<BrandCard key={index} img={item.image} />)
//                             })
//                         ) : <h4>لا يوجد ماركات</h4>
//                     ) : <Spinner animation="border" variant="primary" />
//                 }

//             </Row>
//         </Container>
    )
}

export default BrandContainer