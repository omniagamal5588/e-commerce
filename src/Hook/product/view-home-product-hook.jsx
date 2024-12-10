import React, { useEffect } from 'react'
import{ getAllProducts} from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'

const ViewHomeProductHook = () => {
  // const  dispatch = useDispatch();
  // console.log(dispatch)
  // useEffect(()=>{
  //   dispatch(getAllProducts())
  // },[])

  // const allProducts = useSelector((state)=> state.allproducts.allProducts)

     const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    const allProducts = useSelector((state) => state.allproducts.allProducts)
    let items = []
    if(allProducts.data){
      items = allProducts.data.slice(0,4)
    }else{
      items = []
    }
  return [items]
}

export default ViewHomeProductHook
