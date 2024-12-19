import React, { useEffect, useState } from 'react'
import ViewSearchProductHook from '../product/view-search-product-hook'

const navbarSearchHook = () => {
 const [searchProducts,pagination,onPress, getProduct] = ViewSearchProductHook();
  const [searchWord, setSearchWord] = useState('')
    const onChangeSearch =(e)=>{
      localStorage.setItem("searchWord",e.target.value)
        setSearchWord(e.target.value)
         const path = window.location.pathname;
        if (path != "/allproducts") {
           window.location.href = "/allproducts"
        }
      
    }

    useEffect(()=>{
      setTimeout(()=>{
        getProduct()
      }
      ,1000)
    },[searchWord])
  return [onChangeSearch,searchWord]
}


export default navbarSearchHook
