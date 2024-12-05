import React  from 'react'
import CategoryCard from './CategoryCard'
import { Container,Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'
import { useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'


const CategoryContainer = ({ data ,loading}) => {
  console.log("data",data)

    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
    return (
        <Container >
            <div className="admin-content-text mt-2 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>

                {
                    loading === false ? (
                       data ? (
                            data.map((item, index) => {
                                return (<CategoryCard key={index} title={item.name} img={item.image} background={colors[Math.floor(Math.random() * 5) + 1]} />)
                            })
                        ) : <h4>لا يوجد تصنيفات</h4>
                    ) : <Spinner animation="border" variant="primary" />

                }

            </Row>
        </Container>
    )
}

export default CategoryContainer
