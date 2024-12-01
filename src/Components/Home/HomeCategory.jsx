import React, { useEffect } from 'react'
import SubTitle from '../utilities/SubTitle'
import { Container,Row } from 'react-bootstrap'
import CategoryCard from '../Category/CategoryCard'
import { useDispatch,useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'
import Spinner from 'react-bootstrap/Spinner'

const HomeCategory = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAllCategory())
  },[])
  const category = useSelector(state=>state.AllCategory.category)
  const loading=useSelector(state=>state.AllCategory.loading)
  console.log(category)
  console.log(loading)
   const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
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





              
                {/* <CategoryCard title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={labtop} background="#0034FF" />
                <CategoryCard title="اجهزة منزلية" img={sale} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#FF6262" />
                <CategoryCard title="اجهزة منزلية" img={pic} background="#F4DBA4" /> */}
            </Row>
        </Container>
  )
}

export default HomeCategory
