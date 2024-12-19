import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCategory } from '../../redux/actions/categoryAction'
import { getAllBrand } from '../../redux/actions/brandAction'
import ViewSearchProductHook from './../product/view-search-product-hook'
const AsideBarSearchHook = () => {
    const [searchProducts,pagination,onPress, getProduct, results] = ViewSearchProductHook();
     const dispatch = useDispatch();
    //when first load
    useEffect(() => {
        const get = async () => {
            await dispatch(getAllCategory());
            await dispatch(getAllBrand());
        }
        get();
    }, [])

    //to get state from redux
    const allCategories = useSelector(state => state.AllCategory.category)
    const allBrands = useSelector(state => state.AllBrand.brand)

    //
    let category=[]
    if(allCategories.data)
        category= allCategories.data

    let brand = []
    if(allBrands.data)
        brand = allBrands.data


    //checked category
    const [catChecked,setCatChecked] = useState([])
    let queryCat ="" , queryBrand =""
    const clickCategory =(e)=>{
        let value = e.target.value
        if(value === "0"){
          
            setCatChecked([])
        }else{
            if(e.target.checked === true){
              
                setCatChecked([...catChecked,value])
            } else if( e.target.value === false){ // يعني شال ال check من عليها
                const newArray = catChecked.filter((id)=> id !== value)
                
                setCatChecked(newArray)
            }
        }
    }
    
       useEffect(()=>{
              queryCat = catChecked.map((val)=> "category[in][]=" + val).join("&") // val === id of category 
                localStorage.setItem("catChecked", queryCat)
                setTimeout(()=>{
                getProduct()
       },1000)
        },[catChecked])
   
    
   // check brand
   const [brandChecked,setBrandChecked] = useState([])
   
    const clickBrand =(e)=>{
        let value = e.target.value
        if(value === "0"){
            setBrandChecked([])
        }else{
            if(e.target.checked === true){
                setBrandChecked([...brandChecked,value])
            } else if( e.target.value === false){
                const newArray = brandChecked.filter((id)=> id !== value)
                setBrandChecked(newArray)
            }
        }
    }

       useEffect(()=>{
              queryBrand = brandChecked.map((val)=> "brand[in][]=" + val).join("&") // val === id of brand 
                localStorage.setItem("brandChecked", queryBrand)
                setTimeout(()=>{
                getProduct()
       },1000)
        },[brandChecked])
   


        //price function
        const [pricefrom,setPriceFrom]= useState(0)
        const[priceto,setPriceTo] = useState(0)
        const priceFrom=(e)=>{
            localStorage.setItem("priceFrom",e.target.value)
             setPriceFrom(e.target.value)
        }
        const priceTo=(e)=>{
            localStorage.setItem("priceTo", e.target.value)
             setPriceTo(e.target.value)
        }

        useEffect(() => {
            setTimeout(() => {
                getProduct();
            }, 1000);
        }, [pricefrom, priceto])
    return [ category,brand,clickCategory, clickBrand, priceFrom , priceTo]

}

export default AsideBarSearchHook
