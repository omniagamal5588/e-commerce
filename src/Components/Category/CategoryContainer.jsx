import React  from 'react'
import CategoryCard from './CategoryCard'
import { Container,Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'
import { useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'


const CategoryContainer = ({data,loading}) => {
    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
   const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAllCategory())
  },[])
  // const category = useSelector(state=>state.AllCategory.category)
  // const loading=useSelector(state=>state.AllCategory.loading)
  // console.log(category.data)
  // console.log(loading)
  return (
    <div>
       <Container>
         <div className="admin-content-text mt-2 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
              {
                    loading === false ? (
                        data ? (
                            data.slice(0, 5).map((item, index) => {
                                return (<CategoryCard key={index} title={item.name} img={item.image} background={
                                  colors[Math.floor(Math.random()*5)+1]
                                } />)
                            })
                        ) : <h4>لا يوجد تصنيفات</h4>
                    ) :  <Spinner animation="border" variant="secondary" />

                }
              
            </Row>
        </Container>
    </div>
  )
}

export default CategoryContainer
