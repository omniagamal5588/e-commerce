import React, { useEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/utilities/Pagination'
import { useDispatch,useSelector } from 'react-redux'
import { getAllCategory,getAllCategoryPage } from '../../redux/actions/categoryAction'

const AllCategoryPage = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAllCategory(8))
  },[])
   const category = useSelector(state=>state.AllCategory.category)
  
  const loading=useSelector(state=>state.AllCategory.loading)
  console.log(category)
  console.log(loading)

  let pageCount=0;
  if(category.paginationResult){
    pageCount= category.paginationResult.numberOfPages
  }
  const getPage=(page)=>{
   dispatch(getAllCategoryPage(page))
  }

  return (
    <div style={{ minHeight: "680px" }}>
    <CategoryContainer data={category} loading={loading} />
    
    <Pagination pageCount={pageCount} onPress={getPage}/>
    </div>
  )
}

export default AllCategoryPage
