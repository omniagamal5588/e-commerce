import React, { useEffect } from 'react'
import SubTitle from '../utilities/SubTitle'
import { Container,Row } from 'react-bootstrap'
import CategoryCard from '../Category/CategoryCard'
import HomeCategoryHook from '../../Hook/category/home-category-hook'
import Spinner from 'react-bootstrap/Spinner'

const HomeCategory = () => {
  const [category,loading , colors]= HomeCategoryHook();
 console.log("omnia gamal")
   
  return (
    <Container>
            <SubTitle title="التصنيفات" btnTitle="المزيد" pathText="/allCategory" />
            <Row className='my-2 d-flex justify-content-between'>
             
             {
                    loading === false ? (
                        category ? (
                            category.slice(0, 5).map((item, index) => {
                                return (<CategoryCard key={index} title={item.name} img={item.image} background={colors[index]} />)
                            })
                        ) : <h4>لا يوجد تصنيفات</h4>
                    ) :  <Spinner animation="border" variant="secondary" />

                }

            </Row>
        </Container>
  )
}

export default HomeCategory
